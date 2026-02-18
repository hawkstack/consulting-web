"use client";

import {
  forwardRef,
  useState,
  ChangeEvent,
  FormEvent,
  useRef,
  useEffect,
} from "react";
import { validatePhone } from "../../utils/validations";
import countriesLib from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import ReactCountryFlag from "react-country-flag";

countriesLib.registerLocale(enLocale);

const countries: { code: string; name: string }[] = Object.entries(
  countriesLib.getNames("en", { select: "official" })
).map(([code, name]) => ({ code, name }));

function CountrySelect({
  value,
  onSelect,
}: {
  value: { code: string; name: string } | null;
  onSelect: (v: { code: string; name: string } | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  const filteredCountries = countries.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div
        onClick={() => setOpen(true)}
        className="h-[42px] rounded-xl border border-[#A3A3A3] px-4 flex items-center gap-2 text-[14px] text-[#7A7A7A] cursor-text"
      >
        {value ? (
          <>
            <ReactCountryFlag svg countryCode={value.code} />
            <span>{value.name}</span>
          </>
        ) : (
          <span className="text-[#7A7A7A]">Country*</span>
        )}
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full max-h-40 overflow-y-auto rounded-xl border  bg-white shadow-lg">
          <input
            autoFocus
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search country..."
            className="w-full px-3 py-2 text-[12px] text-black border-b outline-none"
          />

          {filteredCountries.map((country) => (
            <div
              key={country.code}
              onMouseDown={() => {
                onSelect(country);
                setSearch("");
                setOpen(false);
              }}
              className="px-3 py-2 text-[12px] cursor-pointer flex items-center gap-2"
            >
              <ReactCountryFlag svg countryCode={country.code} />
              <span className="text-[#7A7A7A]">{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  phone: string;
  jobTitle: string;
  company: string;
  country: { code: string; name: string } | null;
  message: string;
}

type SubmitStatus = "idle" | "success" | "error" | "oops";

const ContactForm = forwardRef<HTMLDivElement>((_, ref) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    phone: "",
    jobTitle: "",
    company: "",
    country: null,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [phoneError, setPhoneError] = useState("");

  const { firstName, lastName, phone, jobTitle, company, country, message } =
    formData;

  const isFormValid =
    firstName.trim() &&
    lastName.trim() &&
    phone.trim() &&
    jobTitle.trim() &&
    company.trim() &&
    country &&
    !phoneError;

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      setPhoneError(validatePhone(value));
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneValidationError = validatePhone(phone);
    if (phoneValidationError) {
      setPhoneError(phoneValidationError);
      return;
    }

    if (!isFormValid) return;

    setLoading(true);
    setSubmitStatus("idle");

    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

    try {
      const response = await fetch(`${API_BASE_URL}/api/openshift_unified`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          country: formData.country?.code,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");

        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          jobTitle: "",
          company: "",
          country: null,
          message: "",
        });

        setPhoneError("");
      } else {
        setSubmitStatus("error");
      }

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("oops");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] xl:min-h-[540px]"
    >
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-5 md:grid-cols-2"
      >
        <input
          name="firstName"
          value={firstName}
          onChange={handleChange}
          className="rounded-xl border border-[#1E2B5C] px-4 text-[14px] text-[#0F172A] placeholder:text-[#64748B] outline-none focus:border-[#09173A] h-[42px]"
          placeholder="First Name*"
        />

        <input
          name="lastName"
          value={lastName}
          onChange={handleChange}
          className="rounded-xl border border-[#A3A3A3] px-4 text-[14px] text-[#0F172A] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] h-[42px]"
          placeholder="Last Name*"
        />

        <div>
          <input
            name="phone"
            value={phone}
            onChange={handleChange}
            className="w-full rounded-xl border border-[#A3A3A3] px-4 text-[14px] text-[#0F172A] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] h-[42px]"
            placeholder="Phone no.*"
          />
          {phoneError && (
            <p className="mt-1 text-xs text-red-500">{phoneError}</p>
          )}
        </div>

        <input
          name="jobTitle"
          value={jobTitle}
          onChange={handleChange}
          className="rounded-xl border border-[#A3A3A3] px-4 text-[14px] text-[#0F172A] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] h-[42px]"
          placeholder="Job Title*"
        />

        <input
          name="company"
          value={company}
          onChange={handleChange}
          className="rounded-xl border border-[#A3A3A3] px-4 text-[14px] text-[#0F172A] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] h-[42px]"
          placeholder="Company*"
        />

        <CountrySelect
          value={country}
          onSelect={(v) =>
            setFormData((prev) => ({
              ...prev,
              country: v,
            }))
          }
        />

        <textarea
          name="message"
          value={message}
          onChange={handleChange}
          className="min-h-[160px] xl:min-h-[280px] resize-none rounded-xl border border-[#A3A3A3] px-4 py-3 text-[14px] text-[#0F172A] placeholder:text-[#7A7A7A] outline-none focus:border-[#09173A] col-span-full"
          placeholder="Let’s Talk what you’re planning......"
        />

        <button
          type="submit"
          disabled={!isFormValid || loading}
          className="relative mt-4 h-[42px] rounded-2xl bg-gradient-to-r from-[#03070D] to-[#09173A] text-[10px] font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(0,0,0,0.35)] col-span-full disabled:cursor-not-allowed"
        >
          {(!isFormValid || loading) && (
            <span className="absolute inset-0 rounded-2xl bg-white/10"></span>
          )}
          <span className="relative z-10">
            {loading ? "SUBMITTING..." : "SUBMIT"}
          </span>
        </button>
      </form>

      {/* Submit Status Message */}
      {submitStatus === "success" && (
        <p className="mt-4 text-center text-green-600 text-[12px] font-medium">
          Message sent successfully!
        </p>
      )}

      {submitStatus === "error" && (
        <p className="mt-4 text-center text-red-500 text-[12px] font-medium">
          Something went wrong. Please try again.
        </p>
      )}

      {submitStatus === "oops" && (
        <p className="mt-4 text-center text-red-500 text-[12px] font-medium">
          Network error. Please check your connection.
        </p>
      )}
    </div>
  );
});

ContactForm.displayName = "ContactForm";
export default ContactForm;
