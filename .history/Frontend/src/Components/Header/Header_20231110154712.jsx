import { useEffect, useRef, useContext } from 'react'
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
  const { user, token, role } = useContext(authContext);

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
                ? (<div className='flex items-center justify-center'>
                    <figure className='border border-solid w-10 h-10 rounded-full cursor-pointer'>
                      <img src={user.photo} className='w-10 h-10 rounded-full object-cover' alt="UserImg" />
                    </figure>
                    <div className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm mt-2 ml-2 mr-2 mb-2 border-gray-100 dark:border-gray-700 p-4">
                      <div className="text-sm text-gray-900 dark:text-gray-100">
                        <div>{user.name}</div>
                        <div className="font-medium truncate">{user.email}</div>
                      </div>
                      <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="avatarButton">
                        <li>
                        <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>

                          <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Dashboard</a>
                          </Link>

                        </li>
                        <li>
                          <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                          <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">Earnings</a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a href="#" className="block hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400 dark:hover:text-white">Sign out</a>
                      </div>
                    </div>
                </div>)
                : (<Link to='/login'>
                  <button type='submit' className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
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