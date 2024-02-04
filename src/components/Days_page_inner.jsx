import React, {useEffect, useState} from 'react'
import Day from './UI/day/Day'
import WeatherService from '../API/WeatherService';
import Loader from './UI/loader/Loader';

function Days_page_inner({amountOfDays}) {
    const ws = new WeatherService;
    const [forecast, setForecast] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchForecast()
    }, [])

    async function fetchForecast () {
        const days = await ws.forecast(amountOfDays)
        setForecast(days)
        setIsLoading(false)
    }

    return (
        <div className="days">
            {isLoading
                ? <Loader />
                :
                <div className="loaded_days">
                    {forecast.map(day => 
                        <Day day={day} key={day.date_epoch}/>
                    )}
                </div>
            }
        </div>
    )
}

export default Days_page_inner