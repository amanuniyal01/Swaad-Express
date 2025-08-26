import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>{this.props.location}</h1>
            </div>
        );
    }
}

export default User;
