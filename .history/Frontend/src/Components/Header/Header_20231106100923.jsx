import {useEffect, useRef, useContext} from 'react'
import { NavLink, Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import userImg from '../../assets/images/avatar-icon.png';
import { BiMenu } from 'react-icons/bi'
import { authContext } from '../../Context/AuthContext';

const navlinks = [
  {
    path: "/home",
    name: "Home"
  },
  {
    path: "/doctors",
    name: "Find a Doctor"
  },
  {
    path: "/services",
    name: "Services"
  },
  {
    path: "/contact",
    name: "Contact"
  }
]

const Header = () => {

  const headerRef = useRef(null)
  const menuRef = useRef(null)
  const {user, token, role} = useContext(authContext);

  const handleStickyHeader = () =>{
      window.addEventListener('scroll', ()=>{
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
          headerRef.current.classList.add('sticky_header');
        }else{
          headerRef.current.classList.remove('sticky_header');
        }
      })
  }

  useEffect(()=>{
    handleStickyHeader();
    return () => window.removeEventListener('scroll',handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/*-----------Logo------------*/}
          <div>
            <a href='/home'><img src={logo} alt='' /></a>
          </div>

          {/*-----------Menu--------------*/}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navlinks.map((link,index) =>(
                  <li key={index}>
                    <NavLink to={link.path} className={navClass => navClass.isActive 
                    ? 'text-primaryColor text-[16px] leading-7 font-[600]' 
                    : 'text-textColor text-[16px] leading-7 font-[500]'
                  } 
                  >
                    {link.name}  
                  </NavLink>
                  </li>
              ))}
            </ul>
          </div>

          {/*--------------Nav Right--------------*/}
          <div className='flex items-center gap-4'>
            <div className='hidden'>
                  <Link to='/'>
                    <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                      <img src={userImg} className='w-full rounded-full' alt="UserImg"/>
                    </figure>
                  </Link>
            </div>
            <h1>{user?.name}</h1>
            <Link to='/login'>
              <button type='submit' className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
            </Link>

            <span className='md:hidden' onClick={toggleMenu}>
                  <BiMenu className='w-6 h-6 cursor-pointer'/>
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header