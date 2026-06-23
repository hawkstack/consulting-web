"use client";

import { useEffect, useState } from "react";
import ArrowRight from "@/components/icons/career/ArrowRight";
import YourClockIcon from "@/components/icons/career/YourClockIcon";
import YourLocationIcon from "@/components/icons/career/YourLocationIcon";
import JobContactForm from "./JobContactForm";

type Job = {
  id: string;
  domain: string;
  category: string;
  description: string;
  site: string | null;
  employment_type: string | null;
  key_responsibilities?: string[];
  requirements?: string[];
};

type JobsResponse = {
  success: boolean;
  data: Job[];
};

export default function JobOpeningsSection() {
  const [activeTab, setActiveTab] = useState("View all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [jobsError, setJobsError] = useState("");

  const tabs = [
    "View all",
    ...Array.from(new Set(jobs.map((job) => job.domain))),
  ];

  const filteredJobs =
    activeTab === "View all"
      ? jobs
      : jobs.filter((job) => job.domain === activeTab);

  const formatJobMeta = (
    value: string | null,
    fallback: string
  ) => {
    if (!value) return fallback;

    return value
      .split("-")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join("-");
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setIsLoadingJobs(true);
        setJobsError("");

        const response = await fetch("/api/jobs");
        const result = (await response.json()) as JobsResponse;

        if (!response.ok || !result.success) {
          throw new Error("Unable to load jobs.");
        }

        setJobs(result.data);
      } catch {
        setJobsError("Unable to load job openings right now.");
      } finally {
        setIsLoadingJobs(false);
      }
    };

    fetchJobs();
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <section
        id="career-section"
        className="scroll-md:mt-[80px] scroll-mt-[70px] w-full bg-[#FFFFFF] xl:py-18 xl:px-30 lg:py-16 lg:px-20 md:py-12 md:px-16 px-6 py-6"
      >
        <div className="w-full mx-auto">
          {/* Heading */}
          <div className="mx-auto text-center md:text-left">
            <h2 className="xl:text-6xl lg:text-3xl md:text-2xl text-2xl font-semibold text-[#0048FF]">
              Be part of HawkStack
            </h2>
            <p className="xl:mt-8 lg:mt-4 md:mt-4 mt-1 text-[#2F2F2F] font-medium xl:max-w-[64%] xl:text-xl lg:text-lg md:text-md text-base">
              At HawkStack, we put people first from the very beginning of your
              journey with us. Here’s how our hiring process works:
            </p>
          </div>

          {/* Tabs */}
          <div className="hidden md:flex flex-wrap gap-3 xl:mt-6 lg:mt-6 md:mt-6">
            {tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full font-medium xl:text-sm lg:text-sm md:text-xs border ${
                  activeTab === tab
                    ? "bg-[#0048FF] text-white"
                    : "bg-white text-[#000000] border-[#2B2B2B]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Job List */}
          <div className="xl:mt-10 lg:mt-6 md:mt-6 mt-6 space-y-6 transition-all duration-300">
            {isLoadingJobs && (
              <p className="text-[#2F2F2F] font-medium">
                Loading job openings...
              </p>
            )}

            {!isLoadingJobs && jobsError && (
              <p className="text-red-500 font-medium">{jobsError}</p>
            )}

            {!isLoadingJobs && !jobsError && filteredJobs.length === 0 && (
              <p className="text-[#2F2F2F] font-medium">
                No job openings found.
              </p>
            )}

            {filteredJobs.map((job, i) => (
              <div
                key={job.id ?? i}
                className="border-t border-blue-500 pt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
              >
                {/* Left Content */}
                <div className="w-full md:max-w-[78%]">
                  <h3 className="text-[#0048FF] font-semibold xl:text-xl lg:text-xl md:text-md text-lg">
                    {job.category}
                  </h3>
                  <p className="text-[#2F2F2F] font-normal md:font-medium xl:text-sm xl:text-base md:text-sm text-sm xl:w-[90%] md:mt-4 mt-1">
                    {job.description}
                  </p>

                  {Boolean(
                    job.key_responsibilities?.length ||
                      job.requirements?.length
                  ) && (
                    <div className="grid gap-5 md:grid-cols-2 md:gap-10 mt-5 w-full">
                      {job.key_responsibilities?.length ? (
                        <div>
                          <h4 className="text-[#0048FF] font-semibold xl:text-base md:text-sm text-sm">
                            Key Responsibilities
                          </h4>
                          <ul className="mt-2 space-y-2 list-disc pl-5 text-[#2F2F2F] font-normal md:font-medium xl:text-sm md:text-sm text-sm">
                            {job.key_responsibilities.map(
                              (responsibility, index) => (
                                <li key={index}>
                                  {responsibility}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      ) : null}

                      {job.requirements?.length ? (
                        <div>
                          <h4 className="text-[#0048FF] font-semibold xl:text-base md:text-sm text-sm">
                            Requirements
                          </h4>
                          <ul className="mt-2 space-y-2 list-disc pl-5 text-[#2F2F2F] font-normal md:font-medium xl:text-sm md:text-sm text-sm">
                            {job.requirements.map(
                              (requirement, index) => (
                                <li key={index}>{requirement}</li>
                              )
                            )}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="flex gap-3 mt-6">
                    <button className="flex items-center md:gap-2 gap-1 font-medium xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 md:px-2 md:py-1 px-4 py-1 border border-[#2B2B2B] rounded-full xl:text-sm md:text-xs text-xs text-black hover:bg-gray-100">
                      <YourLocationIcon className="md:w-4 md:h-4 w-3 h-3" />
                      {formatJobMeta(job.site, "On-site")}
                    </button>
                    <button className="flex items-center md:gap-2 gap-1 font-medium xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 md:px-2 md:py-1 px-4 py-1 border border-[#2B2B2B] rounded-full xl:text-sm md:text-xs text-xs text-black hover:bg-gray-100">
                      <YourClockIcon className="md:w-4 md:h-4 w-3 h-3" />
                      {formatJobMeta(
                        job.employment_type,
                        "Full-time"
                      )}
                    </button>
                  </div>
                </div>

                {/* Apply Button */}
                <div
                  onClick={() => {
                    setSelectedJob(job);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center text-base md:text-xl cursor-pointer"
                >
                  Apply
                  <ArrowRight className="ml-1 xl:w-5 xl:h-5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedJob && (
        <JobContactForm
          onClose={() => setIsModalOpen(false)}
          selectedJob={selectedJob}
        />
      )}
    </>
  );
}
