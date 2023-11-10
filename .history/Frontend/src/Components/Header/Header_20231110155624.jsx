import { useEffect, useRef, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'
import { authContext } from '../../Context/AuthContext';
import { PopupMenu } from "react-simple-widgets";


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
          <PopupMenu>
          <button className="btn btn-primary">
            <small>Menu</small>
          </button>

          <div className="card text-start">
            <div className="card-body px-4 py-4">
              <div id="circle-avatar" className="text-center mx-auto mb-4">
                <span>K</span>
              </div>

              <h5 className="text-center mb-0">John Doe</h5>
              <p className="text-center mb-2">jd@gmail.com</p>

              <hr />

              <p
                className="mb-0"
                style={{ color: "#bebebe", fontWeight: "bold", fontSize: 12 }}
              >
                ROLES
              </p>
              <p style={{ fontSize: 12 }}>
                {["Submitter", "Project manager", "Change control board"].join(
                  ", "
                )}
              </p>

              <hr className="mb-0" style={{ margin: "0 -24px 0" }} />

              <div
                className="list-group list-group-flush"
                style={{ margin: "0 -24px 0" }}
              >
                <button className="list-group-item list-group-item-action px-4">
                  <small>Change Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Pending Requests</small>
                </button>
                <button className="list-group-item list-group-item-action px-4">
                  <small>Other Requests</small>
                </button>
              </div>

              <hr style={{ margin: "0 -24px 24px" }} />

              <div className="d-grid">
                <button className="btn btn-secondary">
                  <small>Logout</small>
                </button>
              </div>
            </div>
          </div>
        </PopupMenu>
            {
              user && token
                ? (<div className='flex items-center justify-center'>
                  <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                    <figure className='border border-solid w-10 h-10 rounded-full cursor-pointer'>
                      <img src={user.photo} className='w-10 h-10 rounded-full object-cover' alt="UserImg" />
                    </figure>
                  </Link>
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