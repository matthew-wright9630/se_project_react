import { React } from "react";
import { createContext } from "react";

const CurrentTemperatureUnitContext = createContext({
  currentTemperatureUnit: "",
  handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };
