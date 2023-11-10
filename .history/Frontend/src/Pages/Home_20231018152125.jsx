import React from 'react'

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
                  allllllllllllllllllllllllllllllllllllllllllllllll
                </p>

                <button className='btn'>Request an appointment</button>
              </div>

              {/* -------------Counter---------------- */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]'>
                <div className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-p[700] text-headingColor'>
                  <h2></h2>
                  <span></span>
                  <p></p>
                </div>
                <div>
                  <h2></h2>
                  <span></span>
                  <p></p>
                </div>
                <div>
                  <h2></h2>
                  <span></span>
                  <p></p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home