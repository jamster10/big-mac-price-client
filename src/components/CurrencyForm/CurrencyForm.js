import React, { useState } from 'react'
import './CurrencyForm.css'

export default function CurrencyForm({country, submitAmount, amount, setAmount}) {

  return (
    <div className = "currency-form">
      <h1>
        You are in {country === 'United States' ? `The ${country}` : country}
      </h1>
      <form onSubmit ={e => submitAmount(e, amount)}>
        <label htmlFor="currency-amount">Please enter an amount of money in your local currency: </label>
        <input type="number" min="0" id="currency-amount" required value={amount} onChange={e =>setAmount(e.target.value)}/>
        <input type="submit" value="Evaluate"/>
      </form>    
    </div>
  )
}
