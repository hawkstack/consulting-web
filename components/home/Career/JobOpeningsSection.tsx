"use client";

import { useState } from "react";
import ArrowRight from "@/components/icons/career/ArrowRight";
import YourClockIcon from "@/components/icons/career/YourClockIcon";
import YourLocationIcon from "@/components/icons/career/YourLocationIcon";
import { jobs } from "./Jobdata";

export default function JobOpeningsSection() {
  const [activeTab, setActiveTab] = useState("View all");

  const tabs = [
    "View all",
    "Technical Consultant",
    "Development",
    "Human Resources",
    "Digital Marketing",
    "Operations",
    "UI/UX Designer",
  ];

  const filteredJobs =
    activeTab === "View all"
      ? jobs
      : jobs.filter((job) => job.category === activeTab);

  return (
    <section className="w-full bg-[#FFFFFF] xl:py-18 xl:px-30 lg:py-16 lg:px-20 border">
      {/* Heading */}
      <div className="w-full mx-auto">
        <h2 className="xl:text-6xl lg:text-3xl font-semibold text-[#0048FF]">
          Be part of HawkStack
        </h2>
        <p className="xl:mt-8 lg:mt-4 text-[#2F2F2F] font-medium xl:max-w-[64%] xl:text-xl lg:text-lg">
          At HawkStack, we put people first from the very beginning of your
          journey with us. Here’s how our hiring process works:
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 xl:mt-6 lg:mt-6">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full font-medium xl:text-sm lg:text-sm border ${
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
        <div className="xl:mt-10 lg:mt-6 space-y-6 transition-all duration-300">
          {filteredJobs.map((job, i) => (
            <div
              key={i}
              className="border-t border-blue-500 pt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4"
            >
              {/* Left Content */}
              <div className="max-w-2xl">
                <h3 className="text-[#0048FF] font-semibold xl:text-xl lg:text-xl">
                  {job.title}
                </h3>
                <p className="text-[#2F2F2F] font-medium xl:text-sm xl:w-[90%] xl:mt-4">
                  {job.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-6">
                  <button className="flex items-center gap-2 font-medium xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 border border-[#2B2B2B] rounded-full xl:text-sm text-black hover:bg-gray-100">
                    <YourLocationIcon className="xl:w-4 xl:h-4" />
                    On-site
                  </button>
                  <button className="flex items-center gap-2 font-medium xl:px-4 xl:py-1.5 lg:px-3 lg:py-1 border border-[#2B2B2B] rounded-full xl:text-sm text-black hover:bg-gray-100">
                    <YourClockIcon className="xl:w-4 xl:h-4" />
                    Full-time
                  </button>
                </div>
              </div>

              {/* Apply Button */}
              <div className="flex items-center font-medium xl:text-xl text-black cursor-pointer hover:text-[#0048FF]">
                Apply
                <ArrowRight className="ml-1 xl:w-5 xl:h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
