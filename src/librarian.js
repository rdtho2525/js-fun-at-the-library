class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
    this.isMorning = false;
    this.greetPatron = function(patron, isMorning) {
      if (isMorning) {
        return `Good morning, ${patron}!`
      } else {
        return `Hello, ${patron}!`
      }
    };
    // this.findBook = function(yourBook) {
    //   for (var i = 0; i < this.library.shelves[yourBook.genre].length; i++) {
    //     if (librarian.library.shelves[yourBook.genre][i].title === yourBook) {
    //       return `Yes, we have ${yourBook}`
    //     } else {
    //       return `Sorry, we do not have ${yourBook}`
    //     }
    //   }
    // };
  }
}

module.exports = Librarian;
