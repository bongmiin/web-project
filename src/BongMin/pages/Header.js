import React, { useState } from "react";
import Select from 'react-select';

import clouds from "../img/clouds.svg";
import snowman from "../img/snowman.svg";
import sun from "../img/sun.svg";
import umbrella from "../img/umbrella.svg";
import plant from  "../img/plant.png";
import "./Header.css"; 
import { years, months, days, weeks} from "./date";

const Header = () => {

   

    const [selectedWeather, setSelectedWeather] = useState("");

    const [selectedOption, setSelectedOption] = useState("");


    const handleWeatherClick = (weather) => {
        setSelectedWeather(weather);
    };

    return (
        <div>
            
            <h3>
                <img src = {plant}  alt="img" style={{ width : "20px"}} />
                &nbsp; 오늘의 날짜를 적고, 날씨에 동그라미 하세요
            </h3>
            
            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "20px" }}>
            <Select 
                onChange={setSelectedOption} 
                options={years}
                />년도
            <Select 
                defaultValue={selectedOption} 
                onChange={setSelectedOption} 
                options={months}
                />월
            <Select 
                defaultValue={selectedOption} 
                onChange={setSelectedOption} 
                options={days}
                />일
            <Select 
                defaultValue={selectedOption} 
                onChange={setSelectedOption} 
                options={weeks}
                />요일

                <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;날씨</>
                
                <div
                className={selectedWeather === "sun" ? "circle" : ""}
                onClick={() => handleWeatherClick("sun")}
                style={{ cursor: "pointer" }} >
                    <img src={sun} alt="해" style={{ width: "30px" }} />
                </div>
                <div
                className={selectedWeather === "clouds" ? "circle" : ""}
                onClick={() => handleWeatherClick("clouds")}
                style={{ cursor: "pointer" }}
                >
                    <img src={clouds} alt="구름" style={{ width: "30px" }} />
                </div>

                <div
                className={selectedWeather === "umbrella" ? "circle" : ""}
                onClick={() => handleWeatherClick("umbrella")}
                style={{ cursor: "pointer" }}
                >
                    <img src={umbrella} alt="우산" style={{ width: "30px" }} />
                    </div>
                
                <div
                className={selectedWeather === "snowman" ? "circle" : ""}
                onClick={() => handleWeatherClick("snowman")}
                style={{ cursor: "pointer" }}>
                    <img src={snowman} alt="눈사람" style={{ width: "30px" }} />
                    
                </div>
            </div>
        </div>
    );
};

export default Header;
