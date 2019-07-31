import loadingGif from '../../img/mac.gif';
import './Loading.css'

import React from 'react'

export default function Loading() {
  return (
    <div className="loading-gif">
      <p className="wait-text">Please wait...Calculating.</p>
      <img src={loadingGif} alt="Loading. Please wait..."/>
    </div>
  )
}
