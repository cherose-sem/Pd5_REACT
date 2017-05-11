import React from "react"
import { observer } from "mobx-react"

@observer
export default class NewBook extends React.Component {
  render() {
    const bookStore = this.props.route.bookStore;
    return (
      <div>
        <h2> YOU CAN NOW ADD YOUR OWN BOOK!!! (^.^) </h2>
        <br/>
        <br/>
        <input id="title" type="text" placeholder="Title" />
        <br/>
        <input id="info" type="text" placeholder="Info" />
        <br/>
        <input id="moreInfo" type="text" placeholder="More info" />
        <br/>
        <br/>
        <button onClick={() => bookStore.newBook(document.getElementById("title"), document.getElementById("info"), document.getElementById("moreInfo"))}>ADD</button>
        
      </div>
    );
  }
}