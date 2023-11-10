import React from 'react'
import { Link } from 'react-router-dom'
import Gallery1 from '../assets/images/hero-img01.png'
import Gallery2 from '../assets/images/hero-img02.png'
import Gallery3 from '../assets/images/hero-img03.png'
import SectionIcons1 from '../assets/images/icon01.png'
import SectionIcons2 from '../assets/images/icon02.png'
import SectionIcons3 from '../assets/images/icon03.png'
import FeatureImage from '../assets/images/feature-img.png'
import videoIcon from '../assets/images/video-icon.png'
import AvatarIcon from '../assets/images/avatar-icon.png'
import ContactIMG from '../assets/images/faq-img.png'
import { BsArrowRight } from 'react-icons/bs'
import About from '../Components/About/About'
import ServiceList from '../Components/Services/ServiceList'
import DoctorList from '../Components/Doctors/DoctorList'
import FaqList from '../Components/FaqContact/FaqList'
import Testimonial from '../Components/Testimonial/Testimonial'

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
                  industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
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
              <div className='flex items-center justify-center'><img src={SectionIcons1} alt="" /></div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a doctor
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'><img src={SectionIcons2} alt="" /></div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Find a location
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
            <div className='py-[30px] px-5'>
              <div className='flex items-center justify-center'><img src={SectionIcons3} alt="" /></div>
              <div className='mt-[30px]'>
                <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                  Book an appointment
                </h2>
                <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>

                <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none'>
                  <BsArrowRight className='group-hover:text-white w-6 h-5' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------------About-------------------- */}
      <About />

      {/* -------------Service------------------- */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Medical Services</h2>
            <p className='text_para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <ServiceList />
        </div>
      </section>

      {/* ---------Feature---------- */}
      <section>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            {/* ----------------Content----------------- */}
            <div className='xl:w-[670px] ml-5'>
              <h2 className='heading'>Get virtual treatment <br /> Anytime</h2>
              <ul className='pl-4'>
                <li className='text_para'>1. Schedule the appointment directly</li>
                <li className='text_para'>2. Schedule the appointment directly</li>
                <li className='text_para'>3. Schedule the appointment directly</li>
              </ul>
              <Link to='/'>
                <button className='btn'>Learn more</button>
              </Link>
            </div>
            {/* ---------------Image--------------- */}
            <div className='relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0'>
              <img src={FeatureImage} className='w-3/4' alt='' />
              <div className='w-[150px] lg:w-[250px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-10 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[6px] lg:gap-3'>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]'>
                      Mon,16
                    </p>
                    <p className='text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]'>
                      100:00 AM
                    </p>
                  </div>
                  <span className='w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]'>
                    <img src={videoIcon} alt='' />
                  </span>
                </div>

                <div className='w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full'>
                  Consultation
                </div>

                <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                  <img src={AvatarIcon} alt='' />
                  <h4 className='text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor'>Bui Tuan Dung</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --------Doctors Team-------- */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>Our Doctors</h2>
            <p className='text_para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/* -------Contact---------- */}
      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-1/2 hidden md:block'>
              <img src={ContactIMG} alt='' />
            </div>
            <div className='w-full md:w-1/2'>
              <h2 className='heading'>Most question by our beloved patients</h2>
              <FaqList/>
            </div>
          </div>
        </div>
      </section>
      {/* ------Testimonial------- */}
      <section>
        <div className='container'>
          <div className='xl:w-[470px] mx-auto'>
            <h2 className='heading text-center'>What our patient say </h2>
            <p className='text_para text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <Testimonial/>
        </div>
      </section>
    </>
  )
}

export default Home
