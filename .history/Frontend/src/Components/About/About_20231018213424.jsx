import React from 'react'
import AboutImage from '../../assets/images/about.png'
import AboutCardImage from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
        <div className='container'>
            <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row'>
            {/* --------Image--------- */}
                <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1'>
                    <img src={AboutImage} alt=''/>
                    <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[10%]'>
                        <img src={AboutCardImage} alt=''/>
                    </div>
                </div>
            {/* ---------Content--------- */}
            <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
                <h2 className='heading'>Proud to be one of the nations best</h2>
                <p className='text_para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book.</p>
                <p className='text_para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                and scrambled it to make a type specimen book.</p> 

                <Link to='/'><button className='btn'>Learn more</button></Link>
            </div>
            </div>
        </div>
    </section>
  )
}

export default About