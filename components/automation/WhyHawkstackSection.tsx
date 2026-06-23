"use client";

import { FormEvent, useState } from "react";
import type { AutomationWhyHawkstackSectionContent } from "@/app/types/automation";
import { validateEmail, validateRequired } from "@/utils/validation";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM_STATE: FormState = {
  name: "",
  email: "",
  message: "",
};

export default function WhyHawkstackSection({
  content,
}: {
  content: AutomationWhyHawkstackSectionContent;
}) {
  const [values, setValues] = useState<FormState>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFieldChange = (name: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]:
          name === "email"
            ? validateEmail(value.trim())
            : validateRequired(
                value.trim(),
                name === "name" ? "Name" : "Message",
              ),
      }));
    }
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {
      name: validateRequired(values.name.trim(), "Name"),
      email: validateEmail(values.email.trim()),
      message: validateRequired(values.message.trim(), "Message"),
    };

    (Object.keys(nextErrors) as Array<keyof FormErrors>).forEach((key) => {
      if (!nextErrors[key]) {
        delete nextErrors[key];
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: content.form.source,
          firstName: values.name,
          lastName: "",
          email: values.email,
          phone: "",
          message: values.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setValues(INITIAL_FORM_STATE);
      setErrors({});
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white font-lexend">
      <div className="px-4 py-12 md:px-14 md:py-16 lg:px-20 lg:py-24 xl:px-24 xl:py-20">
        <div className="mx-auto max-w-7xl rounded-[18px] bg-[linear-gradient(90deg,#CBDAFF_0%,#E4F7FF_52%,#CFE0FF_100%)] px-[16px] py-[24px] md:rounded-[16px] md:px-[34px] md:py-[28px] lg:rounded-[22px] lg:px-[20px] lg:py-[18px]">
          <div className="flex flex-col items-center text-center lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-[26px] lg:text-left">
            <div className="w-full max-w-[380px] md:max-w-[670px] lg:max-w-[700px] lg:pt-[25px]">
              <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-[#111111] md:text-[11px] lg:text-[11px]">
                {content.badge}
              </span>

              <h2 className="mt-[14px] text-[19px] font-semibold leading-[1.06] tracking-[-0.05em] text-[#0D64F2] md:mx-auto md:mt-[12px] md:max-w-[560px] md:text-[32px] md:leading-[1.04] lg:mx-0 lg:mt-[12px] lg:max-w-[600px] lg:text-[48px]">
                {content.title}
              </h2>

              <p className="mt-[14px] text-[12px] leading-[1.6] text-[#2F3A4B] md:mx-auto md:mt-[18px] md:max-w-[620px] md:text-[11px] md:leading-[1.55] lg:mx-0 lg:mt-[20px] lg:max-w-[860px] lg:text-[18px] lg:leading-[1.72]">
                {content.description}
              </p>
            </div>

            <div className="hidden w-full lg:block">
              <div className="rounded-[18px] bg-[#151C31] p-[16px] text-white shadow-[0_22px_45px_rgba(10,25,59,0.38)]">
                <h3 className="max-w-[220px] text-[18px] font-semibold leading-[1.35] text-white">
                  {content.form.title}
                </h3>

                <p className="mt-[8px] max-w-[218px] text-[12px] leading-[1.65] text-[#D4D9E8]">
                  {content.form.description}
                </p>

                <form onSubmit={handleSubmit} className="mt-[12px] space-y-[10px]">
                  <div>
                    <input
                      value={values.name}
                      onChange={(event) =>
                        handleFieldChange("name", event.target.value)
                      }
                      placeholder={content.form.namePlaceholder}
                      className={`h-[32px] w-full rounded-[9px] border bg-[#20283A] px-[12px] text-[11px] text-white outline-none placeholder:text-[#C8CFDD] ${
                        errors.name
                          ? "border-red-400"
                          : "border-[#2C354A] focus:border-[#1D6DFF]"
                      }`}
                    />
                    {errors.name ? (
                      <p className="mt-1 text-[10px] text-red-300">{errors.name}</p>
                    ) : null}
                  </div>

                  <div>
                    <input
                      value={values.email}
                      onChange={(event) =>
                        handleFieldChange("email", event.target.value)
                      }
                      placeholder={content.form.emailPlaceholder}
                      className={`h-[32px] w-full rounded-[9px] border bg-[#20283A] px-[12px] text-[11px] text-white outline-none placeholder:text-[#C8CFDD] ${
                        errors.email
                          ? "border-red-400"
                          : "border-[#2C354A] focus:border-[#1D6DFF]"
                      }`}
                    />
                    {errors.email ? (
                      <p className="mt-1 text-[10px] text-red-300">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div>
                    <textarea
                      value={values.message}
                      onChange={(event) =>
                        handleFieldChange("message", event.target.value)
                      }
                      placeholder={content.form.messagePlaceholder}
                      rows={4}
                      className={`min-h-[74px] w-full resize-none rounded-[11px] border bg-[#20283A] px-[12px] py-[11px] text-[11px] text-white outline-none placeholder:text-[#C8CFDD] ${
                        errors.message
                          ? "border-red-400"
                          : "border-[#2C354A] focus:border-[#1D6DFF]"
                      }`}
                    />
                    {errors.message ? (
                      <p className="mt-1 text-[10px] text-red-300">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="h-[34px] w-full rounded-[10px] bg-[#0E63F4] text-[10px] font-semibold text-white transition hover:bg-[#0A56D4] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Sending..." : content.form.submitLabel}
                  </button>

                  <p className="text-[10px] leading-[1.5] text-[#CFD6E5]">
                    {content.form.helperText}
                  </p>

                  {status === "success" ? (
                    <p className="text-[10px] text-[#8EE89A]">
                      {content.form.successMessage}
                    </p>
                  ) : null}

                  {status === "error" ? (
                    <p className="text-[10px] text-[#FF9E9E]">
                      {content.form.errorMessage}
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
