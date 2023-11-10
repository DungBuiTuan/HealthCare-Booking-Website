import React from 'react'
import Gallery1 from '../assets/images/hero-img01.png'
import Gallery2 from '../assets/images/hero-img02.png'
import Gallery3 from '../assets/images/hero-img03.png'
import SectionIcons1 from '../assets/images/icon01.png'

const Home = () => {
  return (
    <>
      {/* -------------Section--------------- */}
      <section className='home_section pt-[60px] 2xl:h-[800px]'>
        <div className='container'>
          <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
            {/* -------------Content--------------- */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]'>
                  We help patients live a healthy, longer life
                </h1>
                <p className='text_para '>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                 industry&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type 
                 and scrambled it to make a type specimen book.
                </p>

                <button className='btn'>Request an appointment</button>
              </div>

              {/* -------------Counter---------------- */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-p[700] text-headingColor'>
                    30+
                  </h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Years Of Experience</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-p[700] text-headingColor'>
                    15+
                  </h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Clinic Location</p>
                </div>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-p[700] text-headingColor'>
                    100%
                  </h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* ---------------gallery-------------- */}
            <div className='flex gap-[30px] justify-end'>
              <div>
                <img className='w-full' src={Gallery1} alt='' />
              </div>

              <div className='mt-[30px]'>
                <img className='w-full mb-[30px]' src={Gallery2} alt='' />
                <img className='w-full' src={Gallery3} alt='' />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -----------End Section-------------- */}
      <section>
        <div className='container'>
        <div className='lg:w-[470px] mx-auto'>
          <h2 className='heading text-center'>
            Providing best medical service
          </h2>
          <p className='text_para text-center'>
            avjaiibjabaoklaamflamklgnaivafawopmaopsvao
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap[30px] mt-[30px] lg:mt-[55px]'>
        <div className='py-[30px] px-5'>
          <div className='flex items-center justify-between'><img src={SectionIcons1} alt=""/></div>
          <div className='mt-[30px]'>
            <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
              Find a doctor
            </h2>
            <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>

            </p>
          </div>
        </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Home
