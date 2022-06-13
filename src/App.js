import './App.css';
import {useState,useEffect,createContext} from 'react';
import ResultsElement from './components/results-element';
import{ InfoPopup} from './components/info-popup';

export const PopupHandlerContext=createContext({});
/* mapping through the results */
/* then populating the dom with the found results */
function App() {
  const [searchResultsElements,setSearchResultsElements]=useState([]);
  const [countries,setCountries]=useState([]);
  const [popupData,setPopupData]=useState({});

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(results=>results.json())
    .then(data=>setCountries(data))
    .catch(err=>alert('were having problem fetching results'))
  },[])

  function handleInputChange({target}){
    console.log(target.value)
    /* get the input */
    const searchRegex=new RegExp(`${target.value}`,'gmi');
    if(target.value.length>1){
      /* if input length >2 start searching */
      /* filter countries by search term and create list items*/
      const searchResults=countries.filter(country=>country.name.common.match(searchRegex))
     .map(results=><ResultsElement 
          clickHandler={showInfoPopup}
          flag={results.flags.png}
          countryName={results.name.common}
          countryCode={results.cioc}
          />
        ) 
        setSearchResultsElements(searchResults.length>0?searchResults:<p>No results</p>)
        return
    }
    setSearchResultsElements(<p>No results</p>)
  }

  function showInfoPopup({currentTarget}){
    setPopupData((prev)=>{
      return {...prev,'id':currentTarget.id,'display':true}
    })
  }

  function hideInfoPopup(){
    setPopupData((prev)=>{
      return {...prev,'display':false}
    })
  }
  return (
    <PopupHandlerContext.Provider value={{hideInfoPopup}}>
      <main >
       <div className="wrapper">
         <div className="search-container">
           <h1>Search for  information about any country</h1>
           <button>this site uses rest countries api</button>
           <input type="text" placeholder="Search For Country" onChange={handleInputChange}/>
           <div className="search-results">
               {searchResultsElements}
           </div>
         </div>
       {popupData.display&&<InfoPopup dataId={popupData.id}/>}
       </div>
      </main>
   </PopupHandlerContext.Provider>
  );
}

export default App;
