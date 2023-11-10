import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkedinFill} from 'react-icons/ri'
import {AiFillTwitterCircle,AiFillGithub,AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
    const socialLink = [
      {
        path:'https://github.com/DungBuiTuan',
        icon:<AiFillGithub className='group-hover:text-white w-4 h-5'/>
      },
      {
        path:'https://www.instagram.com/btd.0802/',
        icon:<AiFillInstagram className='group-hover:text-white w-4 h-5'/>
      },
      {
        path:'https://github.com/DungBuiTuan',
        icon:<AiFillTwitterCircle className='group-hover:text-white w-4 h-5'/>
      },
      {
        path:'https://github.com/DungBuiTuan',
        icon:<RiLinkedinFill className='group-hover:text-white w-4 h-5'/>
      }
    ];
    const quickLink1 = [
      {
        path: '/home',
        display:'Home'
      },
      {
        path: '/',
        display:'About Us'
      },
      {
        path: '/services',
        display:'services'
      },
      {
        path: '/',
        display:'Blog'
      }
    ];
    const quickLink2 = [
      {
        path:'/find-a-doctor',
        display:'Find a Doctor'
      },
      {
        path:'/',
        display:'Request an appointment'
      },
      {
        path:'/',
        display:'Find a location'
      },
      {
        path:'/',
        display:'Get an opinion'
      }
    ];
    const quickLink3 = [
      {
        path:'/',
        display:'Donation'
      },
      {
        path:'/contact',
        display:'Contact Us'
      }
    ];

    const year = new Date().getFullYear();

  return (
    <footer className='pb-[16px] pt-10'>
      <div className='container'>
        <div className='flex justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt=''/>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                copyright © {year} developed by Bui Tuan Dung
            </p>
            <div className='flex items-center gap-3 mt-4'>
              {socialLink.map((link, index)=>(
                <Link 
                to={link.path}
                key={index}
                className='w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none' >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer