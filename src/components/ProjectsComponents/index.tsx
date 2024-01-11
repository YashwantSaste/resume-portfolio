import React from 'react'
import SectionTitle from '../SectionTitle'
import Image from 'next/image'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'
import { AiOutlineYoutube } from 'react-icons/ai'
const Projects = () => {
  return (
    <section className='max-w-container mx-auto lgl:px-20 py-24'
    id='project'
    >
        <SectionTitle title='Projects I have build' titleNumber={3}/>

        <div className='w-full flex flex-col items-center justify-center gap-20 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a href="https://next-js-project-yashwantsaste.vercel.app/" target='_blank'
                className='w-full xl:w-1/2 h-auto relative group'
                >
                    <div>
                        <Image src="/Project1.png"
                            alt='Project 1'
                            width={1980}
                            height={1080}
                        />
                    </div>
                </a>  
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                        Featured Projects
                    </p>
                    <h3 className='text-2xl font-bold'>
                        QnaPDF:PDF to Questions {" "}<span className='text-textGreen'>(Ongoing)</span>
                    </h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                       This is my ongoing project made by utilizing the power of NextJS 14 and learning the core concepts and with that building
                        a <span className="text-textGreen">Software as a Service Platform</span> QnAPDF. Ask questions to your PDF. 
                        <a href='https://next-js-project-yashwantsaste.vercel.app/' target='_blank'>
                            <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                                Link
                                <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%]
                                group-hover:translate-x-0 transition-transform duration-500
                                '/>
                            </span>
                        </a>
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>Next.js</li>
                        <li>TypeScript</li>
                        <li>Next-auth</li>
                        <li>Stripe</li>
                        <li>Vercel</li>
                    </ul>
                    <div className='flex flex-row gap-4 text-xl'>
                        <a href='https://github.com/YashwantSaste/Next-JS-Project'
                        className='hover:text-textGreen duration-300'
                        target='_blank'
                        >
                            <TbBrandGithub/>
                        </a>
                        <a href='https://next-js-project-yashwantsaste.vercel.app/'
                        className='hover:text-textGreen duration-300'
                        target='_blank'
                        >
                            <RxOpenInNewWindow/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='w-full flex flex-col items-center justify-center gap-20 mt-10'>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
                <a href="https://next-js-project-yashwantsaste.vercel.app/" target='_blank'
                className='w-full xl:w-1/2 h-auto relative group'
                >
                    <div>
                        <Image src="/Project2.png"
                            alt='Project 2'
                            width={1980}
                            height={1080}
                        />
                    </div>
                </a>  
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                        Featured Projects
                    </p>
                    <h3 className='text-2xl font-bold'>
                        StudyNotion: A Course Management Based Web application
                    </h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                    
                            StudyNotion, a user-centric EdTech platform developed with the full MERN stack,
                             offers a dual login system for both instructors and students. 
                             Instructors can easily create and monetize video courses, while 
                             students enjoy seamless access to diverse learning materials. 
                             The platform ensures secure payments through Razorpay and utilizes 
                             cloud technology for scalable media storage, deployed reliably on Vercel.

                 {" "}
                 <a href='https://github.com/YashwantSaste' target='_blank'>
                <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                    Link
                    <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%]
                    group-hover:translate-x-0 transition-transform duration-500
                    '/>
                </span>
            </a>
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>React.js</li>
                        <li>TypeScript</li>
                        <li>REST API</li>
                        <li>Razorpay</li>
                        <li>Vercel</li>
                    </ul>
                    <div className='flex gap-4 text-xl'>
                        <a href='https://github.com/YashwantSaste/StudyNotion'
                        className='hover:text-textGreen duration-300'
                        target='_blank'
                        >
                            <TbBrandGithub/>
                        </a>
                        
                        <a href='https://studynotion-yashwant-saste.vercel.app/'
                        className='hover:text-textGreen duration-300'
                        target='_blank'
                        >
                            <RxOpenInNewWindow/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='w-full flex flex-col items-center justify-center gap-20 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a href="https://next-js-project-yashwantsaste.vercel.app/" target='_blank'
                className='w-full xl:w-1/2 h-auto relative group'
                >
                    <div>
                        <Image src="/Project3.png"
                            alt='Project 3'
                            width={1980}
                            height={1080}
                        />
                    </div>
                </a>  
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10'>
                    <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                        Featured Projects
                    </p>
                    <h3 className='text-2xl font-bold'>
                        Shopping Cart Management Application
                    </h3>
                    <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                    The Shopping Cart Application is a dynamic React-based project crafted for effortless 
                    online shopping. With a sleek layout, users can navigate seamlessly through a diverse product range. 
                    The smart cart management system allows users to add, remove,
                     and update items, ensuring a flexible and user-friendly shopping experience. 
                     {" "}
                     <a href='https://github.com/YashwantSaste' target='_blank'>
                <span className='text-textGreen inline-flex relative cursor-pointer h-7 overflow-x-hidden group'>
                    Link
                    <span className='absolute w-full h-[1px] bg-textGreen left-0 bottom-1 -translate-x-[110%]
                    group-hover:translate-x-0 transition-transform duration-500
                    '/>
                </span>
            </a>
                    </p>
                    <ul className='text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark'>
                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>Redux</li>
                        <li>Vercel</li>
                    </ul>
                    <div className='flex gap-4 text-xl'>
                        <a href='https://github.com/YashwantSaste/shopping-cart-website'
                        className='hover:text-textGreen duration-300'
                        target='_blank'
                        >
                            <TbBrandGithub/>
                        </a>
                        <a href='https://shopping-cart-yashwant-saste.netlify.app/'
                        className='hover:text-textGreen duration-300'
                        target='_blank'
                        >
                            <RxOpenInNewWindow/>
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Projects