"use client";

import { hiringRequestFormData } from "@/data/hire-from-us/hire-from-us";
import { useState } from "react";

export default function HiringRequestForm() {
  const { title, description, fields } = hiringRequestFormData;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Immediate");

  return (
    <div className="rounded-[24px] bg-[#061B4BF0] p-6 shadow-[0px_12px_30px_rgba(0,0,0,0.12)]">
      <h3 className="text-xl font-bold text-white">{title}</h3>

      <p className="mt-2 text-sm text-[#C6D0E4]">{description}</p>

      <form className="mt-5 space-y-3">
        {/* First Name + Last Name */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-[10px] text-white">
              First Name
            </label>
            <input
              placeholder="First name"
              className="h-10 w-full rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-[10px] text-white">
              Last Name
            </label>
            <input
              placeholder="Last name"
              className="h-10 w-full rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
            />
          </div>
        </div>

        {/* Contact + Company */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-[10px] text-white">
              Contact Number
            </label>
            <input
              placeholder="+91 00000 00000"
              className="h-10 w-full rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-[10px] text-white">Company</label>
            <input
              placeholder="Company name"
              className="h-10 w-full rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
            />
          </div>
        </div>

        {/* Website */}
        <div>
          <label className="mb-1 block text-[10px] text-white">
            Company Website URL
          </label>
          <input
            placeholder="https://company.com"
            className="h-10 w-full rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
          />
        </div>

        {/* Email + Designation */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-[10px] text-white">
              E-mail ID
            </label>
            <input
              placeholder="name@company.com"
              className="h-10 w-full rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
            />
          </div>

          <div>
            <label className="mb-1 block text-[10px] text-white">
              Designation
            </label>
            <input
              placeholder="HR Manager / CTO"
              className="h-10 w-full rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
            />
          </div>
        </div>

        {/* Hiring Requirement */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="mb-1 block text-[10px] text-white">
              Hiring Requirement
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-full items-center justify-between rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white"
              >
                <span>{selectedValue}</span>

                <span
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                >
                  ⏷
                </span>
              </button>

              {isOpen && (
                <div className="absolute left-0 top-[44px] z-20 w-full overflow-hidden rounded-md border border-[#3A4D81] bg-[#2A3F72] shadow-lg">
                  {["Immediate", "0 - 7 Days", "10 - 15 Days", "1 Month"].map(
                    (option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setSelectedValue(option);
                          setIsOpen(false);
                        }}
                        className="block w-full px-3 py-2 text-left text-xs text-white transition hover:bg-[#38518C]"
                      >
                        {option}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="mb-1 block text-[10px] text-white">
              Open Positions
            </label>
            <input
              placeholder="Ex: 5"
              className="h-10 w-full rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
            />
          </div>
        </div>

        {/* Role */}
        <div>
          <label className="mb-1 block text-[10px] text-white">
            Role / Profile
          </label>
          <input
            placeholder="Linux Admin, DevOps Engineer, Cloud Architect"
            className="h-10 w-full rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
          />
        </div>

        {/* Comments */}
        <div>
          <label className="mb-1 block text-[10px] text-white">Comments</label>
          <textarea
            rows={4}
            placeholder="Tell us about your tech stack, project goals and experience requirements"
            className="w-full resize-none rounded-md border border-[#3A4D81] bg-[#2A3F72] px-3 py-3 text-xs text-white placeholder:text-[#A6B4D2] outline-none"
          />
        </div>

        {/* Upload */}
        <div>
          <label className="mb-1 block text-[10px] text-white">
            File Upload
          </label>

          <div className="relative rounded-md border border-dashed border-[#3A4D81] bg-[#2A3F72] px-3 py-2">
            <input
              type="file"
              className="absolute inset-0 cursor-pointer opacity-0"
            />

            <div className="flex items-center gap-2">
              <div className="rounded border border-[#C7CCD8] bg-white px-2 py-[2px] text-[11px] text-black">
                Choose File
              </div>

              <span className="text-[11px] text-[#D5DCEE]">No file chosen</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 pt-2">
          <button
            type="submit"
            className="h-10 rounded-md bg-[#0048FF] text-xs font-semibold text-white"
          >
            Connect To Experts
          </button>

          <button
            type="button"
            className="h-10 rounded-md border border-[#4A5F93] text-xs font-semibold text-white"
          >
            View Details
          </button>
        </div>
      </form>
    </div>
  );
}
