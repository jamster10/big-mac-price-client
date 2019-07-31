import React from 'react'
import './LocalResult.css'



export default function LocalResult({currentCountry, amount}) {
  
  //calculate amount of big macs that could be bought locally
  const localBigMacCount = () => {
    const count = (amount / currentCountry.local_price)
    return `${count.toFixed(3)} Big Mac${count > 1 ? 's' : ''}`
  }

  return (
    <div>
      <p>You could buy {localBigMacCount()} in your country.</p>
      <p>Your Dollar Purchasing Parity (PPP) is {parseInt(currentCountry.dollar_ppp).toFixed(3)}.</p>  
    </div>
  )
}

LocalResult.defaultProps = {
  currentCountry: {
    dollar_ppp: null,
    local_price: null,
  },
  amount: null
}