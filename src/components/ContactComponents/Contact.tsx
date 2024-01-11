import React from 'react'
import SectionTitle from '../SectionTitle'

const Contact = () => {
  return (
    <section id='contact' 
    className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'
    >
        <SectionTitle title='What next?' titleNumber={4}/>
        <h2 className='font-titleFont text-5xl font-semibold'>
            Get In Touch
        </h2>
        <p className='max-w-[600px] text-center text-textDark'>
            I am currently looking for new opportunities to start my career in Tech  Industry.
            Whether you have a question or just want to say hi, I&apos;ll get back to you soon.
        </p>
        <a href='mailto:sasteyashwant01@gmail.com'>
            <button className='w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md
        text-textGreen tracking-wide hover:bg-hoverColor duration-300
        '>
                Say Hello!
            </button>
        </a>
    </section>
  )
}

export default Contact