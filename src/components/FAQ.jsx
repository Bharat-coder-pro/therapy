import React from 'react'

const FAQ = ({q,a}) => {
  return (
    <div className="collapse  border-base-300 border bg-[#191E24]">
      <input type="checkbox" />
  <div className="collapse-title font-semibold">{q}</div>
  <div className="collapse-content text-sm">
    {a}
  </div>
</div>
  )
}

export default FAQ
