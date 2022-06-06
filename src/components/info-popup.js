export default function InfoPopup(props){
    return (
        <div id="info-popup">
        <div className='country-info-wrapper'>
        {/* <i class="fa-solid fa-circle-notch fa-spin"></i> */}
          <button className="back-button" onClick={props.clickHandler}><i class="fa-solid fa-arrow-left-long"></i> <s></s> Back</button>
          <h2>America</h2>
          <hr></hr>
          <div id="country-info-blocks">
            <div className="country-info">
              <h3 className="country-info-block-header">Demography</h3>
              <ul className="info-list">
                <li><span className="key">Capital</span> - <span>bongota</span> </li>
                <li><span className="key">Calling codes</span> - <span>57, 58</span> </li>
                <li><span className="key">Region</span> - <span>South America</span> </li>
                <li><span className="key">Population</span> - <span>48759958</span> </li>
                <li><span className="key">Languages</span> - <span>Spanish (espanol)</span> </li>
              </ul>
              <div className="flags">
                <h4>flag</h4>
                <img src='' alt="country flag"/>
  
              </div>
            </div>
          </div>
          <div className='country-info'>
            <h3 className='country-info-block-header'>Economic info</h3>
            <ul className="info-list">
            <li><span className="key">Currency</span> - <span>Colombian Peso, Currency 2</span> </li>
                <li><span className="key">Currency Symbol</span> - <span>$</span> </li>
                <li><span className="key">Timezones</span> - <span>UTC-05:00</span> </li>
            </ul>
  
          </div>
        </div>
      </div>
    )
}