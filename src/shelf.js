function shelfBook(yourBook, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(yourBook);
  }
  return shelf;
}

function unshelfBook(yourBook, shelf) {
  var getTitle = element => element.title === yourBook;
  //test function that matches the title property's value to the
  //string argument assigned to yourBook
  shelf.splice(shelf.findIndex(getTitle), 1);
  //.splice removes an element of an array; accepts two parameters
  //starting index position and span of indexes to remove from
  //low position to high position (ostensibly left to right)
  return shelf;
}

function listTitles(shelf) {
  var shelfTitles = [];
  for (var i = 0; i < shelf.length; i++) {
    shelfTitles.push(shelf[i].title);
  }
  return shelfTitles;
}

function searchShelf(shelf, yourBook) {
  for (var i = 0; i < shelf.length; i++){
    if(shelf[i].title === yourBook){
      return true
    } else {
      return false
    }
  }
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
