import { describe, it, expect } from 'vitest';
import { loginValidation, registerValidation } from '@/validations/user/user';

describe('User Validation Schema', () => {
  describe('loginValidation', () => {
    it('should validate valid login credentials', () => {
      const validCredentials = {
        email: 'test@example.com',
        password: 'password123',
      };

      const result = loginValidation.safeParse(validCredentials);
      expect(result.success).toBe(true);
    });

    it('should fail for invalid email', () => {
      const invalidCredentials = {
        email: 'invalid-email',
        password: 'password123',
      };

      const result = loginValidation.safeParse(invalidCredentials);
      expect(result.success).toBe(false);
    });

    it('should fail for empty password', () => {
      const invalidCredentials = {
        email: 'test@example.com',
        password: '',
      };

      const result = loginValidation.safeParse(invalidCredentials);
      expect(result.success).toBe(false);
    });
  });

  describe('registerValidation', () => {
    it('should validate valid registration data', () => {
      const validData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'SecurePass123',
        role: 'Student',
      };

      const result = registerValidation.safeParse(validData);
      expect(result.success).toBe(true);
    });

    it('should fail for missing name', () => {
      const invalidData = {
        email: 'john@example.com',
        password: 'SecurePass123',
      };

      const result = registerValidation.safeParse(invalidData);
      expect(result.success).toBe(false);
    });

    it('should accept valid roles', () => {
      const studentData = {
        name: 'Student User',
        email: 'student@example.com',
        password: 'Password123',
        role: 'Student',
      };

      const instructorData = {
        name: 'Instructor User',
        email: 'instructor@example.com',
        password: 'Password123',
        role: 'Instructor',
      };

      expect(registerValidation.safeParse(studentData).success).toBe(true);
      expect(registerValidation.safeParse(instructorData).success).toBe(true);
    });

    it('should fail for invalid role', () => {
      const invalidData = {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'Password123',
        role: 'SuperAdmin',
      };

      const result = registerValidation.safeParse(invalidData);
      expect(result.success).toBe(false);
    });
  });
});
