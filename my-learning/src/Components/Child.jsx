import React,{useContext} from 'react'
import { CountryContext } from './Context';

//child commit
const Child = () => {
    const {country}=useContext(CountryContext);
  return (
    <div>
 
    {country=='india'?(
        <div>
      <h1>Some destinations in India</h1>
      <ol>
      <li>Manali</li>
      <li>Ooty</li>
      <li>Taj-Mahal</li>
      </ol>
      </div>
    ):country=='us'?(
        <div>
            <h1>Some destination from US</h1>
            <ol>
                <li>Washinton</li>
                <li>NewYork</li>
            </ol>
        </div>
    ):country=='london'?(
        <div>
            <h1>Some destination from london</h1>
            <ol>
                <li>Statue of unity</li>
                <li>Queen palace</li>
            </ol>
        </div>
    ): country=='malasia'?(
        <div>
            <h1>Some destination in Malasia</h1>
            <ol>
                <li>Makka</li>
                <li>Madina</li>
            </ol>
        </div>
    ):country}
    </div>
  )
}

export default Child