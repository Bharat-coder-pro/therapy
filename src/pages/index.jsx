import { useContext } from "react";
import Link from "next/link";
import { appContext } from "../lib/store";

export default function Home() {
 const {tab, setTab} = useContext(appContext);
  return (
   <div className="bg-[#1B2127] h-screen w-screen overflow-auto">
    <img src="/rays.png" className="fixed hidden md:block z-3 top-[-100px] start-0 w-[80%] opacity-25 drop-shadow-lg hover:opacity-50 transition-opacity duration-2000" alt="" />
      <section className="w-screen h-screen px-5 flex flex-col md:flex-row">
          <div className=" flex w-[50%] items-center justify-center h-[60%] relative flex-col">
             <img src="/therapy.png" className="fixed top-0 start-0 w-[100%] h-[60%] md:w-[50%] md:h-full z-2" alt="" />
             <div className="fixed z-3 start-0 top-0 h-[60%] md:h-full w-[100%] md:w-[50%] inset-0 bg-gradient-to-l from-[#1D232A] via-transparent to-transparent"></div>
          </div>
          <div className="flex w-full md:w-[50%] md:h-[80%] my-auto items-center justify-center flex-col gap-2">
            <h1  style={{
  background: "linear-gradient(to right, #89B9B5, #4D9B91, #175446)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text", // for future compatibility
  color: "transparent",   // fallback
        }} className="text-3xl mb-2 text-center">Nature Therapy - Gentle, Healing, Inviting</h1>
            <p  style={{
  background: "linear-gradient(to right, #89B9B5, #4D9B91, #175446)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text", // for future compatibility
  color: "transparent",   // fallback
        }} className="text-2xl mb-2 text-center">Welcome to peace, rooted in nature.</p>
            <p  style={{
  background: "linear-gradient(to right, #89B9B5, #4D9B91, #175446)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text", // for future compatibility
  color: "transparent",   // fallback
        }} className="text-md text-center mt-1">This is your space to reconnect — with the earth and with yourself.</p>
            <div className="flex justify-center gap-2 mt-3">
              <Link href={'/about'}>
                <button onClick={()=>setTab('About')} className="btn relative z-6 text-white bg-gradient-to-r from-[#30756B] to-[#175446] hover:shadow-lg transition-transform duration-200 hover:scale-105">Expore More</button>
              </Link>
              <Link href={'/services'}>
                              <button onClick={()=>setTab('Services')} className="btn text-white bg-gradient-to-r from-[#30756B] to-[#175446] hover:shadow-lg transition-transform duration-200 hover:scale-105">Get Cured</button>
              </Link>
            </div>
          </div> 
      </section>
   </div>
  );
}
