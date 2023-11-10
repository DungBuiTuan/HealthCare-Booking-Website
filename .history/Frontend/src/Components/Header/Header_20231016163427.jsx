import {useEffect, useRef} from 'react'
import { NavLink, Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const navlinks = [
  {
    display: "Home",
  path: "/home"
  },
  {
    display: "Find a Doctor",
    path: "/doctors"
  },
  {
    display: "Services",
    path: "/services",
  },
  {
    display: "Contact",
    path: "/contact"
  }
]

const Header = () => {
  return (
    <header className='header flex items-center'>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/*-----------Header------------*/}
          <div>
            <img src={logo} alt='' />
          </div>

          <div className='navigation'>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {
                navlinks.map((link,index)=>{
                  <li key={index}>
                    <NavLink to={link.path} className={navClass => navClass.isActive 
                      ? 'text-primaryColor text-[16px] leading-7 font-[600]' 
                      : 'text-textColor text-[16px] leading-7 font-[500]'} 
                      >
                        {link.display}
                      </NavLink>
                  </li>
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header