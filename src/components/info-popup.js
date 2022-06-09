import { useEffect, useState } from "react"
import formatData from "../functions/dataFormater";

export  function InfoPopup(props){
  const [popupData,setPopupData]=useState({});
   useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/alpha/${props.dataId}`)
    .then(results=>results.json())
    .then(data=>{
      setPopupData(data[0]);
    })
    .catch(err=>alert('were having problem fetching results'))
   },[props.dataId]);
   console.log(popupData)
    return (
      <div id="info-popup">
        <div className='country-info-wrapper'>
        {/* <i class="fa-solid fa-circle-notch fa-spin"></i> */}
          <button className="back-button" onClick={props.clickHandler}><i class="fa-solid fa-arrow-left-long"></i> <s></s> Back</button>
          <h2>{formatData(popupData.name.official)}</h2>
          <hr></hr>
          <div id="country-info-blocks">
            <div className="country-info">
              <h3 className="country-info-block-header">Demography</h3>
              <ul className="info-list">
                <li><span className="key">Capital</span> - <span>{formatData(popupData.capital[0]) }</span> </li>
                <li><span className="key">Region</span> - <span>{formatData(popupData.region)}</span> </li>
                <li><span className="key">Population</span> - <span>{formatData(popupData.population)}</span> </li>
                <li><span className="key">Languages</span> - <span>{formatData(popupData.languages)}</span> </li>
              </ul>
              <div className="flags">
                <h4>flag</h4>
                <img src={`${formatData(popupData.flags.png)}`} alt="country flag"/>

              </div>
            </div>
          </div>
          <div className='country-info'>
            <h3 className='country-info-block-header'>Economic info</h3>
            <ul className="info-list">
              <li><span className="key">Currency</span> - <span>{formatData(popupData.currencies) }</span> </li>
              <li><span className="key">Currency Symbol</span> - <span>$</span> </li>
              <li><span className="key">Timezones</span> - <span>{formatData(popupData.timezones)}</span> </li>
            </ul>

          </div>
        </div>
      </div>
    )
}