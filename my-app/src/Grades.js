import React from "react";

export default class Grades extends React.Component {

    constructor(props) {
        super(props);
        this.state = { filterVal: -2 }
        //this.myChange = this.myChange.bind(this);
    }

    myChange = (evt) => {
        const val = evt.target.value;
        this.setState({ filterVal: val });
    };

    render() {
        let data = this.props.data;
        // map method exists on JS array that takes a callback 
        // and returns a new array with the manipulation on each object in array
        const rows = data.filter((s) => { return s.grade > this.state.filterVal }).map((s) => {
            return (
                <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>{s.name}</td>
                    <td>{s.grade}</td>
                </tr>
            )
        });

        return (
            <div>
                <p>Grades</p>

                Show grades above: <input onChange={this.myChange} />

                <table className="table">
                    <tr><th>Id</th><th>Name</th><th>Grades</th></tr>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
        // this.props.data.length gets data from index.js
    }
}