import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import User from '@/models/user';
import { generateToken, hashPassword } from '@/lib/auth';
import { registerValidation } from '@/validations/user/user';
import { ApiResponse, AuthResponse } from '@/types';

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    // Validate input
    const validationResult = registerValidation.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues.map((e: { message: string }) => e.message).join(', ');
      return NextResponse.json<ApiResponse>(
        { success: false, error: errors },
        { status: 400 }
      );
    }

    const { name, email, password, role } = validationResult.data;

    // Check if user already exists
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'User with this email already exists' },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      role: role || 'Student',
    });

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
        message: 'Registration successful',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
