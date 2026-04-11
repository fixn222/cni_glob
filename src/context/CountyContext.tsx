
import { createContext , useContext } from "react"

export const CountryContext = createContext<any>(null);

export const useCountries = () => {
  const context = useContext(CountryContext);

  if (!context) {
    throw new Error("useCountries must be used inside CountryProvider");
  }

  return context;
};