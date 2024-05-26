import React from 'react';
import { WeatherData } from '../../types';
import weatherConditionsRu from './weatherConditionRu';
import styles from './WeatherCard.module.sass';

interface WeatherCardProps {
    city: string;
    weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
    const weatherDescription =
        weatherConditionsRu[weatherData.weather[0].description.toLowerCase()] || weatherData.weather[0].description;

    return (
        <div className={styles.weatherCard}>
            <div className={styles.content}>
                <p>Температура: {weatherData.main.temp}°C</p>
                <p>Влажность: {weatherData.main.humidity}%</p>
                <p>Условия: {weatherDescription}</p>
                <p>Ветер: {weatherData.wind.speed} м/с</p>
            </div>
        </div>
    );
};

export default WeatherCard;
