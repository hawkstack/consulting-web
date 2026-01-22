  // phone validation
  export const validatePhone = (value: string): string => {
    if (!value) return "Contact number is required";

    if (!/^\d+$/.test(value)) {
      return "Only numbers are allowed";
    }

    if (value.length < 7 || value.length > 15) {
      return "Enter a valid contact number";
    }

    return "";
  };

  // email validation
  export const validateEmail = (value: string): string => {
    if (!value) return "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Enter a valid email address";
    }

    return "";
  };