/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { token } from '../config'

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch(url, {
                    headers: { Authorization: `Bearer ${token}` }
                })
                const result = await response.json()
                console.log('result', result);
                if (!response.ok) {
                    throw new Error(result.message + "Could not get data")
                }
                    setLoading(false)
                    setData(result.data)
            } catch (error) {
                setLoading(false)
                setError(error.message)
            }
        }
        fetchData();
    }, [url]);
    return { data, loading, error };
}

export default useFetchData