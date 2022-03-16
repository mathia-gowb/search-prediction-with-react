import './App.css';
import {useState} from 'react';
import {searchAndCreateElements} from './data';

/* mapping through the results */
/* then populating the dom with the found results */
function App() {
  const [names,setNames]=useState();
  function handleInputChange(e){
    /* get the input */
    console.log(searchAndCreateElements())
    setNames(searchAndCreateElements(e.target.value))

  }
  return (

      <div className="search-container">
        <input type="text" placeholder="Type Your Search Term....." onChange={handleInputChange}/>
        <ul className="search-results">
            {names}
        </ul>
      </div>

  );
}

export default App;
