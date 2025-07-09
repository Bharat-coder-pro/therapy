import React from 'react'

const About = () => {
  return (
    <div className='bg-[#010609] w-screen h-screen overflow-hidden'>
       <div className="container flex flex-col lg:flex-row items-center mx-auto">
          <div style={{
  background: "linear-gradient(to right, #8A8464, #988B6F, #9B8F73)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text", // for future compatibility
  color: "transparent",   // fallback
        }} className='doctor w-40 rounded-full mx-auto lg:w-[50%] lg:h-[80%]'>
             <img src="/therapist.png" className='' alt="" />
          </div>
          <div className='w-[70%] mx-auto lg:w-[50%] h-full text-center lg:text-start'>
              <h1 className='text-3xl font-bold mb-6 hidden lg:block'>Short Intro</h1>
             <h2 className='text-2xl'>Hey, there! I'm Serena Blake <br /><span className='text-lg italic text-zinc-300 '> Dr. Serena Blake, PsyD (Clinical Psychologist) <br /> 8 years of practice, 500+ sessions</span></h2>
              <p className='text-lg mt-5 text-justify'>I'm Dr. Serena Blake, a licensed clinical psychologist (PsyD) based in Los Angeles, CA. With eight years of experience and over 500 client sessions, I blend evidence-based approaches — such as cognitive-behavioral therapy and mindfulness — with compassionate, personalized care. My goal is to help you overcome anxiety, strengthen your relationships, and heal from trauma. Whether we meet in my office on Maplewood Drive or connect virtually via Zoom, I’m committed to creating a safe, supportive space where you can truly thrive.</p>
          </div>
       </div>
    </div>
  )
}

export default About
