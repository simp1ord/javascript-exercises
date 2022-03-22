const getTheTitles = function(book) {
    const bookTitles = []; 
    for(titles in book){
      let object = book[titles];
      let bookTitle = object.title;
      bookTitles.push(bookTitle);
    }
  return(bookTitles);
  };
// Do not edit below this line
module.exports = getTheTitles;
