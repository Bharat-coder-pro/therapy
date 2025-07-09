import React from 'react'

const Service = ({img, title, desc}) => {
  return (
    <>
      <div className="card flex-col xl:flex-row w-[80%] mx-auto card-side bg-base-200 p-6 rounded-lg shadow-lg border-slate-400">
  <figure>
    <img
      
      src={img}
      alt="Movie" />
  </figure>
  <div className="card-body">
    <h2 className=" text-center lg:text-start text-xl">{title}</h2>
    <p className='text-justify text-md'>{desc}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    </>
  )
}

export default Service
