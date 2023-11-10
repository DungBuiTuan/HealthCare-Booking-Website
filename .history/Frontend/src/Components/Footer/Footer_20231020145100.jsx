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

  return (
    <div>Footer</div>
  )
}

export default Footer