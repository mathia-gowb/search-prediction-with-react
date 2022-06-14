import {useEffect, useState } from "react"
import { InfoWrapperWithInfo } from "./info-wrapper-final";
import { Loader } from "./Loader";

export  function InfoPopup(props){
  const [popupData,setPopupData]=useState({});
  
   useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/alpha/${props.dataId}`)
    .then(results=>results.json())
    .then(data=>{
      /* delay the display of data */
      setTimeout( ()=> setPopupData(data),1000)
     ;
    })
    .catch(err=>alert('were having problem fetching results'))
   },[props.dataId]);
   console.log(popupData)
    return (
      <div id="info-popup">
        {popupData.length>0?<InfoWrapperWithInfo popupData={popupData[0]}/>:<Loader/>}
      </div>
    )
}