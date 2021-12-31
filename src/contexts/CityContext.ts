import { createContext, useState } from "react";
import { IWeatherType } from "../utils/IWeatherType";

type ICityContext = {
  city: string | null;
  setCity: any;
  weather: IWeatherType | null;
  setWeather: any;
};

export const CityContext = createContext({} as ICityContext);
