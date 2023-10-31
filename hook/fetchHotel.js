import { useState, useEffect } from "react";
import axios from "axios";

const fetchHotels = (places) => {
    const [hotels, setHotels] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)


    const fetchData = async () => {
        setIsLoading(true)
        //here static url and static country id is used to show hotels nearby
        try {
            if (places === 1) {
                const response = await axios.get('https://nativetravelappbackend-production.up.railway.app/api/hotels/byCountry/653e44cbfd72cab2c40e5c29?limit=3');
                setHotels(response.data.hotels)
            } else {
                const response = await axios.get('https://nativetravelappbackend-production.up.railway.app/api/hotels/byCountry/653e44cbfd72cab2c40e5c29');
                setHotels(response.data.hotels)
            }

            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData();
    }


    return { hotels, isLoading, error, refetch }
}

export default fetchHotels