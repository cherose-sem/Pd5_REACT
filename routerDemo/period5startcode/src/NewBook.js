import React from "react"

export default class NewBook extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      book: { title: "", info: "", moreInfo: "" }
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const target = event.target
    var book = {}
    book.title = target.title.value
    book.info = target.info.value
    book.moreInfo = target.moreInfo.value
    this.props.route.bookStore.addBook(book)

  }

  render() {
    return (
      <div>
      <h2>ADD YOUR BOOK HERE (^.^)</h2>
        <form onSubmit={this.handleSubmit} >
          <input id="title" type="text" placeholder="Title" />
          <br />
          <input id="info" type="text" placeholder="Info"/>
          <br />
          <input id="moreInfo" type="text" placeholder="MoreInfo" />
          <br />
          <button >Submit</button>
        </form>
      </div>
    );
  }
}