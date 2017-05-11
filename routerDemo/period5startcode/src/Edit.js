import React from "react"

export default class Edit extends React.Component {
    render() {
        const id = this.props.params.id;
        const store = this.props.route.bookStore;
        let book = store.getBook(id);
        return (
                
        );
    }
}