import React from 'react'

const Therapy = ({img, title, desc}) => {
  return (
    <div className="card max-w-sm min-w-[250px] hover:scale-105 transition-transform duration-300 bg-[#191E24] w-[80%] rounded-lg shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{desc}</p>
  </div>
  <figure className='max-h-[300px] h-[300px]'>
    <img className='h-[300px] w-[250px]'
      src={img}
      alt='threapy' />
  </figure>
</div>
  )
}

export default Therapy
