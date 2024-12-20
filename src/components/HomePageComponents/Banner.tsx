import React from 'react'
import {motion} from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
const Banner = () => {
    
  return (
    <section id="home"
    className='max-w-contentContainer mx-auto py-8 mdl:py-24 flex flex-col gap-4 
    lgl:gap-8 mdl:px-10 xl:px-4'
    >
        <motion.h3 
            initial={{y:10, opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.5,delay:0.6}}
        className='text-lg font-titleFont tracking-wide text-textGreen'>
            Hello, My name is 
        </motion.h3>
        <motion.h1
        initial={{y:10, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.7}}
        className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
        > 
            Yashwant Saste {" "}
            <span className='text-textDark mmt-2 lgl:mt-4'>
                I build things for the web
            </span>
        </motion.h1>
        <motion.p
        initial={{y:10, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.8}}
        className='text-base md:max-w-[650px] text-textDark font-medium'
        >
            {" "}
            I&apos;m an engineering student at S.G.G.S.I.E&T, Nanded, and I&apos;ve got a year of 
            experience working with the MERN stack. I&apos;m skilled in MongoDB, Express.js, React.js, 
            and Node.js. Currently, I&apos;m focused on improving my skills in Next.js. 
            I&apos;m ready to apply what I&apos;ve learned in a practical setting and contribute to 
            interesting projects.
            {" "}
            
        </motion.p>
        <motion.p
        initial={{y:10, opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.8}}
        className='text-base md:max-w-[650px] text-textDark font-medium'
        >
           <a href='https://medium.com/@sasteyashwant' target='_blank'
           className='flex items-center gap-2'
           >
                <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                    Check out my Medium Blogs 
                    <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%]
                    group-hover:translate-x-0 transition-transform duration-500
                    '/>
                </span>
                <FaArrowRight className="text-md text-textGreen"/>
            </a>
            
        </motion.p>
        
        <a href="https://drive.google.com/file/d/1CBQsZFTKqJv-u5-uBHRpSjBs0NacDS4-/view?usp=sharing" target='_blank'>
            <motion.button
            initial={{y:10, opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{duration:0.5,delay:0.9}}
            className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md
            text-textGreen tracking-wide hover:bg-hoverColor duration-300
            '>
                Check out my Resume
            </motion.button>
        </a>
    </section>
  )
}

export default Banner