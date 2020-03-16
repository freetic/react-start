import React, {Component} from 'react';
import './App.css';
import Content from "./components/Content"
import HCJ from "./components/HCJ"
import Subject from "./components/Subject";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'welcome',
            welcome: {title: 'WelCome', desc: "World Wide Web!"},
            subject: {title: 'WEB', sub: "World Wide Web"},
            contents: [
                {id: 1, title: 'HTML', desc: "HTML is blabla~"},
                {id: 2, title: "CSS", desc: "CSS is naninani"},
                {id: 3, title: "JavaScript", desc: "JavaScript is ~~~"}
            ],
        };
    }

    render() {
        var _title, _desc = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === 'read') {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        return (
            <div className="App">
                <Subject title={this.state.subject.title}
                         sub={this.state.subject.sub}
                         onChangePage={function(){
                             this.setState({mode:"welcome"});
                         }.bind(this)}
                ></Subject>
                <HCJ data={this.state.contents}
                     onChangePage={function(){
                         alert("hcj");
                         this.setState({mode:"read"});
                     }.bind(this)}

                >
                </HCJ>
                <Content
                    title={_title}
                    desc={_desc}>
                </Content>
            </div>
        );
    }
}

export default App;
