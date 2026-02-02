import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Course from '@/models/course';
import courseValidation from '@/validations/course/course';
import { ApiResponse, Course as CourseType, PaginationInfo } from '@/types';

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';
    const level = searchParams.get('level') || '';
    const status = searchParams.get('status') || '';
    const category = searchParams.get('category') || '';
    const sortBy = searchParams.get('sortBy') || 'createdAt';
    const sortOrder = searchParams.get('sortOrder') === 'asc' ? 1 : -1;

    const filter: Record<string, unknown> = {};

    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { instructor: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    if (level && ['Beginner', 'Intermediate', 'Advanced'].includes(level)) {
      filter.level = level;
    }

    if (status && ['Active', 'Draft', 'Archived'].includes(status)) {
      filter.status = status;
    }

    if (category) {
      filter.category = { $regex: category, $options: 'i' };
    }

    const skip = (page - 1) * limit;

    const [courses, total] = await Promise.all([
      Course.find(filter)
        .sort({ [sortBy]: sortOrder })
        .skip(skip)
        .limit(limit)
        .lean(),
      Course.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(total / limit);

    const pagination: PaginationInfo = {
      page,
      limit,
      total,
      totalPages,
      hasMore: page < totalPages,
    };

    return NextResponse.json<ApiResponse<CourseType[]>>(
      {
        success: true,
        data: courses as CourseType[],
        pagination,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Get courses error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const validationResult = courseValidation.safeParse(body);
    if (!validationResult.success) {
      const errors = validationResult.error.issues
        .map((e: { message: string }) => e.message)
        .join(', ');
      return NextResponse.json<ApiResponse>(
        { success: false, error: errors },
        { status: 400 }
      );
    }

    const course = await Course.create(validationResult.data);

    return NextResponse.json<ApiResponse<CourseType>>(
      {
        success: true,
        data: course.toObject() as CourseType,
        message: 'Course created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Create course error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, error: 'Failed to create course' },
      { status: 500 }
    );
  }
}
