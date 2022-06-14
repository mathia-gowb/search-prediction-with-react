export function highlightQueryString(query,results){
    /* define regex using current query value */
    const queryRegex=new RegExp(`${query}`,'mi');
    /* remove the first match on the results */
    const resultsPartial=results.split(queryRegex);
    const formattedQuery=results.match(queryRegex)[0];//returns text in the original format i.e caps,font
    /* replace the removed match with a string surrounded by the highlight span */
    if(resultsPartial[0]===""){
        //replace on index 0 and join
        return <p className="country-name"><span class="highlight">{formattedQuery}</span>{resultsPartial[1]}</p> 
    }else if(resultsPartial[1]===""){
        //replace on index 1 and join
        return <p className="country-name">{resultsPartial[0]}<span class="highlight">{formattedQuery}</span></p> 
    }else{
        //add replacement element between the two indexes
        console.log(resultsPartial)
       return <p className="country-name">{resultsPartial[0]}<span class="highlight">{formattedQuery}</span>{resultsPartial[1]}</p> 
    }
    
}