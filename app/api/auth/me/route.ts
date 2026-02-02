import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/user';
import { verifyToken, extractTokenFromHeader } from '@/lib/auth';
import { ApiResponse, AuthUser } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    const token = extractTokenFromHeader(authHeader);

    if (!token) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'No token provided' },
        { status: 401 }
      );
    }

    // Verify token
    const payload = await verifyToken(token);
    if (!payload) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    await connectDB();

    // Get user from database
    const user = await User.findById(payload.userId).select('-password');
    if (!user) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'User not found' },
        { status: 404 }
      );
    }

    const authUser: AuthUser = {
      _id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    };

    return NextResponse.json<ApiResponse<AuthUser>>(
      {
        success: true,
        data: authUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get user error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
