// utils/validation.ts

export const validateEmail = (value: string): string => {
  if (!value) return "Email is required";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value)) {
    return "Enter a valid email address";
  }

  return "";
};

export const validateName = (value: string, field: string): string => {
  if (!value.trim()) return `${field} is required`;

  if (!/^[A-Za-z]+$/.test(value)) {
    return `${field} should contain only letters`;
  }

  return "";
};

export const validateRequired = (value: string, field: string): string => {
  if (!value) return `${field} is required`;
  return "";
};
