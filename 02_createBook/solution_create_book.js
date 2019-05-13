const createBook = function (id, title, author, price, rating){
    const book= {
        id,
        title,
        author,
        price,
        rating:[]
        };
    return book;
}
createBook.prototype.getInfo= function(){
    result= this.title + ""+ this.author;
    return result;
}
createBook.prototype.getPrice= function(){
    return this.price
}
createBook.prototype.addRating= function(num){
    rating1= '';
    for(i=0; i<= num; i++){
        rating1 +='*'
    }
    return this.rating.push(rating1)
}
createBook.prototype.getInfo= function(){
    return '${title} author'
}