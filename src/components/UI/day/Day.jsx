import React from 'react'
import './day.css'

function Day({day}) {
    return (
        <div className="day">
            <div className="day__header">
                <h2 className='day__title'>
                    <img src={day.day.condition.icon} />
                    <span>{new Date(day.date).toLocaleString('en-GB', { weekday: 'long', day: '2-digit', month: '2-digit'})}</span>
                </h2>
                <h3 className="astro">
                    <div className="sunrise">
                        <span className="title">Sunrise: </span>
                        <span className="text">{day.astro.sunrise}</span>
                    </div>
                    <div className="sunset">
                        <span className="title">Sunset: </span>
                        <span className="text">{day.astro.sunset}</span>
                    </div>
                </h3>
            </div>
            <div className="day__inner">
                <h3 className="main_w">{day.day.condition.text}</h3>
                <div className="temperature">
                    <h3>
                        <span>Temperature fluctuations between </span>
                        <span>{day.day.mintemp_c}°C</span>
                        <span> and </span>
                        <span>{day.day.maxtemp_c}°C</span>
                    </h3>
                </div>
                <div className="rain_chance">
                    <h3>
                        <span>Chance of a rain during the day </span>
                        <span>{day.day.daily_chance_of_rain}%</span>
                    </h3>
                </div>
                <div className="wind_speed">
                    <h3>
                        <span>Wind speed reaching </span>
                        <span>{day.day.maxwind_kph} km/h</span>
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default Day