"use client";

import { FormEvent, useMemo, useState } from "react";
import type {
  AppModernizationFormContent,
  AppModernizationFormField,
} from "@/app/types/app-modernization";
import { validateEmail, validateRequired } from "@/utils/validation";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_FORM_STATE: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

function getFieldError(
  field: AppModernizationFormField,
  value: string,
): string {
  if (field.required) {
    const requiredError = validateRequired(value.trim(), field.label);
    if (requiredError) return requiredError;
  }

  if (field.name === "email") {
    return validateEmail(value.trim());
  }

  if (field.name === "phone") {
    if (!/^\+?\d[\d\s-]{6,19}$/.test(value.trim())) {
      return "Enter a valid mobile number";
    }
  }

  return "";
}

export default function AppModernizationContactForm({
  form,
}: {
  form: AppModernizationFormContent;
}) {
  const [values, setValues] = useState<FormState>(INITIAL_FORM_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const fieldMap = useMemo(
    () =>
      form.fields.reduce<Record<AppModernizationFormField["name"], AppModernizationFormField>>(
        (acc, field) => {
          acc[field.name] = field;
          return acc;
        },
        {} as Record<AppModernizationFormField["name"], AppModernizationFormField>,
      ),
    [form.fields],
  );

  const handleFieldChange = (name: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: getFieldError(fieldMap[name], value),
      }));
    }
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    (Object.keys(values) as Array<keyof FormState>).forEach((key) => {
      const error = getFieldError(fieldMap[key], values[key]);
      if (error) {
        nextErrors[key] = error;
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
          source: form.source,
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
    <div
      id="app-modernization-form"
      className="flex h-full w-full flex-col rounded-[20px] bg-[#F5F5F5] p-4 text-[#20283A] shadow-[0_18px_45px_rgba(0,0,0,0.28)] md:max-w-[396px] md:rounded-[18px] md:p-4 lg:p-4"
    >
      <h2 className="mb-4 xl:text-left text-center text-[28px] font-semibold md:text-[20px] lg:text-[18px] xl:text-[28px] ">
        {form.title}
      </h2>

      <form onSubmit={handleSubmit} className="flex h-full flex-col space-y-3">
        <div className="grid grid-cols-2 gap-2.5">
          {form.fields.slice(0, 2).map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="mb-1 block text-[13px] font-normal text-[#3A4256]"
              >
                {field.label}
                {field.required ? " *" : ""}
              </label>
              <input
                id={field.name}
                type={field.type}
                value={values[field.name]}
                onChange={(event) =>
                  handleFieldChange(field.name, event.target.value)
                }
                placeholder={field.placeholder}
                className={`h-10 w-full rounded-[10px] border bg-white px-3 text-[12px] text-[#20283A] outline-none placeholder:text-[#A5AFBD] transition ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-[#E3E5EA] focus:border-[#0EA5E9]"
                }`}
              />
              {errors[field.name] ? (
                <p className="mt-1 text-[10px] text-red-500">
                  {errors[field.name]}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        {form.fields.slice(2).map((field) => (
          <div key={field.name}>
            <label
              htmlFor={field.name}
              className="mb-1 block text-[13px] font-normal text-[#3A4256]"
            >
              {field.label}
              {field.required ? " *" : ""}
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
                className={`min-h-[96px] w-full resize-none rounded-[12px] border bg-white px-3 py-3 text-[12px] text-[#20283A] outline-none placeholder:text-[#A5AFBD] transition ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-[#E3E5EA] focus:border-[#0EA5E9]"
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
                className={`h-10 w-full rounded-[10px] border bg-white px-3 text-[11px] text-[#20283A] outline-none placeholder:text-[#A5AFBD] transition ${
                  errors[field.name]
                    ? "border-red-500"
                    : "border-[#E3E5EA] focus:border-[#0EA5E9]"
                }`}
              />
            )}

            {errors[field.name] ? (
              <p className="mt-1 text-[10px] text-red-500">
                {errors[field.name]}
              </p>
            ) : null}
          </div>
        ))}

        <button
          type="submit"
          disabled={loading}
          className="mt-auto h-11 w-full rounded-[12px] bg-[#13A7F3] text-[14px] font-semibold text-white transition hover:bg-[#0891d5] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? "Sending..." : form.submitLabel}
        </button>

        {status === "success" ? (
          <p className="text-center text-[11px] text-green-600">
            {form.successMessage}
          </p>
        ) : null}

        {status === "error" ? (
          <p className="text-center text-[11px] text-red-500">
            {form.errorMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
