/* this takes in objects,array, and string and format the values to become a string */
export default function formatData(data,varType){
    if(typeof data!=='number'&&typeof data!=='string'){
        return data.length>=0?arrayToString(data,varType):objectToString(data,varType)
    }else{
        return data
    }
}

function objectToString(data,varType){
    /* convert objects values into strings separated by comma */

    if(varType==='languages'){
        return iterateObject(data).join(', ')
    }
    if(varType==='currencies'){
        const currencyNames=iterateObject(data);
        return currencyNames.map(currency=>currency.name).join(', ')
    }
    if(varType==='currency-symbol'){
        const currencyNames=iterateObject(data);
        return currencyNames.map(currency=>currency.symbol).join(', ')
    }
}
function arrayToString(data){
    /* converts array values into strings separated by commas */
    return data.join(", ")
}
function iterateObject(objectName){
    let valueStorage=[]
    for(let property in objectName){
        valueStorage.push(objectName[property])
    }
    return valueStorage
}