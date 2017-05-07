//DataStore for this Demo
class BookStore {

  constructor() {
    this._books = [];
    this.fetchBooks();
    this._observer = null;
  }
  get books() {
    return this._books;
  }

  subscribe(observer) {
    this._observer = observer;
  }

  getBook(id) {
    return this._books.filter((book) => {
      return book.id === Number(id);
    })[0];
  }

  fetchBooks = ()=> {
    fetch("http://localhost:7777/books")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this._books = response;
        console.log("Got books from server");
        if (this._observer) {
          this._observer.dataReady();
        }
      })
  }
}

export default new BookStore();