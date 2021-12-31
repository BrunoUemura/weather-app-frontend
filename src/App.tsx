import { useState } from "react";

import "./styles/App.scss";
import { CityContext } from "./contexts/CityContext";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";
import { backendResponse } from "./mocks/BackendResponse";
import { IWeatherType } from "./utils/IWeatherType";
import { defineBackgroundImage } from "./utils/DefineBackgroundImage";

export default function App() {
  const [city, setCity] = useState<string>("Calgary");
  const [weather, setWeather] = useState<IWeatherType>(backendResponse);

  const backgroundImage = defineBackgroundImage(
    weather.localTime,
    weather.condition
  );

  return (
    <div className="App">
      <img
        className="AppImage"
        src={backgroundImage}
        alt="Weather Background"
      />
      <CityContext.Provider value={{ city, setCity, weather, setWeather }}>
        <Navbar />
        <Weather />
      </CityContext.Provider>
    </div>
  );
}
