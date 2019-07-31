import React, { useState } from "react";
import "./App.css";
import { useFetch } from "./useFetch";
import RandomResult from "./components/RandomResult/RandomResult";
import CurrencyForm from "./components/CurrencyForm/CurrencyForm";
import LocalResults from "./components/LocalResult/LocalResult";
import BigMacApi from "./services/bigmac-api";

function App() {
  const { country } = useFetch("https://extreme-ip-lookup.com/json/");

  const [countryData, setCountryData] = useState(null); //fetched country data
  const [amount, setAmount] = useState(100);
  const handleAmount = e => {
    let { value } = e.target;
    value = value.replace(/^0+/, "");

    if (isNaN(parseInt(value))) {
      errorHandler({ message: `Invalid Number. No negative values` });
      return;
    }
    setAmount(value);
  };

  const [error, setError] = useState(null); //handle any errors in app. Could also use error boundaries
  const errorHandler = e => {
    setError(e.message);
    setTimeout(() => {
      setError(null);
    }, 3000);
  };

  const handleSubmit = async (e, amount) => {
    e.preventDefault();

    try {
      const data = await BigMacApi.getData(country);
      setCountryData({
        currentCountry: data.currentCountry,
        randomCountry: data.randomCountry
      });
    } catch (e) {
      errorHandler(e);
    }
  };

  return (
    <div className="App">
      <p className="error">{error && error}</p>
      <CurrencyForm
        country={country}
        setAmount={handleAmount}
        amount={amount}
        submitAmount={handleSubmit}
      />
      {countryData && (
        <LocalResults
          currentCountry={countryData.currentCountry}
          amount={amount}
        />
      )}
      {/* If there were more components and children. Context could be used */}
      {countryData && (
        <RandomResult
          amount={amount}
          randomCountry={countryData.randomCountry}
          currentCountry={countryData.currentCountry}
        />
      )}
    </div>
  );
}

export default App;
