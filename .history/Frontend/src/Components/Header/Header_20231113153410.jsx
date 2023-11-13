import { useEffect, useRef, useContext, useState } from 'react'
import { NavLink, Link } from 'react-router-dom';
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
  const { user, token, role, dispatch } = useContext(authContext);

  const [dropdownState, setDropdownState] = useState({ open: false });

 const handleDropdownClick = () =>
 setDropdownState({ open: !dropdownState.open });

   //choose type logout from authContext
   const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  }

  const handleStickyHeader = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    })
  }

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle('show_menu')

  return (
    <header className='header flex items-center' ref={headerRef}>
      <div className='container'>
        <div className='flex items-center justify-between'>
          {/*-----------Logo------------*/}
          <div>
            <a href='/home'><h1 className='text-headingColor font-bold text-2xl '>HealthCare</h1></a>
          </div>

          {/*-----------Menu--------------*/}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <ul className='menu flex items-center gap-[2.7rem]'>
              {navlinks.map((link, index) => (
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
            {
              user && token
                ? (<div className='flex items-center justify-center relative'>
                      <button className='border border-solid w-10 h-10 rounded-full cursor-pointer' type={'button'} onClick={handleDropdownClick}>
                      <img src={user.photo} className='w-10 h-10 rounded-full object-cover' alt="UserImg" />
                      </button>
                    {dropdownState.open && (
                      <div className='bg-[#707F95] text-white mt-[220px] right-0 p-5 w-[300px] rounded-md leading-7 z-50 absolute'>
                       <ul>
                       <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                         <div className='flex items-center justify-start border-b-2 border-slate-400'>
                         <figure className='border border-solid w-8 h-8 rounded-full mr-2 cursor-pointer '>
                         <img src={user.photo} className='w-8 h-8 rounded-full object-cover' alt="UserImg" />
                        </figure>
                          <li className='text-[16px] font-bold'>{user.name}</li>
                         </div>
                        </Link>
                         <li>Account Settings</li>
                         <li>Item 3</li>
                         <li>Item 3</li>
                         <li><button type={'submit'} onClick={handleLogout}>Logout</button></li>
                       </ul>
                      </div>
                     )}
                </div>)
                : (<Link to='/login'>
                <button type='submit' className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px]
                 flex items-center justify-center rounded-[50px]'>Login</button>
              </Link>)
            }

            <span className='md:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header