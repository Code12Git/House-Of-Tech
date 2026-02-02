import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/user';
import { generateToken, comparePassword } from '@/lib/auth';
import { loginValidation } from '@/validations/user/user';
import { ApiResponse, AuthResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    // Validate input
    const validationResult = loginValidation.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((e: { message: string }) => e.message).join(', ');
      return NextResponse.json<ApiResponse>(
        { success: false, error: errors },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data;

    // Find user with password field
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
    if (!user) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Compare password
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }

    // Generate token
    const token = await generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });

    const authResponse: AuthResponse = {
      user: {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    };

    return NextResponse.json<ApiResponse<AuthResponse>>(
      {
        success: true,
        data: authResponse,
        message: 'Login successful',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
