import React from 'react'

const FaqItem = ({item}) => {
  return (
    <div className='p-3 lg:p-5 rounded-[12px] border border-solid border-[#D9D3C2] mb-5 cursor-pointer'>
        <div className='flex items-center justify-between gap-5' onClick={toggleAccordion}>
        <h4 className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor'>
            {item.}
        </h4>
        <div></div>
        </div>
    </div>
  )
}

export default FaqItem