"use client";
import { useState, useRef, useEffect } from "react";
import countriesLib from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import ReactCountryFlag from "react-country-flag";
import { validateEmail } from "@/components/utils/validations";

countriesLib.registerLocale(enLocale);
type DiscussRedHatProps = {
  source: "openshift" | "unified";
};

const countries: { code: string; name: string }[] = Object.entries(
  countriesLib.getNames("en", { select: "official" }),
).map(([code, name]) => ({ code, name }));

function CountrySelect({
  value,
  error,
  onSelect,
}: {
  value: { code: string; name: string } | null;
  error: boolean;
  onSelect: (v: { code: string; name: string } | null) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const ref = useRef<HTMLDivElement | null>(null);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase()),
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        ref.current &&
        e.target instanceof Node &&
        !ref.current.contains(e.target)
      ) {
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
        className={`w-full h-[33px] rounded-lg px-3 text-[12px] flex items-center gap-2 cursor-text bg-white 
        border ${error ? "border-red-500 animate-shake" : "border-[#828282]"}`}>
        {value ? (
          <>
            <ReactCountryFlag
              svg
              countryCode={value.code}
              style={{ width: "1.1em", height: "1.1em" }}
            />
            <span>{value.name}</span>
          </>
        ) : (
          <span className={error ? "text-red-500" : "text-gray-400"}>
            Country*
          </span>
        )}
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full max-h-40 overflow-y-auto rounded-lg border border-[#BDBDBD] bg-white shadow-lg">
          <input
            autoFocus
            value={search}
            placeholder="Search country..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 text-[12px] border-b outline-none"
          />

          {filteredCountries.map((country) => (
            <div
              key={country.code}
              onMouseDown={() => {
                onSelect(country);
                setSearch("");
                setOpen(false);
              }}
              className="px-3 py-2 text-[12px] cursor-pointer hover:bg-[#f2f2f2]">
              <div className="flex items-center gap-2">
                <ReactCountryFlag
                  svg
                  countryCode={country.code}
                  style={{ width: "1.25em", height: "1.25em" }}
                />
                <span>{country.name}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function DiscussRedHat({ source }: DiscussRedHatProps) {
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    source,
    firstName: "",
    lastName: "",
    email: "",
    jobtitle: "",
    company: "",
    country: null as { code: string; name: string } | null,
  });

  const [currentErrorField, setCurrentErrorField] = useState<
    "firstName" | "lastName" | "email" | "jobtitle" | "company" | "country" | null
  >(null);

  const error = {
    firstName: currentErrorField === "firstName",
    lastName: currentErrorField === "lastName",
    email: currentErrorField === "email",
    jobtitle: currentErrorField === "jobtitle",
    company: currentErrorField === "company",
    country: currentErrorField === "country",
  };

  return (
    <section className="w-full flex justify-center py-6 font-lexend">
      <div className="w-full max-w-[440px] lg:w-[540px] px-4">
        <div className="bg-white rounded-2xl border border-[#BDBDBD] shadow-[0_8px_24px_rgba(0,0,0,0.15)] overflow-hidden">
          <div className="bg-gradient-to-b from-[#1b2f55] to-[#0b1f3a] px-6 py-4">
            <h2 className="text-white text-[18px] font-semibold">
              Discuss RedHat Openshift
            </h2>
          </div>

          <form
            noValidate
            onSubmit={async (e) => {
              e.preventDefault();

              if (!form.firstName) return setCurrentErrorField("firstName");
              if (!form.lastName) return setCurrentErrorField("lastName");
              if (!form.email) return setCurrentErrorField("email");
              console.log("EMAIL:", form.email, validateEmail(form.email));

              if (validateEmail(form.email))
                return setSubmitError("Please enter a valid email address");
              if (!form.jobtitle) return setCurrentErrorField("jobtitle");
              if (!form.company) return setCurrentErrorField("company");
              if (!form.country) return setCurrentErrorField("country");

              setCurrentErrorField(null);
              setSubmitError("");
              setLoading(true);

              try {
                const Response = await fetch(
                  `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/consultingForms`,
                  {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      source,
                      firstName: form.firstName,
                      lastName: form.lastName,
                      email: form.email,
                      jobtitle: form.jobtitle,
                      company: form.company,
                      country: form.country.code,
                      query: message,
                    }),
                  },
                );

                if (!Response.ok) throw new Error();

                setSuccess(true);
                setForm({
                  source,
                  firstName: "",
                  lastName: "",
                  email: "",
                  jobtitle: "",
                  company: "",
                  country: null,
                });
                setMessage("");

                setTimeout(() => {
                  setSuccess(false);
                }, 4000);
              } catch {
                setSubmitError("Something went wrong. Please try again.");
              } finally {
                setLoading(false);
              }
            }}
            className="p-[25px] space-y-4 max-w-[403px] lg:w-[600px] mx-auto">
            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="First Name*"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className={`w-full h-[33px] rounded-lg px-3 text-[12px] border outline-none ${
                  error.firstName && !form.firstName
                    ? "border-red-500 animate-shake"
                    : form.firstName
                      ? "border-green-500"
                      : "border-[#828282]"
                }`}
              />
              <input
                placeholder="Last Name*"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className={`w-full h-[33px]  rounded-lg px-3 text-[12px] border outline-none ${
                  error.lastName && !form.lastName
                    ? "border-red-500 animate-shake"
                    : form.lastName
                      ? "border-green-500"
                      : "border-[#828282]"
                }`}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="Business Email*"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={`w-full h-[33px] rounded-lg px-3 text-[12px] border outline-none ${
                  error.email && !form.email
                    ? "border-red-500 animate-shake"
                    : form.email
                      ? "border-green-500"
                      : "border-[#828282]"
                }`}
              />
              <input
                placeholder="Job Title*"
                value={form.jobtitle}
                onChange={(e) => setForm({ ...form, jobtitle: e.target.value })}
                className={`w-full h-[33px] rounded-lg px-3 text-[12px] border outline-none ${
                  error.jobtitle && !form.jobtitle
                    ? "border-red-500 animate-shake"
                    : form.jobtitle
                      ? "border-green-500"
                      : "border-[#828282]"
                }`}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <input
                placeholder="Company*"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className={`w-full h-[33px] rounded-lg px-3 text-[12px] border outline-none ${
                  error.company && !form.company
                    ? "border-red-500 animate-shake"
                    : form.company
                      ? "border-green-500"
                      : "border-[#828282]"
                }`}
              />
              <CountrySelect
                value={form.country}
                error={error.country}
                onSelect={(v) => setForm((prev) => ({ ...prev, country: v }))}
              />
            </div>

            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Get expert help building a secure Enterprise Linux foundation..."
              className="w-full rounded-lg border border-[#828282] px-3 py-2 text-[12px] outline-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 rounded-full bg-gradient-to-b from-[#1b2f55] to-[#0b1f3a] py-3 text-white text-[14px] font-semibold disabled:opacity-60">
              {loading ? "Sending..." : "Send Message"}
            </button>

            {submitError && (
              <p className="text-red-500 text-[12px] text-center">
                {submitError}
              </p>
            )}

            {success && (
              <p className="text-green-600 text-[12px] text-center">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}