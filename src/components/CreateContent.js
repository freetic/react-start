import React, {Component} from "react";

class CreateContent extends Component {
    render() {
        return (
            <div>
                <h1>Create</h1>
                <p>{this.props.desc}</p>
            </div>
        );
    }
}
export default CreateContent;