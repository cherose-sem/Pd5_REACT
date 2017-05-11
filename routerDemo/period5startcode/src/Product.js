import React from "react"
import { Link } from "react-router"
//only here import from mobx-react
import { observer } from "mobx-react"

@observer
export default class Product extends React.Component {
  constructor(props) {
    super(props);
    this.props.route.bookStore.fetchBooks();
  }
  render() {
    const books = this.props.route.bookStore.books;
    const bookStore = this.props.route.bookStore;
    return (
      <div>
        <h3>All our great books </h3>
        <ul>
          {books.map((book) => <li key={book.id}>
            {book.title} <Link to={`products/details/${book.id}`}> details </Link>
            <button onClick={() => bookStore.deleteBook(book.id)} > Remove </button></li>)}
        </ul>
      </div>
    )
  }
}