"use client";

import {
  forwardRef,
  useState,
  ChangeEvent,
  FormEvent,
} from "react";
import { validateEmail, validatePhone } from "../utils/validations";

type FormSource =
  | "openshift"
  | "unified"
  | "get_started"
  | "demo_call";

interface ContactFormData {
 source: FormSource;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

type SubmitStatus = "idle" | "success" | "error" | "oops";

type ContactFormProps = {
  source?: FormSource;
};

const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(
  ({ source }, ref) => {
    const [formData, setFormData] = useState<ContactFormData & { source: FormSource }>({
      source : "demo_call",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });

    const [loading, setLoading] = useState(false);
    const [submitStatus, setSubmitStatus] =
      useState<SubmitStatus>("idle");
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");

    const { firstName, lastName, email, phone } = formData;

    const isFormValid =
      Boolean(firstName.trim()) &&
      Boolean(lastName.trim()) &&
      Boolean(email.trim()) &&
      Boolean(phone.trim()) &&
      !phoneError &&
      !emailError;

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const phoneValidationError = validatePhone(phone);
      const emailValidationError = validateEmail(email);

      if (phoneValidationError || emailValidationError) {
        setPhoneError(phoneValidationError);
        setEmailError(emailValidationError);
        return;
      }

      if (!isFormValid) return;

      setLoading(true);
      setSubmitStatus("idle");

      const API_BASE_URL =
        process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/consultingForms`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        await response.json();

        if (response.ok) {
          setSubmitStatus("success");

          setFormData({
            source: formData.source,
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
          });

          setPhoneError("");
          setEmailError("");
        } else {
          setSubmitStatus("error");
        }

        setTimeout(() => {
          setSubmitStatus("idle");
        }, 2000);
      } catch {
        setSubmitStatus("oops");
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 2000);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div ref={ref} className="w-full bg-white">
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
              className="mt-12 md:mt-16 w-full max-w-[713px] rounded-[24px]
              border border-white/10
              bg-[#101927]
              px-6 md:px-10 py-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block mb-2 pl-4 text-[12px] font-medium">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                    placeholder="Enter your first name"
                    className="w-full h-12 rounded-xl bg-[#020916]
                    px-4 text-sm outline-none"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block mb-2 pl-4 text-[12px] font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                    placeholder="Enter your last name"
                    className="w-full h-12 rounded-xl bg-[#020916]
                    px-4 text-sm outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block mb-2 pl-4 text-[12px] font-medium">
                    Work Email Address{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Enter your work email"
                    className="w-full h-12 rounded-xl bg-[#020916]
                    px-4 text-sm outline-none"
                  />

                  {emailError && (
                    <p className="mt-1 pl-4 text-xs text-red-400">
                      {emailError}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-2 pl-4 text-[12px] font-medium">
                    Contact Number{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={handleChange}
                    placeholder="Enter your contact number"
                    className="w-full h-12 rounded-xl bg-[#020916]
                    px-4 text-sm outline-none"
                  />
                  {phoneError && (
                    <p className="mt-1 pl-4 text-xs text-red-400">
                      {phoneError}
                    </p>
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
                className="font-semibold text-center mt-8 w-full h-12 rounded-full bg-[#0E245A]
                hover:bg-[#1b3a8f]"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>

          {submitStatus !== "idle" && (
            <div className="absolute inset-0 z-50 grid place-items-center bg-black/50 px-4">
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
  }
);

ContactForm.displayName = "ContactForm";
export default ContactForm;