import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {RiLinkinFill} from 'react-icons/ri'
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
        icon:<RiLinkinFill className='group-hover:text-white w-4 h-5'/>
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
        <div className='flex items-center justify-between flex-col md:flex-row flex-wrap gap-[30px]'>
          <div>
            <img src={logo} alt=''/>
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>
                copyright © {year} developed by Bui Tuan Dung
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer