import { useRef, useState } from "react";
import {
  validateEmail,
  validateName,
  validateRequired,
} from "@/utils/validation";

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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobRole: "",
    availability: "30/12/2021",
    ctc: "",
    location: "",
    experience: "",
    interviewAvailability: "",
    reason: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [submitMessage, setSubmitMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    let error = "";

    if (name === "firstName") {
      error = validateName(value, "First Name");
    }

    if (name === "lastName") {
      error = validateName(value, "Last Name");
    }

    if (name === "email") {
      error = validateEmail(value);
    }

    if (name === "jobRole") {
      error = validateRequired(value, "Job Role");
    }

    if (name === "availability") {
      error = validateRequired(value, "Availability");
    }

    if (name === "ctc") {
      error = validateRequired(value, "CTC");
    }

    if (name === "experience") {
      error = validateRequired(value, "Experience");
    }

    setErrors((prev: Record<string, string>) => ({
      ...prev,
      [name]: error,
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const newErrors: any = {
      firstName: validateName(formData.firstName, "First Name"),
      lastName: validateName(formData.lastName, "Last Name"),
      email: validateEmail(formData.email),
      jobRole: validateRequired(formData.jobRole, "Job Role"),
      availability: validateRequired(formData.availability, "Availability"),
      ctc: validateRequired(formData.ctc, "CTC"),
      experience: validateRequired(formData.experience, "Experience"),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((err) => err);

    if (hasError) {
      setIsError(true);
      setSubmitMessage("Please fix the errors above before submitting.");
      return;
    }

    try {
      setLoading(true);
      // FormData for file upload
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        payload.append(key, value as string);
      });

      if (fileInputRef.current?.files?.[0]) {
        payload.append("resume", fileInputRef.current.files[0]);
      }

      const res = await fetch(`/api/jobApplication`, {
        method: "POST",
        body: payload,
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setIsError(false);
      setSubmitMessage(
        "Hi, we have got your details. Our team will contact you soon.",
      );

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        jobRole: "",
        availability: "",
        ctc: "",
        location: "",
        experience: "",
        interviewAvailability: "",
        reason: "",
      });

      setFileName("No file chosen");
    } catch (err) {
      setIsError(true);
      setSubmitMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm xl:pt-26 pt-10 xl:px-80 lg:px-40 md:px-20 sm:px-10 px-4"
      onClick={onClose}
    >
      <div
        className="bg-[#EFEFEF] w-full rounded-[10px] shadow-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1B52DF] text-white text-center py-2 lg:text-[18px] font-semibold">
          Job Application
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="px-4 py-4 grid grid-cols-2 gap-x-3 gap-y-2 text-[12px] text-[#2F2F2F]"
        >
          {/* First Name */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
              First Name<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name..."
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[12px] outline-none border-none"
            />
            {errors.firstName && (
              <p className="text-[10px] text-red-500">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
              Last Name<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name..."
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[12px] outline-none border-none"
            />
            {errors.lastName && (
              <p className="text-[10px] text-red-500">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
              Email<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email..."
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[12px ] outline-none border-none"
            />
            {errors.email && (
              <p className="text-[10px] text-red-500">{errors.email}</p>
            )}
          </div>

          {/* Job Role */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
              Job Role<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <select
              name="jobRole"
              value={formData.jobRole}
              onChange={handleChange}
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[12px] outline-none border-none"
            >
              <option value="">Select Domain</option>
              {jobRoles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
            {errors.jobRole && (
              <p className="text-[10px] text-red-500">{errors.jobRole}</p>
            )}
          </div>

          {/* Availability */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
              Availability to join
              <span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[12px] outline-none border-none"
            />
            {errors.availability && (
              <p className="text-[10px] text-red-500">{errors.availability}</p>
            )}
          </div>

          {/* CTC */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
              Current CTC<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              name="ctc"
              value={formData.ctc}
              onChange={handleChange}
              placeholder="Enter in LPA"
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[12px] outline-none border-none"
            />
            {errors.ctc && (
              <p className="text-[10px] text-red-500">{errors.ctc}</p>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
              Current Location
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter City..."
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[12px] outline-none border-none"
            />
          </div>

          {/* Experience */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
              Experience<span className="text-red-500 ml-[2px]">*</span>
            </label>
            <input
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="In years"
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[12px] outline-none border-none"
            />
            {errors.experience && (
              <p className="text-[10px] text-red-500">{errors.experience}</p>
            )}
          </div>

          {/* Virtual Interview */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
              Availability for Virtual Interview
            </label>
            <input
              defaultValue="30/12/2021"
              className="w-full h-[26px] px-[6px] bg-[#E3E3E3] rounded-[4px] text-[12px] outline-none border-none"
            />
          </div>

          {/* Upload */}
          <div>
            <label className="block font-medium mb-[3px] text-[12px]">
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
            <label className="block font-medium mb-[3px] text-[12px]">
              Reason for leaving current role
            </label>
            <textarea
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="w-full h-[55px] px-[6px] pt-[5px] bg-[#E3E3E3] rounded-[4px] text-[12px] resize-none outline-none border-none"
            />
          </div>

          {/* Button */}
          <div className="col-span-2 relative">
            {/* Mobile Layout */}
            <div className="flex items-center justify-between md:flex md:justify-end">
              {/* Message */}
              {submitMessage && (
                <div className="text-left md:absolute md:left-1/2 md:-translate-x-1/2">
                  <p
                    className={`text-[10px] ${
                      isError ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    {submitMessage}
                  </p>
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="bg-[#1B52DF] text-white px-[14px] py-[5px] rounded-[4px] text-[12px]"
              >
                {loading ? "Submitting..." : "Apply Now"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobContactForm;
