class Library {
  #books = [];

  constructor(initialBooks = []) {
    const bookSet = new Set(initialBooks);
    if (bookSet.size !== initialBooks.length) {
      throw new Error("Начальный список содержит дубликаты книг.");
    }
    this.#books = initialBooks;
  }

  get allBooks() {
    return this.#books;
  }

  addBook(title) {
    if (this.hasBook(title)) {
      throw new Error(`Книга "${title}" уже существует в библиотеке.`);
    }
    this.#books.push(title);
  }

  removeBook(title) {
    const bookIndex = this.#books.indexOf(title);
    if (bookIndex === -1) {
      throw new Error(`Книга "${title}" не найдена в библиотеке.`);
    }
    this.#books.splice(bookIndex, 1);
  }

  hasBook(title) {
    return this.#books.includes(title);
  }
}

try {
  const myLibrary = new Library(["Harry Potter", "The Hobbit", "1984"]);
  
  console.log(myLibrary.allBooks);

  myLibrary.addBook("Dune");
  console.log(myLibrary.allBooks);

  myLibrary.removeBook("1984");
  console.log(myLibrary.allBooks);

  console.log(myLibrary.hasBook("The Hobbit"));

  myLibrary.addBook("Dune");
} catch (error) {
  console.error(error.message);
}
