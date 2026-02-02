import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/user';
import { generateToken, comparePassword } from '@/lib/auth';
import { loginValidation } from '@/validations/user/user';
import { ApiResponse, AuthResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    console.log('[LOGIN] API called');
    
    // Connect to database
    console.log('[LOGIN] Connecting to MongoDB...');
    await connectDB();
    console.log('[LOGIN] MongoDB connected');

    const body = await request.json();
    console.log('[LOGIN] Request body received:', { email: body.email });

    // Validate input
    const validationResult = loginValidation.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((e: { message: string }) => e.message).join(', ');
      console.log('[LOGIN ERROR] Validation failed:', errors);
      return NextResponse.json<ApiResponse>(
        { success: false, error: errors },
        { status: 400 }
      );
    }

    const { email, password } = validationResult.data;
    console.log('[LOGIN] Looking for user:', email);

    // Find user with password field
    const user = await User.findOne({ email: email.toLowerCase() }).select('+password');
    if (!user) {
      console.log('[LOGIN ERROR] User not found:', email);
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    console.log('[LOGIN] User found:', user.email);

    // Compare password
    console.log('[LOGIN] Comparing password...');
    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      console.log('[LOGIN ERROR] Invalid password');
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Invalid email or password' },
        { status: 401 }
      );
    }
    console.log('[LOGIN] Password valid');

    // Generate token
    console.log('[LOGIN] Generating JWT token...');
    const token = await generateToken({
      userId: user._id.toString(),
      email: user.email,
      role: user.role,
    });
    console.log('[LOGIN] Token generated');

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
    console.error('[LOGIN ERROR] Login error:', error);
    console.error('[LOGIN ERROR] Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    return NextResponse.json<ApiResponse>(
      { success: false, error: `Login failed: ${errorMessage}` },
      { status: 500 }
    );
  }
}
