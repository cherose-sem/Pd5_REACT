import React from "react"
import {Link} from "react-router"

export default class Edit extends React.Component {
    render() {
        const id = this.props.params.id;
        const store = this.props.route.bookStore;
        let book = store.changeBook(id);
        return (
            <div>
                <h2> EDIT YOUR BOOK HERE!!! (^.^) </h2>
                <br />
                <br />
                <input id="title" type="text" placeholder={book.title} />
                <br />
                <input id="info" type="text" placeholder={book.info} />
                <br />
                <input id="moreInfo" type="text" placeholder={book.moreInfo} />
                <br />
                <br />
                <button onClick={() => store.newBook(document.getElementById("title"), document.getElementById("info"), document.getElementById("moreInfo"))}>UPDATE</button>
                <Link to="/details">Back</Link>
            </div>
        );
    }
}