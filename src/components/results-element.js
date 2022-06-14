import { highlightQueryString } from "../functions/highlightQueryString";
export default function ResultsElement(props){
    
    return (
        <div className="results-item" id={props.countryCode} onClick={props.clickHandler}>
             <img src={props.flag} alt="flag" class="country-flag"/> 
            {highlightQueryString(props.searchQuery,props.countryName)}
        </div>
    )
}