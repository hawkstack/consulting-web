"use client";

import { FormEvent, useState } from "react";
import type {
  ConsultingServicesConversationFormField,
  ConsultingServicesConversationSectionContent,
} from "@/app/types/consulting-services";
import { validateEmail, validateRequired } from "@/utils/validation";

type FormState = {
  fullName: string;
  workEmail: string;
  company: string;
  areaOfInterest: string;
  projectRequirement: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM_STATE: FormState = {
  fullName: "",
  workEmail: "",
  company: "",
  areaOfInterest: "",
  projectRequirement: "",
};

function getFieldError(
  field: ConsultingServicesConversationFormField,
  value: string,
): string {
  if (field.required) {
    const requiredError = validateRequired(value.trim(), field.label);
    if (requiredError) return requiredError;
  }

  if (field.name === "workEmail") {
    return validateEmail(value.trim());
  }

  return "";
}

export default function ConsultingConversationForm({
  content,
}: {
  content: ConsultingServicesConversationSectionContent;
}) {
  const [values, setValues] = useState<FormState>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleFieldChange = (name: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const field = content.fields.find((item) => item.name === name);
      if (!field) return;

      setErrors((prev) => ({
        ...prev,
        [name]: getFieldError(field, value),
      }));
    }
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    content.fields.forEach((field) => {
      const error = getFieldError(field, values[field.name]);
      if (error) {
        nextErrors[field.name] = error;
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
          source: content.source,
          ...values,
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
    <div className="w-full rounded-[20px] border border-[#263244] bg-[#1A2434] p-4 shadow-[0_18px_42px_rgba(3,11,24,0.35)] md:p-5 lg:max-w-[360px] lg:p-4 xl:max-w-[735px] xl:rounded-[18px] xl:p-3.5">
      <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-2.5 xl:space-y-2.5">
        {content.fields.map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-1.5 block text-[11px] font-normal text-[#F3F7FF] lg:mb-1 lg:text-[12px] xl:text-[14px]"
            >
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                value={values[field.name]}
                onChange={(event) =>
                  handleFieldChange(field.name, event.target.value)
                }
                placeholder={field.placeholder}
                rows={4}
                className={`min-h-[104px] w-full resize-none rounded-[10px] border bg-[#2D3745] px-3 py-3 text-[12px] text-white outline-none placeholder:text-[#9AA5B5] lg:min-h-[96px] lg:rounded-[9px] lg:px-3 lg:py-2.5 lg:text-[11px] xl:min-h-[84px] xl:text-[12px] ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-[#3A4659] focus:border-[#37B5FF]"
                }`}
              />
            ) : (
              <input
                id={field.name}
                type={field.type}
                value={values[field.name]}
                onChange={(event) =>
                  handleFieldChange(field.name, event.target.value)
                }
                placeholder={field.placeholder}
                className={`h-11 w-full rounded-[10px] border bg-[#2D3745] px-3 text-[12px] text-white outline-none placeholder:text-[#9AA5B5] lg:h-10 lg:rounded-[9px] lg:px-3 lg:text-[11px] xl:h-8 xl:text-[12px] ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-[#3A4659] focus:border-[#37B5FF]"
                }`}
              />
            )}

            {errors[field.name] ? (
              <p className="mt-1 text-[10px] text-red-400">{errors[field.name]}</p>
            ) : null}
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="h-11 w-full rounded-[10px] bg-[#35B6F5] text-[12px] font-semibold text-[#03111F] transition hover:bg-[#26a7e7] disabled:cursor-not-allowed disabled:opacity-70 lg:h-10 lg:text-[12px] xl:h-8 xl:text-[13px]"
        >
          {loading ? "Sending..." : content.submitLabel}
        </button>

        {status === "success" ? (
          <p className="text-center text-[11px] text-green-400">
            {content.successMessage}
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-center text-[11px] text-red-400">
            {content.errorMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
