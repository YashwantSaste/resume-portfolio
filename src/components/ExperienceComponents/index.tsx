"use client";

import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import { workExperience } from "@/lib/data";
import WorkInfo from "./WorkInfo";

interface WorkExperience {
  num: number;
  title: string;
  companyName: string;
  duration: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<WorkExperience>(workExperience[0]);

  return (
    <section id="experience" className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4">
      <SectionTitle title="My Work Experience" titleNumber={2} />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          {workExperience.map((work) => (
            <li
              key={work.num}
              className={`border-l-2 px-8 py-3 text-sm font-medium cursor-pointer duration-300 
              ${
                selectedWork.num === work.num
                  ? "border-l-textGreen bg-[#112240] text-textGreen"
                  : "border-l-textGreen bg-transparent hover:bg-[#112240]"
              }`}
              onClick={() => setSelectedWork(work)}
            >
              {work.companyName}
            </li>
          ))}
        </ul>
        <WorkInfo
          title={selectedWork.title}
          company={selectedWork.companyName}
          duration={selectedWork.duration}
          responsibilities={selectedWork.responsibilities}
        />
      </div>
    </section>
  );
};

export default Experience;
