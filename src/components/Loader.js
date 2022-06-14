import React from 'react'
import loadingGif from '../images/loader.gif';
export function Loader(props) {
  return (
    <div class="loading-gif">
        <p>Loading Data</p>
        <img src={loadingGif} alt="loader"/>
    </div>
  )
}

