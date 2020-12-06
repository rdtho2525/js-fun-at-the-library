function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var newCharacter = {
    name: name,
    age: age,
    pronouns: pronouns
  }
  return newCharacter;
}

function saveReview(yourReview, holdReview) {
  // var getReview = element => element.title === yourBook;
  holdReview.push(yourReview);
  return holdReview;
}

function calculatePageCount(title) {
  var product = title.length * 20;
  return product;
}

function writeBook(title, character, genre) {
  var newBook = {
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  };
  return newBook;
}

function editBook(yourBook, pageCount) {
  var edit = yourBook.pageCount * .75;
  yourBook.pageCount = edit;
  return edit;
}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
