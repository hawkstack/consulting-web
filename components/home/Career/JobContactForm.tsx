"use client";
import { useRef, useState } from "react";

type JobContactFormProps = {
  onClose: () => void;
};

const jobRoles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Digital Marketing",
  "Human Resources",
];

export const JobContactForm = ({ onClose }: JobContactFormProps) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState("No file chosen");

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 pt-20"
      onClick={onClose}
    >
      <div
        className="bg-[#EFEFEF] w-full max-w-[600px] rounded-[10px] shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B52DF] text-white text-center py-2 xl:text-lg font-semibold">
          Job Application
        </div>

        {/* Form */}
        <div className="px-4 py-4 grid grid-cols-2 gap-x-3 gap-y-2 text-[11.5px] text-[#2F2F2F]">
          {/* First Name */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              First Name<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              placeholder="Enter First Name..."
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] outline-none border-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Last Name<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              placeholder="Enter Last Name..."
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] outline-none border-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Email<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              placeholder="Enter Email..."
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] outline-none border-none"
            />
          </div>

          {/* Job Role */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Job Role<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <select className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] outline-none border-none">
              <option>Select Domain</option>
              {jobRoles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Availability to join
              <span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              defaultValue="30/12/2021"
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] outline-none border-none"
            />
          </div>

          {/* CTC */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Current CTC<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              placeholder="Enter in LPA"
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] outline-none border-none"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Current Location
            </label>
            <input
              placeholder="Enter City..."
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] outline-none border-none"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Experience<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              placeholder="In years"
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] outline-none border-none"
            />
          </div>

          {/* Virtual Interview */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Availability for Virtual Interview
            </label>
            <input
              defaultValue="30/12/2021"
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] outline-none border-none"
            />
          </div>

          {/* Upload */}
          <div>
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Upload Your CV<span className="text-red-500 ml-[2px]">*</span>
            </label>

            <div className="flex items-center gap-[6px] bg-[#E3E3E3] px-[6px] py-[3px] rounded-[4px]">
              {/* Hidden input */}
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
              />

              {/* Button */}
              <button
                type="button"
                onClick={handleClick}
                className="bg-[#1B52DF] text-white text-[10px] px-[6px] py-[2px] rounded-[3px]"
              >
                Choose File
              </button>

              {/* File name */}
              <span className="text-[10px] text-[#555] truncate max-w-[120px]">
                {fileName}
              </span>
            </div>
          </div>

          {/* Reason */}
          <div className="col-span-2">
            <label className="block font-medium mb-[3px] text-[11.5px]">
              Reason for leaving current role
            </label>
            <textarea className="w-full h-[55px] px-[6px] pt-[5px] bg-[#E3E3E3] rounded-[4px] text-[11.5px] resize-none outline-none border-none" />
          </div>

          {/* Button */}
          <div className="col-span-2 flex justify-end mt-1">
            <button className="bg-[#1B52DF] text-white px-[14px] py-[5px] rounded-[4px] text-[12px]">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobContactForm;
