import './App.css';
import {useState,useEffect} from 'react';
import ResultsElement from './components/results-element';
import{ InfoPopup} from './components/info-popup';


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
    /* get the input */
    const searchRegex=new RegExp(`${target.value}`,'gmi');
    if(target.value.length>2){
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
        setSearchResultsElements(searchResults)
    }
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
    </div>
    {popupData.display&&<InfoPopup dataId={popupData.id} clickHandler={hideInfoPopup}/>}
   </main>
  );
}

export default App;
