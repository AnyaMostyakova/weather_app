import { useState, useEffect } from 'react';
import axios from 'axios';
import { CityData } from '../types';

const RAPIDAPI_KEY = 'ce824ced99mshfc0ddc3a7834fe2p1e91f8jsn87576947c16';

const useCities = () => {
    const [cityOptions, setCityOptions] = useState<CityData[]>([]);

    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await axios.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
                    headers: {
                        'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
                        'x-rapidapi-key': RAPIDAPI_KEY,
                    },
                });
                setCityOptions(response.data.data);
            } catch (error) {
                console.error('Error: ', error);
            }
        };
        fetchCities();
    }, []);

    return { cityOptions };
};

export default useCities;
