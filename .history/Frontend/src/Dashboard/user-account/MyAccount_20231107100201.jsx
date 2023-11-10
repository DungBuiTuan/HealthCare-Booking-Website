/* eslint-disable no-unused-vars */
import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import { authContext } from '../../Context/AuthContext';


const MyAccount = () => {

  const { user, token, role } = useContext(authContext);

  return (
    <div className='max-w-[1024px] px-5 mt-[100px] mb-[50px] mx-auto border border-blue-500 border-solid'>
        <div className='grid md:grid-cols-3 gap-10'>
            <div className=''>
                <div className=''>
                        {
                         <div>
                                <figure className='rounded-full cursor-pointer mt-[75px]'>
                                  <img src={user?.photo} className='w-[150px] h-[150px] rounded-full object-cover' alt="UserImg" />
                                </figure>
                                  <h2>{user?.name}</h2>
                                  <h2>{user?.email}</h2>
                            </div>
                        }
                </div>
            </div>
        </div>
    </div>
  )
}

export default MyAccount