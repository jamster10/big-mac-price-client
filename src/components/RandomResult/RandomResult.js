import React, { useState } from 'react'
import './RandomResult.css';


export default function CurrencyForm({currentCountry, randomCountry, amount}) {
  const bigMacCount = () => {
    const count = (amount / randomCountry.local_price) * (currentCountry.local_price / randomCountry.dollar_price)
    return `${count} Big Mac${count > 1 ? 's' : ''}`
  }
  
  const currencyValue = () => {
    const value = amount * (currentCountry.local_price / randomCountry.dollar_price)
    return `${value} dollar${value > 1 ? 's' : ''}`
  }

  return (
    <div>
      <p>Random Country: {randomCountry.country}</p>
      <p>You could buy {bigMacCount()} in {randomCountry.country} with {amount}!</p>
      <p>Your {amount} is worth about {currencyValue()} in {randomCountry.country}</p>
    </div>
  )
}
