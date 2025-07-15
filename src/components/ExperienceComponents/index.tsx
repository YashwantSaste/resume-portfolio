"use client";

import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import { workExperience } from "@/lib/data";
import WorkInfo from "./WorkInfo";

interface Role {
  title: string;
  duration: string;
  responsibilities: string[];
}

interface CompanyExperience {
  companyName: string;
  roles: Role[];
}

const Experience: React.FC = () => {
  const [selectedCompany, setSelectedCompany] = useState<CompanyExperience>(
    workExperience[0]
  );

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="My Work Experience" titleNumber={2} />

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-40 flex flex-col">
          {workExperience.map((company, index) => (
            <li
              key={index}
              className={`border-l-2 px-8 py-3 text-sm font-medium cursor-pointer duration-300 
                ${
                  selectedCompany.companyName === company.companyName
                    ? "border-l-textGreen bg-[#112240] text-textGreen"
                    : "border-l-textGreen bg-transparent hover:bg-[#112240]"
                }`}
              onClick={() => setSelectedCompany(company)}
            >
              {company.companyName}
            </li>
          ))}
        </ul>

        <div className="flex-1 flex flex-col gap-8">
          {selectedCompany.roles.map((role, idx) => (
            <WorkInfo
              key={idx}
              title={role.title}
              company={selectedCompany.companyName}
              duration={role.duration}
              responsibilities={role.responsibilities}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
