import React from 'react';
import PropTypes from 'prop-types';
import { configureTime } from '../services/timeConfig';

const WeatherTimeList = ({ forecasts }) => {


    const renderedForecasts = Object.keys(forecasts).map(forecast => {
        const { id, timezone, currentTemperature,
            windSpeed, country,
            description, message } = forecasts[forecast]

        if (message) {
            return (
                <div key={id} className="col-md-4 col-sm-6">
                    <div className='weather-card px-3 py-2'>
                        <div className="title">
                            {forecast}
                        </div>

                        <div className="weather">
                            <h4 id="message">{message}</h4>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div key={id} className="col-md-4 col-sm-6">
                <div className="weather-card px-3 py-2">
                    <div className="title">
                        <h3>{forecast}, {country}</h3>
                    </div>
                    <div className="weather">
                        <h4>Current Temperature: {currentTemperature}˚F</h4>
                        <br />
                        <span>wind speed: {windSpeed}mph</span>
                        <p>{description}</p>
                    </div>
                    <div className='clock'>
                        {configureTime(timezone)}
                    </div>
                </div>
            </div>

        )
    })

    return (
        <div className="container">
            <div className="row">
                {renderedForecasts}
            </div>
        </div>
    )
}

WeatherTimeList.propTypes = {
    forecasts: PropTypes.object.isRequired
}

export default WeatherTimeList