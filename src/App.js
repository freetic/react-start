import React, {Component} from 'react';
import './App.css';
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import HCJ from "./components/HCJ";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: 'read',
            selected_content_id: 2,
            subject: {title: 'WEB', sub: "World Wide Web"},
            welcome: {title: 'WelCome!', desc: 'Hello, React!!!!!'},
            contents: [
                {id: 1, title: 'HTML', desc: "HTML is blabla~"},
                {id: 2, title: "CSS", desc: "CSS is naninani"},
                {id: 3, title: "JavaScript", desc: "JavaScript is ~~~"}
            ],
        };
    }

    render() {
        var _title, _desc, _article = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'read') {
            var i = 0;
            while (i < this.state.contents.length) {
                var data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i++;
            }
        }

        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({mode: "welcome"});
                    }.bind(this)}
                ></Subject>
                <HCJ
                    onChangePage={function (id) {
                        this.setState({mode: 'read',
                            selected_content_id:Number(id)
                        });
                    }.bind(this)}
                    data={this.state.contents}
                >
                </HCJ>
                <Control
                    onChangeMode={function(_mode){
                        this.setState({mode:_mode});
                    }.bind(this)}
                ></Control>
                {_article}
            </div>
        );
    }
}

export default App;
