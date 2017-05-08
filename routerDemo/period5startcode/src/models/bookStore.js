import { observable, useStrict, action } from "mobx"

useStrict(true);

//DataStore for this Demo
class BookStore {

@observable _books = [];

constructor() {
    this.fetchBooks();
  }
  get books() {
    return this._books;
  }

  getBook(id) {
    return this._books.filter((book) => {
      return book.id === Number(id);
    })[0];
  }

@action
  changeBooks(books){
    this._books.replace(books);
  }

@action
  addBook(book){
    this._books.push(book);
  }

//this is asynchronous
  fetchBooks = ()=> {
    fetch("http://localhost:7777/books")
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        this.changeBooks(response);
        // this._books.replace(response);
        console.log("Got books from server");
      })
  }
}

//this shows how cool MobX is ;)
let store = new BookStore();

//global object in the browser, store has my books array
window.store = store;

export default store;