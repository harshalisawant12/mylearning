import React from 'react'
import { createContext, useState } from "react";
export const CountryContext=createContext();


const  CountryProvider= ({children}) => {
    const [country, setCountry]=useState('');
  return (
  
        <CountryContext.Provider value={{country, setCountry}}>
        {children}
        </CountryContext.Provider>
  
  )
}

export { CountryProvider }
