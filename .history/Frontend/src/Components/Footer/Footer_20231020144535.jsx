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
    const quickLink1 = [{}];
    const quickLink2 = [{}];
    const quickLink3 = [{}];

  return (
    <div>Footer</div>
  )
}

export default Footer