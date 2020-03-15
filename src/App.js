import React, {Component} from 'react';
import './App.css';
import Content from "./components/Content"
import HCJ from "./components/HCJ"
import Subject from "./components/Subject";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: {title: 'WEB', sub: "World Wide Web"},
            contents: [
                {id: 1, title: 'HTML', desc: "HTML is blabla~"},
                {id: 2, title: "CSS", desc: "CSS is naninani"},
                {id: 3, title: "JavaScript", desc: "JavaScript is ~~~"}
            ],
            content: {title: "HTML", desc: "HTML is ~"}
        };
    }

    render() {
        return (
            <div className="App">
                <Subject title={this.state.subject.title} sub={this.state.subject.sub}></Subject>
                <HCJ
                    onChangePage={function () {
                        this.setState({mode:'read'})
                    }.bind(this)}
                    data={this.state.contents}>
                </HCJ>
                <Content
                    title={this.state.content.title}
                    desc={this.state.content.desc}>
                </Content>
            </div>
        );
    }
}

export default App;
