import React, { Component } from 'react';
import Location from './Location'
import WeatherData from './WeatherData'
import './styles.css'

import{
    CLOUD,
    CLOUDY,
    RAIN,
    SNOW,
    SUN,
    WINDY,
}from './../../constants/weathers';

const data = {
    temperature:5,
    weatherState:SUN,
    humidity:10,
    wind: "10 m/s",
}

class WeatherLocation extends Component {
    render() {
        return (
            <div className="weatherLocationCont">
                <Location city={"Madrid"} />
                <WeatherData data={data}/>
            </div>
        );
    }
}

export default WeatherLocation;





