import React, { useState } from 'react'
import './LocalResults.css'

//calculate amount of big macs that could be bought locally


export default function LocalResults({currentCountry, amount}) {
  
  const localBigMacCount = () => {
  console.log(amount, currentCountry)
    const count = (amount / currentCountry.local_price)
    return `${count} Big Mac${count > 1 ? 's' : ''}`
  }

  return (
    <div>
      <p>You could buy {localBigMacCount()} in your country</p>
      <p>Your Dollar Purchasing Parity (PPP) is {currentCountry.dollar_ppp}</p>  
    </div>
  )
}
