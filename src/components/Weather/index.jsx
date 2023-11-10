import axios from "axios";
import { useState, useEffect } from "react";
import "./index.css";

function Weather() {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const url = "https://api.weatherbit.io/v2.0/current?city=Minsk&key=35204a0d879b49e6853dd463c9977590";
        axios
            .get(url)
            .then((response) => {

                setWeather(response.data);
            })
            .catch((error) => {
                console.error("Ошибка при получении данных о погоде: ", error);
            });
    }, []);
    // console.log(weather);
    // console.log(weather.data[0]);

    return (
        <div className="weather-panel">
            {weather ? (
                <div>
                    <h1>Погода в Минске</h1>
                    <p>Температура: {weather.data[0].temp} °C</p>
                    <p>Давление: {weather.data[0].pres} hPa</p>
                    <p>Влажность: {weather.data[0].rh} %</p>
                    <p>Скорость ветра: {weather.data[0].wind_spd} м/с</p>
                    <p>Облачность: {weather.data[0].clouds} %</p>
                </div>
            ) : (
                <p>Загрузка данных о погоде...</p>
            )}
        </div>
    );
}

export default Weather;