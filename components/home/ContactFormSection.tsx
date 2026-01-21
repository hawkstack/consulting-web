"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

type SubmitStatus = "idle" | "success" | "error" | "oops";

const ContactForm: React.FC = (): JSX.Element => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [phoneError, setPhoneError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const isFormValid: boolean =
    Boolean(formData.firstname.trim()) &&
    Boolean(formData.lastname.trim()) &&
    Boolean(formData.email.trim()) &&
    Boolean(formData.phone.trim()) &&
    !phoneError &&
    !emailError;

  // phone validation
  const validatePhone = (value: string): string => {
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
  const validateEmail = (value: string): string => {
    if (!value) return "Email is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Enter a valid email address";
    }

    return "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      setPhoneError(validatePhone(value));
    }

    if (name === "email") {
      setEmailError(validateEmail(value));
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const phoneValidationError = validatePhone(formData.phone);
    const emailValidationError = validateEmail(formData.email);
    if (phoneValidationError || emailValidationError) {
      setPhoneError(phoneValidationError);
      setEmailError(emailValidationError);
      return;
    }

    if (!isFormValid) return;

    setLoading(true);
    setSubmitStatus("idle");

    const API_BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

    try {
      const response: Response = await fetch(`${API_BASE_URL}/api/contacts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          firstname: "",
          lastname: "",
          email: "",
          phone: "",
        });
        setPhoneError("");
        setEmailError("");
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("oops");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="relative w-full bg-[#0E245A]">
        <div className="flex flex-col items-center px-4 pt-20 md:pt-28 pb-20 md:pb-28 text-white">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-['Lexend_Deca'] text-[24px] md:text-[32px] lg:text-[36px] font-medium leading-tight">
              Let’s Build Your Platform, the Right Way
            </h2>

            <p className="mt-4 font-['Lexend_Deca'] text-[14px] md:text-[16px] max-w-xl mx-auto">
              From Red Hat training to enterprise consulting,
              <br className="hidden md:block" />
              we’ll help you move faster and smarter.
            </p>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="mt-12 md:mt-16 w-full max-w-[713px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,#111B2D_0%,#0E1726_45%,#0A1220_100%)] px-6 md:px-10 py-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 pl-4 text-[12px] font-medium">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  className="w-full h-12 rounded-lg bg-[#0B1220] px-4 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 pl-4 text-[12px] font-medium">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  className="w-full h-12 rounded-lg bg-[#0B1220] px-4 text-sm outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 pl-4 text-[12px] font-medium">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your work email"
                  className="w-full h-12 rounded-lg bg-[#0B1220] px-4 text-sm outline-none"
                />
                {/* Inline email error */}
                {emailError && (
                  <p className="mt-1 pl-4 text-xs text-red-400">{emailError}</p>
                )}
              </div>

              <div>
                <label className="block mb-2 pl-4 text-[12px] font-medium">
                  Contact Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  className="w-full h-12 rounded-lg bg-[#0B1220] px-4 text-sm outline-none"
                />
                {/* Inline phone error */}
                {phoneError && (
                  <p className="mt-1 pl-4 text-xs text-red-400">{phoneError}</p>
                )}
              </div>
            </div>

            <div className="mt-8 text-center">
              <h4 className="text-[16px] md:text-[18px] font-bold text-[#DDDEDF]">
                Schedule a Demo Call
              </h4>
              <p className="mt-1 text-[14px] text-[#7F858B]">
                Arrange a demo with a member of our team.
              </p>
            </div>

            <button
              type="submit"
              disabled={!isFormValid || loading}
              className="mt-8 w-full h-12 rounded-full bg-[#0E245A] hover:bg-[#1b3a8f] transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        {/* IMAGE ONLY OVERLAY */}
        {submitStatus !== "idle" && (
          <div
            className="absolute inset-0 z-50 grid place-items-center bg-black/50 px-4"
            onClick={() => setSubmitStatus("idle")}
          >
            <img
              src={`/images/form-feedback/${
                submitStatus === "success"
                  ? "success"
                  : submitStatus === "error"
                  ? "error"
                  : "oops"
              }.webp`}
              alt={submitStatus}
              className="max-w-full max-h-[80%] object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
