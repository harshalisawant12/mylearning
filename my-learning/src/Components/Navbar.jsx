import React, { useContext, useEffect, useState } from 'react';
import { CountryContext } from './Context';
import './Navbar.css';
import Child from './Child';
import {Link,useLocation} from 'react-router-dom';
const Navbar = () => {
  const [ChildContent, setChildContent]=useState(false);
  const { setCountry } = useContext(CountryContext);
  const country_array = ['india', 'us', 'london', 'malasia'];
  const location = useLocation();
  useEffect(() => {
    setCountry(country_array[0]);
  }, []);

  const handleSelect = (e) => {
    setCountry(e.target.value);
  };
  const isDropdownDisabled = location.pathname === '/';
  return (
    <div>
    <div className='nav-container'>
      <nav>
     <Link to="/" className='home-link'>Home</Link>
     <Link to="/Destination" className='destination-link'>Destination
     </Link>
    
     </nav>
     <div>
      Country:
    
      <select onChange={handleSelect} disabled={isDropdownDisabled}>
        {country_array.map((item, index)=>(
         <option>
            {item}
         </option> 
        ))}
      </select>
     </div>
    </div>
     <div className='navbar-wrap'>
      <div className='mychild'>
        
        
    </div>
      </div>
      </div>
  );
};

export default Navbar;
