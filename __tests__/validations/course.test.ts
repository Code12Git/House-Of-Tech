import { describe, it, expect } from 'vitest';
import { createCourseSchema, updateCourseSchema } from '@/validations/course/course';

describe('Course Validation Schema', () => {
  describe('createCourseSchema', () => {
    it('should validate a valid course', () => {
      const validCourse = {
        title: 'Introduction to TypeScript',
        instructor: 'John Doe',
        description: 'Learn TypeScript from scratch',
        duration: 10,
        price: 99.99,
        level: 'Beginner',
        status: 'Active',
        category: 'Programming',
      };

      const result = createCourseSchema.safeParse(validCourse);
      expect(result.success).toBe(true);
    });

    it('should fail for missing required fields', () => {
      const invalidCourse = {
        title: 'Test Course',
      };

      const result = createCourseSchema.safeParse(invalidCourse);
      expect(result.success).toBe(false);
    });

    it('should fail for invalid price', () => {
      const invalidCourse = {
        title: 'Test Course',
        instructor: 'John',
        price: -10,
        level: 'Beginner',
        status: 'Active',
      };

      const result = createCourseSchema.safeParse(invalidCourse);
      expect(result.success).toBe(false);
    });

    it('should fail for invalid level', () => {
      const invalidCourse = {
        title: 'Test Course',
        instructor: 'John',
        price: 99,
        level: 'Expert', // invalid level
        status: 'Active',
      };

      const result = createCourseSchema.safeParse(invalidCourse);
      expect(result.success).toBe(false);
    });

    it('should fail for invalid status', () => {
      const invalidCourse = {
        title: 'Test Course',
        instructor: 'John',
        price: 99,
        level: 'Beginner',
        status: 'Pending',
      };

      const result = createCourseSchema.safeParse(invalidCourse);
      expect(result.success).toBe(false);
    });
  });

  describe('updateCourseSchema', () => {
    it('should validate partial updates', () => {
      const partialUpdate = {
        title: 'Updated Title',
      };

      const result = updateCourseSchema.safeParse(partialUpdate);
      expect(result.success).toBe(true);
    });

    it('should allow empty object for update', () => {
      const result = updateCourseSchema.safeParse({});
      expect(result.success).toBe(true);
    });
  });
});
