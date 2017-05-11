import React from "react";

export default class Musicians extends React.Component {

    constructor(props) {
        super(props);
        this.state = { filterVal: -2 }
    }

    myChange = (evt) => {
        const val = evt.target.value;
        this.setState({ filterVal: val });
    };

    render() {
        let data = this.props.data;

        const rows = data.filter((m) => { return m.stars > this.state.filterVal }).map((m) => {
            return (
                <tr key={m.id}>
                    <td>{m.id}</td>
                    <td>{m.name}</td>
                    <td>{m.stars}</td>
                </tr>
            )
        });
        return (
            <div>
                <p>Musicians</p>

                Show stars above: <input onChange={this.myChange} />

                <table className="table">
                    <tr><th>Id</th><th>Name</th><th>Stars</th></tr>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}