import React, { useState, useEffect } from 'react'
import { postLocations, getForecasts } from '../services'
import WeatherForm from './WheatherForm';
import WeatherTimeList from './WheatherTimeList';

const Layout = () => {
    const [forecasts, setForecasts] = useState({})

    useEffect(() => {
        fetchForecasts()
    }, []);

    const fetchForecasts = async () => {
        const res = await getForecasts();
        setForecasts(res.data)
    }

    const submitLocations = async (e, locationArr) => {
        e.preventDefault()
        const res = await postLocations(locationArr);
        setForecasts(res.data)
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light nav-custom">
                <a class="navbar-brand">Weather Logger</a>
            </nav>
            <div>
                <h3>This Application is used to check for weathers for different Locations</h3>
            </div>
            <div>
                <WeatherForm submitLocations={submitLocations} />
            </div>
            <main>
                <WeatherTimeList forecasts={forecasts} />
            </main>

        </div>
    )
}

export default Layout;
