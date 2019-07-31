import React, { useState } from 'react';
import './App.css';
import { useFetch }from './useFetch'
import RandomResult from './components/RandomResult/RandomResult'
import CurrencyForm from './components/CurrencyForm/CurrencyForm';
import LocalResults from './components/LocalResults/LocalResults';
import BigMacApi from './services/bigmac-api'


function App() {
   const { country, loading } = useFetch('https://extreme-ip-lookup.com/json/');
  
  const [amount, setAmount] = useState(0);
  const [countryData, setCountryData] = useState(null)

  const handleSubmit = async (e, amount) => {
    e.preventDefault();
    
    try{
      const data = await BigMacApi.getData(country)
      setCountryData({
        currentCountry: data.currentCountry,
        randomCountry: data.randomCountry
      });
    } catch (e){
      console.log(e)
    }

  }

 

  return (
    <div className="App">
      <CurrencyForm 
        country={country} 
        setAmount={setAmount} 
        amount={amount}
        submitAmount={handleSubmit}
      />
  {console.log(countryData)}
      {countryData && <LocalResults 
        currentCountry={countryData.currentCountry} 
        amount={amount} 
      />}
      {/* If there were more components and children. Context could be used */}
      {countryData && <RandomResult 
        amount={amount}
        randomCountry={countryData.randomCountry} 
        currentCountry={countryData.currentCountry}/>
      }
         
    </div>
  );
}

export default App;
