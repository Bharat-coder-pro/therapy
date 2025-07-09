import React, { useContext } from 'react'
import Link from 'next/link'
import { appContext } from '../lib/store';

const Navbar = () => {

  const {setTab,tab} = useContext(appContext);

  return (
    <div className={`${(tab==='About' || 'Welcome') ? 'bg-transparent' : null} bg-[#191E24] shadow-sm  navbar rounded-tl-[0px] rounded-tr-[0px] w-screen fixed top-0 z-9 rounded-xl`}>
       <div className="navbar-start">
     <div className="w-20 p-2 rounded-full">
          <img className='relative z-8 drop-shadow-xl drop-shadow-[0_4px_6px_rgba(0,255,0,0.9)]'
            alt="Tailwind CSS Navbar component"
            src="/logo.png" />
        </div>
  </div>
  <div className="navbar-end">
    <div className="dropdown end-3 sm:hidden">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 hover:text-[#9DC1BE] hover:bg-opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu end-0.5 menu-sm dropdown-content bg-[rgba(255,255,255,0.3)] rounded-box z-1 mt-3 w-52 p-2 shadow-sm">
          <Link onClick={()=>setTab('Welcome')}  className={`${(tab==='Welcome') ? 'bg-[#1A584B] text-white' : null} transition-scale duration-200 hover:bg-[#1A584B]   hover:scale-105 text-lg text-[#1D232A] hover:text-white relative z-5 ps-3`} href='/'>
             <li>Welcome</li>
          </Link>
          <Link onClick={()=>setTab('About')}  className={`${(tab==='About') ? 'bg-[#1A584B] text-white' : null} transition-scale duration-200 hover:bg-[#1A584B]  hover:scale-105 text-lg text-[#1D232A] hover:text-white relative z-5 ps-3`} href='/about'>
             <li>About</li>
          </Link>     
          <Link onClick={()=>setTab('Services')}  className={`${(tab==='Services') ? 'bg-[#1A584B] text-white' : null} transition-scale duration-200 hover:bg-[#1A584B]  hover:scale-105 text-lg text-[#1D232A] hover:text-white relative z-5 ps-3`} href='/services'>
             <li>Serivces</li>
          </Link>
          <Link onClick={()=>setTab('FAQ')}  className={`${(tab==='FAQ') ? 'bg-[#1A584B] text-white' : null} transition-scale duration-200 hover:bg-[#1A584B]  hover:scale-105 text-lg text-[#1D232A] hover:text-white relative z-5 ps-3`} href='/faq'>
             <li>FAQs</li>
          </Link>
          <Link onClick={()=>setTab('Contact')}  className={`${(tab==='Contact') ? 'bg-[#1A584B] text-white' : null} transition-scale duration-200 hover:bg-[#1A584B]  hover:scale-105 text-lg text-[#1D232A] hover:text-white relative z-5 ps-3`}  href='/contact'>
             <li>Contact</li>
          </Link>
          </ul>
    </div>
    <ul
        tabIndex={0}
        className="navbar-end hidden sm:flex gap-5 text-md pe-3 self-start h-full">
          <Link onClick={()=>setTab('Welcome')}  href='/' className={`${(tab==='About') ? 'text-[#6BB0A5]' : 'text-[#8BB9B5]'} relative transition-colors duration-200 hover:text-[#6BB0A5] hover:scale-105 text-md relative z-5`}>
             <li>Welcome</li>
             <span className={`${(tab==='Welcome') ? 'w-full transition-width duration-300 ease' : ''} absolute bottom-[-10px] left-0 h-[2px] w-0 bg-[#27403D] transition-all duration-300 group-hover:w-full`}>&nbsp;</span>
          </Link>
          <Link onClick={()=>setTab('About')} href='/about' className={`${(tab==='About') ? 'text-[#6BB0A5]' : 'text-[#8BB9B5]'} relative transition-colors duration-200 hover:text-[#6BB0A5] hover:scale-105 text-md relative z-5`}>
             <li>About</li>
             <span className={`${(tab==='About') ? 'w-full transition-width duration-300 ease' : ''} absolute bottom-[-10px] left-0 h-[2px] w-0 bg-[#27403D] transition-all duration-300 group-hover:w-full`}>&nbsp;</span>
          </Link>     
          <Link onClick={()=>setTab('Services')}  href='/services' className={`${(tab==='Service') ? 'text-[#6BB0A5]' : 'text-[#8BB9B5]'} relative transition-colors duration-200 hover:text-[#6BB0A5] hover:scale-105 text-md relative z-5`}>
             <li>Serivces</li>
             <span className={`${(tab==='Services') ? 'w-full transition-width duration-300 ease' : ''} absolute bottom-[-10px] left-0 h-[2px] w-0 bg-[#27403D] transition-all duration-300 group-hover:w-full`}>&nbsp;</span>
          </Link>
          <Link onClick={()=>setTab('FAQ')}  href='/faq' className={`${(tab==='FAQ') ? 'text-[#6BB0A5]' : 'text-[#8BB9B5]'} relative transition-colors duration-200 hover:text-[#6BB0A5] hover:scale-105 text-md relative z-5`}>
             <li>FAQs</li>
             <span className={`${(tab==='FAQ') ? 'w-full transition-width duration-300 ease' : ''} absolute bottom-[-10px] left-0 h-[2px] w-0 bg-[#27403D] transition-all duration-300 group-hover:w-full`}>&nbsp;</span>
          </Link>
          <Link onClick={()=>setTab('Contact')}  href='/contact' className={`${(tab==='Contact') ? 'text-[#6BB0A5]' : 'text-[#8BB9B5]'} relative transition-colors duration-200 hover:text-[#6BB0A5] hover:scale-105 text-md text-[#9DC1BE] relative z-5`}>
             <li>Contact</li>
             <span className={`${(tab==='Contact') ? 'w-full transition-width duration-300 ease' : ''} absolute bottom-[-10px] left-0 h-[2px] w-0 bg-[#27403D] transition-all duration-300 group-hover:w-full`}>&nbsp;</span>
          </Link>
          </ul>
  </div>
 
  
</div>
)
}

export default Navbar
