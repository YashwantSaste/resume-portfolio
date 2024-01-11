"use client"

import { Navlinks } from '@/lib/data'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { motion } from "framer-motion"
import { MdOutlineClose } from 'react-icons/md'
const Navbar = () => {
    const ref=useRef<string|any>("");
    const [smallNavbar,setSmallNavBar]=useState(false)

    const handleScroll=(e:React.MouseEvent<HTMLAnchorElement,MouseEvent>)=>{
        e.preventDefault();
        const href=e.currentTarget.href;
        const targetId=href.replace(/.*\#/,"");
        const elem=document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior:"smooth",
        })

        const links=document.querySelectorAll(".nav-link");
        links.forEach((link)=>{
            link.classList.remove("active");
        });
        e.currentTarget.classList.add("active")
    }
  return (
    <div className='w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4'>
        <div className='max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between'>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:0.5}}
                className='text-2xl hover:text-textGreen'
            >
                Yashwant Saste
            </motion.div>
            <div className='hidden mdl:inline-flex items-center gap-7'>
                <ul className='flex text-[13px] gap-7'>
                    {
                        Navlinks.map((spec)=>(
                            <Link href={spec.link} id={spec.id}
                            onClick={handleScroll}
                            className='flex items-center gap-1 font-medium text-textDark
                            hover:text-textGreen cursor-pointer duration-300 nav-link'
                            >
                                <motion.li
                                initial={{y:-10, opacity:0}}
                                animate={{y:0,opacity:1}}
                                transition={{duration:0.1}}
                                >
                                    {spec.name}
                                </motion.li>
                            </Link>
                        ))
                    }
                </ul>
                    {/* Add the resume link */}
                <a href='/' target='_blank'>
                    <motion.button
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{duration:0.5}}
                        className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen
                        hover:bg-hoverColor duration-300
                        '
                    >
                        Resume
                    </motion.button>
                </a>
            </div>

            {/* Small Screen Navigation Bar */}
            <div 
            onClick={()=>setSmallNavBar(true)}
            className='w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group'>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all 
                ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-0 transition-all 
                ease-in-out duration-300'></span>
                <span className='w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-3 transition-all 
                ease-in-out duration-300'></span>
            </div>
            {
                smallNavbar && (
                    <div ref={(node)=>ref.current=node}
                    className='absolute mdl:hidden top-0 right-0 w-full h-screen bg-black bg-opacity-50 flex flex-col items-end'
                    
                    >
                       <motion.div
                       initial={{x:20,opacity:0}}
                       animate={{x:0,opacity:1}}
                       transition={{duration:0.1}}
                       className='w-[80%] h-full overflow-scroll scrollbarHide bg-[#112240] flex flex-col
                        items-center px-4 py-10 relative'
                       >
                            <MdOutlineClose 
                            onClick={()=>setSmallNavBar(false)}
                            className='text-3xl text-textGreen cursor-pointer hover:text-red-500 absolute top-4 right-4'/>

                            <div className='flex flex-col items-center gap-7'>
                            <ul className='flex flex-col text-base gap-7'>
                                {
                                    Navlinks.map((spec)=>(
                                        <Link href={spec.link} id={spec.id}
                                        onClick={handleScroll}
                                        className='flex items-center gap-1 font-medium text-textDark
                                        hover:text-textGreen cursor-pointer duration-300 nav-link'
                                        >
                                            <motion.li
                                            initial={{y:-10, opacity:0}}
                                            animate={{y:0,opacity:1}}
                                            transition={{duration:0.2,delay:0.1, ease:'easeIn'}}
                                            >
                                                {spec.name}
                                            </motion.li>
                                        </Link>
                                    ))
                                }
                                </ul>
                                <a href='/Resume.pdf' target='_blank'>
                                <motion.button
                                    initial={{opacity:0}}
                                    animate={{opacity:1}}
                                    transition={{duration:0.5}}
                                    className='px-4 py-2 rounded-md text-textGreen text-[13px] border border-textGreen
                                    hover:bg-hoverColor duration-300
                                    '
                                >
                                    Resume
                                </motion.button>
                                </a>
                            </div>
                            <motion.a
                            className='text-sm sm:w-72 tracking-widest text-textGreen text-center mt-4'
                            initial={{opacity:0}}
                            animate={{opacity:1}}
                            transition={{delay:1.2,ease:"easeIn"}}
                            >
                                <p>sasteyashwant01@gmail.com</p>
                            </motion.a>
                        </motion.div> 
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default Navbar