import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

interface WorkInfoProps {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const WorkInfo: React.FC<WorkInfoProps> = ({ title, company, duration, responsibilities }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        {title} <span className="text-textGreen">@{company}</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">{duration}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            {responsibility}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default WorkInfo;
