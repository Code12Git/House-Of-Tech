import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Course from '@/models/course';
import courseValidation from '@/validations/course/course';
import { ApiResponse, Course as CourseType } from '@/types';

type RouteParams = { params: Promise<{ id: string }> };

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();
    const { id } = await params;

    const course = await Course.findById(id).lean();

    if (!course) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json<ApiResponse<CourseType>>(
      { success: true, data: course as CourseType },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get course error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Failed to fetch course' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();
    const { id } = await params;
    const body = await request.json();

    const validationResult = courseValidation.partial().safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues
        .map((e: { message: string }) => e.message)
        .join(', ');
      return NextResponse.json<ApiResponse>(
        { success: false, error: errors },
        { status: 400 }
      );
    }

    const course = await Course.findByIdAndUpdate(
      id,
      { $set: validationResult.data },
      { new: true, runValidators: true }
    ).lean();

    if (!course) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json<ApiResponse<CourseType>>(
      {
        success: true,
        data: course as CourseType,
        message: 'Course updated successfully',
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Update course error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Failed to update course' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    await connectDB();
    const { id } = await params;

    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return NextResponse.json<ApiResponse>(
        { success: false, error: 'Course not found' },
        { status: 404 }
      );
    }

    return NextResponse.json<ApiResponse>(
      { success: true, message: 'Course deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Delete course error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Failed to delete course' },
      { status: 500 }
    );
  }
}
