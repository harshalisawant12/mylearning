import React from 'react'
import Child from './Child';
import { CountryContext } from './Context';
import { useContext } from 'react';
//import {useState} from "useState";
const Navbar = () => {
const {setCountry}=useContext(CountryContext);
const country_array=["india", "us","london","malasia"];
const handleSelect=(e)=>{
setCountry(e.target.value);
}
  return (
    <div>
      <form>
      <label>Enter country</label>
      <select onChange={handleSelect}>
        {country_array.map((item, index)=>(
         <option>
            {item}
         </option> 
        ))}
      </select>
      <Child/>
      </form>
    </div>
  )
}

export default Navbar

