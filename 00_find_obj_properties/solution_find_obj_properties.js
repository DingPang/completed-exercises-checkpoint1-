/* eslint-disable no-unused-vars */
function findObjPropsHasOwn(object1){
    result="";
    for(let key in object1){
      if(object1.hasOwnProperty(key)){
        result=result+key+ ", ";
      }
    }
    return result.slice(0, result.length-2);
  }

function findObjKeys(object1){
    return Object.keys(object1).join(", ");
}