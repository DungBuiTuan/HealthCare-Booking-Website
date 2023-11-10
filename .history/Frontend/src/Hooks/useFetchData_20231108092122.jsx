/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import { token } from '../config'

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await fetch(url, {
                    headers:{Authorization : `Bearer ${token}`}
                })
        }catch(error){

        }
    }
    }, []);

  return (
    <div>useFetchData</div>
  )
}

export default useFetchData