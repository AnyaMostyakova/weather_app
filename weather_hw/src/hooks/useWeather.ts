import { useState } from 'react';
import axios from 'axios';
import { WeatherData } from '../types';

const OPENWEATHER_KEY = 'b3b107fbf9b6f7570f35d042f43a5c54';

const useWeather = () => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

    const fetchWeatherData = async (city: string) => {
        try {
            const response = await axios.get<WeatherData>(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${OPENWEATHER_KEY}&units=metric`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    return { weatherData, fetchWeatherData };
};

export default useWeather;
