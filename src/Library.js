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
  var bookSelected = unshelfBook(yourBook, library.shelves[genre]);
  if (1 === 1) {
    return `You have now checked out ${yourBook} from the ${library}`
  } else {
    return `Sorry, there are currently no copies of ${yourBook} available at the ${library}`
  }
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
