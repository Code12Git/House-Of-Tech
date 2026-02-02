import { z } from 'zod';

// Login Validation
export const loginValidation = z.object({
  email: z.string()
    .trim()
    .email('Invalid email format')
    .min(1, 'Email is required'),

  password: z.string()
    .min(1, 'Password is required'),
});

// Register Validation
export const registerValidation = z.object({
  name: z.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters'),

  email: z.string()
    .trim()
    .email('Invalid email format')
    .min(1, 'Email is required'),

  password: z.string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password cannot exceed 50 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),

  role: z.enum(['Student', 'Instructor'], {
    message: 'Role must be Student or Instructor'
  }).default('Student'),
});

// Update Profile Validation
export const updateProfileValidation = z.object({
  name: z.string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name cannot exceed 100 characters')
    .optional(),

  email: z.string()
    .trim()
    .email('Invalid email format')
    .optional(),
});

// Change Password Validation
export const changePasswordValidation = z.object({
  currentPassword: z.string()
    .min(1, 'Current password is required'),

  newPassword: z.string()
    .min(6, 'New password must be at least 6 characters')
    .max(50, 'Password cannot exceed 50 characters')
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    ),
});

export type LoginInput = z.infer<typeof loginValidation>;
export type RegisterInput = z.infer<typeof registerValidation>;
export type UpdateProfileInput = z.infer<typeof updateProfileValidation>;
export type ChangePasswordInput = z.infer<typeof changePasswordValidation>;
