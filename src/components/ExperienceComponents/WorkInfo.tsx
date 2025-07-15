import React from "react";
import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

interface WorkInfoProps {
  title: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

const parseHighlights = (text: string) => {
  const regex = /<hl>(.*?)<\/hl>/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <span key={match.index} className="text-textGreen font-normal">
        {match[1]}
      </span>
    );
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

const WorkInfo: React.FC<WorkInfoProps> = ({
  title,
  company,
  duration,
  responsibilities,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="text-xl font-semibold font-titleFont text-white">
        <span className="text-white">{title} </span>
        <span className="text-textGreen">@{company}</span>
      </h3>

      <p className="text-sm mt-1 font-medium text-textDark">{duration}</p>

      <ul className="mt-6 flex flex-col gap-3">
        {responsibilities.map((responsibility, index) => (
          <li key={index} className="text-base flex gap-2 text-textDark">
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            <span>{parseHighlights(responsibility)}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default WorkInfo;
