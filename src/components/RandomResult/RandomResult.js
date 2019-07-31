import React from 'react'
import './RandomResult.css';


export default function RandomResult({currentCountry, randomCountry, amount}) {
  const bigMacCount = () => {
    const count = (amount / randomCountry.local_price) * (currentCountry.local_price / randomCountry.dollar_price)
    return `${count.toFixed(3)} Big Mac${count > 1 ? 's' : ''}`
  }
  
  const currencyValue = () => {
    const value = amount * (currentCountry.local_price / randomCountry.dollar_price)
    return `${value.toFixed(3)} dollar${value > 1 ? 's' : ''}`
  }

  return (
    <div>
      <h2>Random Country: {randomCountry.country}</h2>
      <p>You could buy {bigMacCount()} in {randomCountry.country} with {amount}!</p>
      <p>Your {amount} is worth about {currencyValue()} in {randomCountry.country}.</p>
    </div>
  )
}

RandomResult.defaultProps = {
  currentCountry: {
    dollar_price: null,
    local_price: null,
  },
  randomCountry: {
    dollar_price: null,
    local_price: null,
  },
  amount: null
}