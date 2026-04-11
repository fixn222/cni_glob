import { fetchCountries } from "../lib/api.ts";
import { useEffect, useState } from "react"
import {CountryContext} from '../context/CountyContext.tsx'

export const CountryProvider = ({children} :any) =>{
    const [countries , setCountries] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState("");

    const loadCountries = async () => {
        try {
            setLoading(true);
            const data = await fetchCountries();
            setCountries(data);           
        } catch (error : any) {
            setError(error.message)
            
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=> {
        loadCountries()
    } , []);

    return (
        <CountryContext.Provider
        value={{countries , loading , error , refetch : loadCountries}}
        >
            {children}
        </CountryContext.Provider>
    )
}
