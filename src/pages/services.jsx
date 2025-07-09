import React, {useState} from 'react'
import Service from '../components/Service'
import Therapy from '../components/Therapy'
import { FaChevronCircleLeft } from "react-icons/fa"
import { FaChevronCircleRight } from "react-icons/fa"
const Services = () => {

  const [index, setIndex] = useState(0);

  const therapies = [{
    title: 'Breathing and Meditation',
    img: '/yoga.png',
    desc: 'Focusing the mind to promote relaxation and clarity'
  }, 
  {
 title: 'Herbal Medicine',
    img: '/herbal.png',
    desc: 'We use plants and plant extracts to heal and cure'
  },
  {
title: 'Massage Therapy',
    img: '/mass.png',
    desc: 'Manipulating muscles and soft tissues to relieve tension'
  },
  {
title: 'Aroma Therapy',
    img: '/aroma.png',
    desc: 'Using essential oils from plants for therapeutic purposes'
  },
  {
title: 'Accupuncture Threapy',
    img: '/accu.png',
    desc: 'Inserting thin niddles for stimulating subtle points within the human body'
  },
];
 
  const slideWidth = 300; // width of each slide (in px)
  const totalSlides = therapies.length;
  
    const nextSlide = () => {
    setIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };


  return (
    <div className='w-screen h-screen'>
       <div className="container mt-20 mx-auto  bg-gradient-to-r from-[#BED2D0] via-[#74B3AE] to-[#589F91] bg-clip-text">
         <div className="flex flex-col">
            <h2 className='text-2xl md:text-4xl mt-5 font-bold text-start mb-9 ps-10 md:ps-1'>Services  <span className='text-center text-slate-200 font-light text-lg italic'>- reliable</span></h2>
            <Service img={'/services.png'} title={'Nature Heals'} desc={'Our Natural Therapies such as ayurvedic special herbs oil massages gives instant reliefs form stress, anxiety and fatigue. Our healty morning routing in nature surrounded environment recovers each and every cell withing your body naturally via involving breathing excersises in oxygen rich natural air in open valleys.'}/>
         </div>
         <div className="flex flex-col">
          <h2 className='text-2xl md:text-3xl mt-5 font-bold text-start mb-9  ps-10 md:ps-1'>Our Therapies  <span className='text-center text-slate-200 font-light text-lg italic'>- instant relief</span></h2>
          <div className="relative container mx-auto">
              <div id='carousel' className="flex gap-4 mb-3 overflow-hidden transition-transform duration-600" style={{ transform: `translateX(-${index * slideWidth}px)` }}>
            {
              therapies.map((th)=>(
                <Therapy img={th.img} desc={th.desc} title={th.title} />     
              ))
            }
          </div>
            <div onClick={nextSlide} className="absolute start-2 top-60 cursor-pointer opacity-50">< FaChevronCircleLeft className='text-3xl hover:text-zinc-400 hover:text-4xl active:text-white'/></div>
            <div onClick={prevSlide} className="absolute end-2 top-60 cursor-pointer opacity-50"><FaChevronCircleRight className='text-3xl hover:text-zinc-400 hover:text-4xl active:text-white' /></div>
          </div>
         </div>
       </div>
    </div>
  )
}

export default Services
