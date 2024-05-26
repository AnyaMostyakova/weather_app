import React, { useState } from 'react';
import './App.css';
import Input from './components/SearchInput/Input';
import Button from './components/SearchButton/Button';
import WeatherCard from './components/WeatherInfo/WeatherCard';
import useCities from './hooks/useCities';
import useWeather from './hooks/useWeather';
import { WeatherData } from './types';

function App() {
    const [city, setCity] = useState<string>('');
    const { cityOptions } = useCities();
    const { weatherData, fetchWeatherData } = useWeather();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleSearch = () => {
        fetchWeatherData(city);
    };

    return (
        <div className={'container'}>
            <div className={'input-container'}>
                <Input
                    placeholder="Введите название города"
                    value={city}
                    onChange={handleInputChange}
                    id="search-input"
                />
                <Button onClick={handleSearch}>Поиск</Button>
            </div>
            <ul>
                {cityOptions.map((city: WeatherData) => (
                    <li key={city.id}>{city.city}</li>
                ))}
            </ul>
            {weatherData && <WeatherCard city={weatherData.city} weatherData={weatherData} />}
        </div>
    );
}

export default App;
