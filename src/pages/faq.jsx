import FAQ from '../components/FAQ'
import React from 'react'

const Faq = () => {

  const faqs = [{
    q: "Do you accept insurance?",
    a: " No, but a superbill is provided for self-submission."
  }, {
    q: "Are online sessions available? ",
    a: "Yes—all virtual sessions via Zoom."
  }, {
    q: "What is your cancellation policy?",
    a: "24-hour notice required."
  }, {
    q: "What are your plans?",
    a: "$200 : individual session, $240 : couples session"
  }, ]

  return (
    <div className='w-screen'>
       <div className="mt-30 container mx-auto">
        <h1 className='text-2xl text-slate-300 mb-8 text-center sm:text-start'>Frequently Asked Questions : FAQs</h1>
        <div className="flex flex-col gap-1">
           {faqs.map((faq)=>(
            <FAQ q={faq.q} a={faq.a} />
           )
          )}
        </div>
       </div>
    </div>
  )
}

export default Faq
