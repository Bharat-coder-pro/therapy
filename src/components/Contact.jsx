import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { countryPhoneCodes } from '../lib/countryCode'


const Contact = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [time, setTime] = useState('');
  const [agree, setAgree] = useState(false);
  const [refer, setRefer] = useState('');
  const [code, setCode] = useState('+1');

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!name || !email || !phone || !time || !agree || !refer) {
      toast.error('Provide All Details');
      return;
    }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if(!emailRegex.test(email)) {
        toast.error('Enter Correct Email');
        return;
      }
     
      const number = parseInt(phone);
      console.log(number);
      if(!number) {
        toast.error('Enter Correct Mobile Number');
        return;
      } 
       
      console.log(`Name: ${name}\nEmail: ${email}\nPhone: ${code} - ${number}\nTime: ${time}\nReferal: ${refer}\n`);

      toast.success('Details Submitted Successfully');
      setName('');
      setEmail('');
      setPhone('');
      setTime('');
      setAgree(false);
      setRefer('');
      setCode('');

  }

  return (
    <form onSubmit={handleSubmit} className='p-1 w-full mt-10'>
       <fieldset className="fieldset mx-auto  bg-base-200  rounded-box w-sm px-4 flex-col items-center">
  <legend className="fieldset-legend text-xl">Contact Us</legend>
 <div className="mb-2 ps-3">
  <label htmlFor='name' className="label text-start mb-1 ">Full Name</label>
  <input onChange={(e)=>setName(e.target.value)} value={name} id='name' type="text" className="input focus:outline-[#27403D] focus:border-[#27403D]" placeholder="John Doe" />
 </div>
  
<div className="mb-2 ps-3 relative">
  <label htmlFor='phone' className="label mb-1 ">Phone</label>
  <input onChange={(e)=>setPhone(e.target.value)} value={phone} id='phone' type="number"  className="p-3 input focus:outline-[#27403D] focus:border-[#27403D] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" placeholder={`${code} XXXXXXXXXX`} />
  <select onChange={(e)=>setCode(e.target.value)} className='w-auto select focus:outline-[#27403D] border border-[#464E58] px-1 absolute end-[20px]'>
    {
      countryPhoneCodes.map((c)=>(
        <option className='' value={c.code}>{c.country}</option>
      ))
    }
  </select>
</div>
  
 <div className="mb-2 ps-3">
  <label htmlFor='email' className="label mb-1  block">Email</label>
  <input onChange={(e)=>setEmail(e.target.value)} value={email} id='email' type="text" className="input focus:outline-[#27403D] focus:border-[#27403D]" placeholder="john123@gmail.com" />
 </div>
  
  <div className="mb-2 ps-3">
    <textarea onChange={(e)=>setRefer(e.target.value)} value={refer} rows={5} cols={50} className="textarea text-md focus:outline-[#27403D] focus:border-[#27403D]" placeholder="What brings you here?" />
  </div>
  
 <div className="mb-2 ps-3">
  <label htmlFor='time' className="label mb-1 ">Preferred Contact Time</label>
  <input  onChange={(e)=>setTime(e.target.value)} value={time} id='time' type="text" className="input focus:outline-[#27403D] focus:border-[#27403D]" placeholder="e.g. Morning, Evening, Afternoon, Weekends ..." />
 </div>
  
  <div className="my-2 ps-3">
    <input
    onClick={(e)=>setAgree(!agree)}
    checked = {agree}
  type="checkbox"
  id='check'
  className="checkbox border-[#27403D] bg-[#74B3AE] checked:border-[#27403D] checked:bg-[#27403D] checked:text-white"
/>
<label className='inline-block ms-3' htmlFor="check"> I agree to be contacted</label>
  </div>

  <button type='submit' className="btn bg-[#27403D] mt-4 mb-3">Submit</button>
</fieldset>
    </form>
  )
}

export default Contact
