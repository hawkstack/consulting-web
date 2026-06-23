"use client";

import { useState } from "react";

interface Point {
  heading?: string;
  description: string;
}

interface ContactInfo {
  company?: string;
  website?: string;
  email?: string;
}

interface Props {
  title: string;
  description?: string | string[];
  points?: Point[];
  note?: string;
  noteEmail?: string;
  contactInfo?: ContactInfo;
  index: number;
}

export default function PrivacyCard({
  title,
  description,
  points,
  note,
  noteEmail,
  contactInfo,
  index,
}: Props) {
  const [isOpen, setIsOpen] = useState(index === 1);

  return (
    <div className="bg-white border border-[#E8EDF3] rounded-[20px] p-3 lg:p-6">
      {/* MOBILE ACCORDION HEADER */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex lg:hidden items-center justify-between cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-[#1e50da] flex items-center justify-center text-white text-[11px] font-semibold shrink-0">
            {index}
          </div>

          <h2 className="text-[12px] font-semibold text-[#202939]">{title}</h2>
        </div>
        <svg
          className={`transition-all duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#202939"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* DESKTOP HEADER */}
      <div className="hidden lg:flex items-center gap-3 mb-3 lg:mb-4">
        <div className="w-10 h-10 rounded-xl bg-[#1e50da] flex items-center justify-center text-white text-sm font-semibold">
          {index}
        </div>

        <h2 className="text-[18px] font-bold text-[#202939]">{title}</h2>
      </div>

      {/* CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[3000px] opacity-100 mt-4" : "max-h-0 opacity-0"
        } lg:max-h-full lg:opacity-100 lg:mt-0`}
      >
        {/* Description */}
        {/* {description && (
          <p className="text-xs xl:text-sm leading-6 xl:leading-7 text-[#5F6675] mb-4">
            {description}
          </p>
        )} */}
        {description &&
          (Array.isArray(description) ? (
            <div className="space-y-4 mb-4">
              {description.map((desc, i) => (
                <p
                  key={i}
                  className="text-xs xl:text-sm leading-6 xl:leading-7 text-[#5F6675]"
                >
                  {desc}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-xs xl:text-sm leading-6 xl:leading-7 text-[#5F6675] mb-4">
              {description}
            </p>
          ))}
        {/* Points */}
        {points && (
          <div className="space-y-4">
            {points.map((point, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-[5px] h-[5px] rounded-full bg-black mt-[10px] shrink-0" />

                <p className="text-xs lg:text-sm md:leading-5 lg:leading-7 text-[#5F6675]">
                  {point.heading && (
                    <span className="font-bold text-[#202939]">
                      {point.heading}{" "}
                    </span>
                  )}

                  {point.description}
                </p>
              </div>
            ))}

          </div>
        )}

        {/* Note Box */}
        {note && (
          <div className="mt-5 bg-[#EEF4FF] border border-[#D9E6FF] rounded-[12px] px-4 py-3">
            <p className="text-[13px] leading-6 text-[#4B5B7C]">
              {note}

              {noteEmail && (
                <span className="text-[#1e50da] font-medium">
                  {noteEmail}
                </span>
              )}
            </p>
          </div>
        )}

        {/* Contact Box */}
        {contactInfo && (
          <div className="mt-5 bg-[#EEF4FF] border border-[#BFD3FF] rounded-[16px] px-4 py-4">
            {contactInfo.company && (
              <p className="text-[14px] font-bold text-[#202939]">
                {contactInfo.company}
              </p>
            )}

            {contactInfo.website && (
              <p className="text-[14px] text-[#202939] leading-7">
                Website:{" "}
                <span className="text-[#1e50da] font-semibold">
                  {contactInfo.website}
                </span>
              </p>
            )}

            {contactInfo.email && (
              <p className="text-[14px] text-[#202939] leading-6 xl:leading-7">
                Email:{" "}
                <span className="text-[#1e50da] font-semibold">
                  {contactInfo.email}
                </span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
