import formatData from "../functions/dataFormater";
import { useContext } from "react"
import {PopupHandlerContext } from "../App";
export function InfoWrapperWithInfo(props){
  const {hideInfoPopup}=useContext(PopupHandlerContext);
    return(
        <div className='country-info-wrapper'>
        {/* <i class="fa-solid fa-circle-notch fa-spin"></i> */}
          <button className="back-button" onClick={hideInfoPopup}><i class="fa-solid fa-arrow-left-long"></i> <s></s> Back</button>
          <h2>{formatData(props.popupData.name.official)}</h2>
          <hr></hr>
          <div id="country-info-blocks">
            <div className="country-info">
              <h3 className="country-info-block-header">Demography</h3>
              <ul className="info-list">
                <li><span className="key">Capital</span> - <span>{formatData(props.popupData.capital[0]) }</span> </li>
                <li><span className="key">Region</span> - <span>{formatData(props.popupData.region)}</span> </li>
                <li><span className="key">Population</span> - <span>{formatData(props.popupData.population)}</span> </li>
                <li><span className="key">Languages</span> - <span>{formatData(props.popupData.languages,'languages')}</span> </li>
              </ul>
              <div className="flags">
                <h4>flag</h4>
                <br/>
                <img className="country-flag-large" src={`${formatData(props.popupData.flags.png)}`} alt="country flag"/>

              </div>
            </div>
          </div>
          <div className='country-info'>
            <h3 className='country-info-block-header'>Economic info</h3>
            <ul className="info-list">
              <li><span className="key">Currency</span> - <span>{formatData(props.popupData.currencies,'currencies') }</span> </li>
              <li><span className="key">Currency Symbol</span> - <span>{formatData(props.popupData.currencies,'currency-symbol') }</span> </li>
              <li><span className="key">Timezones</span> - <span>{formatData(props.popupData.timezones)}</span> </li>
            </ul>

          </div>
        </div>
    )
}