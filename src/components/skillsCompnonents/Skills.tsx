import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '@/lib/skills-data';
import Image from 'next/image';

const Skills = () => {
  return (
    <section
      className="max-w-contentContainer hidden mx-auto py-10 xl:py-24 md:flex flex-col gap-8 items-center justify-center"
      id="skills"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-base md:text-lg text-textGreen font-medium mb-2">
          Technologies I Have Worked With
        </h2>
        <h2 className="font-titleFont text-4xl md:text-5xl font-bold text-white">
          My Skills
        </h2>
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 mt-3" />
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8"
      >
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.2,
              rotate: 5,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }}
            className="flex flex-col items-center justify-center bg-hoverColor p-4 rounded-lg shadow-md"
          >
            <Image
              src={skill.Image}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
              className="w-16 h-16 md:w-20 md:h-20"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-sm md:text-base font-medium text-textLight"
            >
              {skill.name}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
