/* eslint-disable no-unused-vars */
function rightTriangle (num){
    a="";
    for( i=0;i<num;i++){
      for( j=0;j<num;j++){
        if((i+j)<num){
          a=a+"*";
        }
        else{
          a=a;
        }
      }
       a=a+"\n";
    }
    return a.slice(0, a.length- 1); // get rid of the last \n
  }