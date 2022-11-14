import axios from "axios"
import React from "react"
import { useState } from "react"



const weather = ({ weather }) => {
    const [city, setCity] = useState("")
    const [mode, setMode] = useState(false)
    const [weathers, setWeather] = useState({
        cityName: "",
        feels_like: "",
        temp: "",
        speed: "",
        main: "",
    })
    // async function getStaticProps(city) {
    //     const APIKey = "07933dd3753a279562640655728b1e75"
    //     const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)

    //     return {
    //         props: {
    //             weather: weather.data,

    //         }
    //     }
    // }
    const handleChange = (e) => {
        setCity(e.target.value)
    }
    const handleClick = async () => {
        console.log(city);
        if (city !== "") {
            setMode(true)

            const APIKey = "07933dd3753a279562640655728b1e75"
            const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
            console.log(weather.data);
            const res = weather.data
            setWeather({
                cityName: res.name,
                feels_like: res.main.feels_like,
                temp: res.main.temp,
                speed: res.wind.speed,
                main: res.weather[0].main,
            })
        }

    }
    if (!mode) {
        return (

            <div className="container pt-3">
                <input onChange={handleChange} value={city} name="city" />
                <input type="submit" onClick={handleClick} value="Search" />

            </div>
        )
    } else {
        return (
            <div className="container pt-3">
                <input onChange={handleChange} value={city} name="city" />
                <input type="submit" onClick={handleClick} value="Search" />
                
                <table className='table table-hover table-striped w-75 ms-5 mt-5'>
                    <caption>{weathers.cityName} weather now!</caption>
                    <thead>
                        <tr>
                            <th>City name</th>
                            <th>Feels like</th>
                            <th>Temperate</th>
                            <th>Wind</th>
                            <th>Weather describe</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{weathers.cityName}</td>
                            <td>{weathers.feels_like}</td>
                            <td>{weathers.temp}</td>
                            <td>{weathers.speed}</td>
                            <td>{weathers.main}</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        )
    }
}
export default weather