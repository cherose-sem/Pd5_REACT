import React from "react"
import { observer } from "mobx-react"

@observer
export default class NewBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: { title: "", info: "", moreInfo: "" }
    };
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
  }

  handleInput = (event) => {
    const target = event.target;
    const prop = target.id;
    var value = target.value;
    var book = this.state.book;
    book[prop] = value;
    this.setState({
      book: book
    });
  }

  render() {
    return (
      <div>
      <h2>ADD YOUR BOOK HERE (^.^)</h2>
        <form onSubmit={this.handleSubmit} >
          <input id="title" type="text" value={this.state.book.title}
            placeholder="Title" onChange={this.handleInput} />
          <br />
          <input id="info" type="text" value={this.state.book.info}
            placeholder="Info" onChange={this.handleInput} />
          <br />
          <input id="moreInfo" type="text" value={this.state.book.moreInfo}
            placeholder="MoreInfo" onChange={this.handleInput} />
          <br />
          <button >Submit</button>
        </form>
      </div>
    );
  }
}