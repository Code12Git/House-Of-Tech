import { z } from 'zod';

const courseValidation = z.object({
  title: z.string()
    .trim()
    .min(1, 'Title is required')
    .max(200, 'Title cannot exceed 200 characters'),

  instructor: z.string()
    .trim()
    .min(1, 'Instructor is required'),

  description: z.string()
    .trim()
    .max(2000, 'Description cannot exceed 2000 characters')
    .optional(),

  duration: z.number()
    .min(0, 'Duration cannot be negative')
    .default(0),

  price: z.number()
    .min(0, 'Price cannot be negative')
    .default(0),

  level: z.enum(['Beginner', 'Intermediate', 'Advanced'], {
    message: 'Level must be Beginner, Intermediate, or Advanced'
  }).default('Beginner'),

  status: z.enum(['Active', 'Draft', 'Archived'], {
    message: 'Status must be Active, Draft, or Archived'
  }).default('Draft'),

  students: z.number()
    .min(0, 'Students cannot be negative')
    .default(0),

  enrolledStudents: z.array(z.string())
    .optional()
    .default([]),

  thumbnail: z.string()
    .optional()
    .default(''),

  category: z.string()
    .trim()
    .optional(),
});

// Create course schema (all required fields must be present)
export const createCourseSchema = courseValidation;

// Update course schema (all fields optional for partial updates)
export const updateCourseSchema = courseValidation.partial();

export type CourseInput = z.infer<typeof courseValidation>;

export default courseValidation;