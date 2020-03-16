import React, {Component} from "react";

class Subject extends Component {
    render() {
        return (
            <header>
                <h1><a href={"/"} onclick={function (e) {
                    console.log(e);
                    e.preventDefault();
                    this.setState({
                        mode: 'welcome'
                    });
                }.bind(this)}>{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;