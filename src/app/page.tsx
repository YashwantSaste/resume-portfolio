"use client"

import Navbar from "@/components/Navbar";
import LeftSide from "@/components/HomePageComponents/LeftSide";
import RightSide from "@/components/HomePageComponents/RightSide";
import Banner from "@/components/HomePageComponents/Banner";
import { motion } from "framer-motion";
import About from "@/components/AboutMeComponents/About";
import Experience from "@/components/ExperienceComponents";
import Projects from "@/components/ProjectsComponents";
import Archieve from "@/components/ArchieveComponents/Archieve";
import Contact from "@/components/ContactComponents/Contact";
import Footer from "@/components/Footer";
import Skills from "@/components/skillsCompnonents/Skills";
export default function Home() {
  return (
    <main className="font-bodyFont w-full h-screen bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20
     scrollbar-thumb-textDark/60
    ">
      <Navbar/>
      <div className="w-full h-[88vh] xl:flex items-center md:gap-8 justify-between">
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
          <LeftSide/>
        </motion.div>
        <div className="mx-auto h-[88vh] p-4 w-full">
          <Banner/>
          <About/>
          <Experience />
          <Projects/>
          <Archieve/>
          <Contact/>
          <Skills/>
          <Footer/>
        </div>
        <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
          <RightSide/>
        </motion.div>
      </div>
    </main>
  )
}
