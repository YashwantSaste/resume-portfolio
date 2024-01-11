import { Social_Media } from '@/lib/data'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon1 from "react-icons/fa";
import * as Icon2 from "react-icons/si"
const socialMediaLinks=[
    {
        name: "GitHub",
        src: "FaGithub",
        link:"https://github.com/YashwantSaste"
    },
    {
      name: "LinkedIn",
      src: "FaLinkedin",
      link:"https://www.linkedin.com/in/yashwant-saste-466b53239"
    },
    {
      name: "Gmail",
      src: "SiGmail",
      link:"mailto:sasteyashwant01@gmail.com"
    },
    {
      name: "Discord",
      src: "FaDiscord",
      link:"https://discord.com/users/1193901818607046772"
    },
]
const LeftSide = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-end gap-4 text-textLight'>
        <div className='flex flex-col gap-4'>
            {
                socialMediaLinks.map((link,index)=>{
                    let Icon:any= Icon1[link.src] || Icon2[link.src]
                    return(
                        <Link href={link.link} key={index} target='_blank'
                        className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center
                        justify-center hover:text-textGreen cursor-pointer hover:translate-y-2 transition-all duration-300
                        '
                        >
                        <Icon/>                    
                    </Link>
                    )
                })
            }
        </div>
        <div className='w-[2px] h-32 bg-textDark'></div>
    </div>
  )
}

export default LeftSide