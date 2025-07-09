import React from 'react'
import Contact from '../components/Contact'

const contact = () => {
  return (
    <div className='w-screen'>
      <div className="container mx-auto mt-30">
        <div className="flex flex-col md:flex-row items-center">
          <div className="info w-full md:w-[60%] flex flex-col">
            <div className="bg-[#27403D] profile w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] rounded-full mx-auto shadow-lg ">
               <img src="/doctor.png" alt="" className='w-full h-full rounded-full drop-shadow-lg hover:drop-shadow-[#74B3AE] transition-filter duration-400' />
            </div>
            <div className="details px-4">
               <h2 className='text-2xl text-center mt-4'><span className='text-center italic bg-gradient-to-r from-[#BED2D0] via-[#74B3AE] to-[#589F91] bg-clip-text text-transparent'> Dr. Serena Blake, PsyD (Clinical Psychologist) <br /> 8 years of practice, 500+ sessions</span></h2>
               <div className="flex text-xl flex-col gap-3 mt-4 bg-gradient-to-r from-[#BED2D0] via-[#74B3AE] to-[#589F91] bg-clip-text text-transparent">
                  <div className="flex gap-5 hover:bg-[#27403D] hover:text-white">
                    <span className='w-[20%] text-end'>Address </span> <span className='w-[70%]'>1287 Maplewood Drive, Los Angeles, CA 90026</span>
                  </div>
                  <div className="flex gap-5 hover:bg-[#27403D]  hover:text-white">
                    <span className='w-[20%] text-end'>Phone </span> <span className='w-[70%]'>(323) 555-0192</span>
                  </div>
                  <div className="flex gap-5 hover:bg-[#27403D]  hover:text-white">
                    <span className='w-[20%] text-end'>Email  </span> <span className='w-[70%]'>serena@blakepsychology.com</span>
                  </div>
                  <div className="flex gap-5 hover:bg-[#27403D]  hover:text-white">
                    <span className='w-[20%] text-end'>Available </span> <div className='flex flex-col w-[70%]'><span>In-person: Tue & Thu, 10 AM–6 PM</span><span>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</span></div></div> 
               </div>
            </div>
          </div>
          <div className="flex w-full md:w-[40%] flex-col justify-center items-center">
             <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
