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
  }
}

module.exports = Librarian;
