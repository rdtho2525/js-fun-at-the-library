var {
  unshelfBook,
} = require("../src/shelf.js")

function createLibrary(name, shelves, genre) {
  var newLibrary = {
    name: name,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: []
    }
  }
  return newLibrary;
}

function addBook(library, yourBook) {
  return library.shelves[yourBook.genre].push(yourBook);
}


function checkoutBook(library, yourBook, genre) {
  for (i = 0; i <= library.shelves[genre].length; i++) {
    if (library.shelves[genre].length === 0 || library.shelves[genre][i].title !== yourBook) {
      return `Sorry, there are currently no copies of ${yourBook} available at the ${library.name}`
  } else {
    unshelfBook(yourBook, library.shelves[genre]);
    return `You have now checked out ${yourBook} from the ${library.name}`
  }
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
