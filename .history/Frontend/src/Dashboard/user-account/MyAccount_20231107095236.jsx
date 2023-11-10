/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';


const MyAccount = () => {

  const { user, token, role } = useContext(authContext);

  return (
    <div className='max-w-[1170px] px-5 mx-auto border border-blue-500 border-solid'>
        <div className='grid md:grid-cols-3 gap-10'>
            <div className=''>
                <div className=''>
                        {
                          user && token
                            ? (<div>
                              <Link to={`${role === 'doctor' ? '/doctors/profile/me' : '/users/profile/me'}`}>
                                <figure className='w-[150px] h-[150px] rounded-full cursor-pointer'>
                                  <img src={user?.photo} className='w-full rounded-full' alt="UserImg" />
                                </figure>
                                  <h2>{user?.name}</h2>
                                  <h2>{user?.email}</h2>
                              </Link>
                            </div>)
                            : (<Link to='/login'>
                            <button type='submit' className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
                          </Link>)
                        }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyAccount