/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

const FeedbackForm = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  return (
    <form action=''>
      <div>
        <h3 className='mb-4 text-[16px] leading-6 text-headingColor font-semibold'>
          Rate the overall experiences?
        </h3>
        <div>
          {[...Array(5).keys].map((_,index) =>{
            index += 1;

            return(
              <button key={index} type={'button'} className={`${index <= ((rating && hover) || hover)
                ? 'bg-yellowColor'
                : 'text-gray-700'
              }`}></button>
            )
          })}
        </div>
      </div>
    </form>
  )
}

export default FeedbackForm