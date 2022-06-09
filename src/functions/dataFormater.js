/* this takes in objects,array, and string and format the values to become a string */
export default function formatData(data){
    if(typeof data!=='string'){
        return data.length?arrayToString(" "):objectToString("")
    }else{
        return 'this is a string'
    }
}

function objectToString(data){
    /* convert objects values into strings separated by comma */
    return "Results in Object format"
}
function arrayToString(data){
    /* converts array values into strings separated by commas */
    return "Results in array format"
}