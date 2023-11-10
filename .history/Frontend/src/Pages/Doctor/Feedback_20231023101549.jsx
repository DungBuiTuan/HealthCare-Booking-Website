/* eslint-disable no-unused-vars */
import React from 'react'
import avatar from '../../assets/images/avatar-icon.png'

const Feedback = () => {
  return (
    <div>
        <div className='mb-[50px]'>
            <h4 className='text-[20px] leading-[30px] font-bold mb-[30px] text-headingColor'>
                All Feedbacks (272)
            </h4>

            <div className='flex justify-between mb-[30px] gap-10'>
                <div className='flex gap-3'>
                    <figure className='w-10 h-10 rounded-full'>
                        <img src={avatar} className='w-full'/>
                    </figure>

                    <div>
                        <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>
                            Baby Boo
                        </h5>
                        <p className='text-[14px] leading-5 font-medium text-textColor'></p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback