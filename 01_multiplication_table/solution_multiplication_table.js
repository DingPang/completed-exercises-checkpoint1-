/* eslint-disable no-unused-vars */
function multiplicationTable(rows, columns){
    length= rows
    result = [];
    for ( i = 1; i <=rows; i++) {
        therow=[]
        for ( j = 1; j <=columns; j++) {
            therow.push(i*j)
    }
        result.push(therow)
}
    return result
}