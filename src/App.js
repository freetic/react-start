import React, {Component} from 'react';
import './App.css';
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
import HCJ from "./components/HCJ";
import Subject from "./components/Subject";
import Control from "./components/Control";

class App extends Component {
    constructor(props) {
        super(props);
        this.max_content_id = 3;
        this.state = {
            mode: 'create',
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
    getReadContent(){
        var i = 0;
        while (i < this.state.contents.length) {
            var data = this.state.contents[i];
            if (data.id === this.state.selected_content_id) {
                return data;
                break;
            }
            i++;
        }
    }

    getContent() {
        var _title, _desc, _article = null;
        if (this.state.mode === 'welcome') {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            _article = <ReadContent title={_title} desc={_desc}></ReadContent>
        } else if (this.state.mode === 'read') {
            var _content = this.getReadContent();
            _article = <ReadContent title={_content._title} desc={_content._desc}></ReadContent>
        } else if (this.state.mode === 'create') {
            _article = <CreateContent
                onSubmit={function (_title, _desc) {
                    this.max_content_id += 1;
                    // push는 기존 값을 변경시키므로 안됨.
                    // var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc});
                    // this.setState({
                    //     contents:_contents
                    // });
                    // 아예 다른값으로 직접복사? 해서 그 값을 바꾸면 가능.
                    var newContents = Array.from(this.state.contents);
                    newContents.push({id: this.max_content_id, title: _title, desc: _desc});
                    this.setState({
                        contents: newContents
                    });
                    // 배열은 이 방식으로 가능. but 객체의 경우 Object.assign({기존 객체}, {붙일 객체}); 으로 구현 가능하다. 다른 방법들도 있으니 찾아보자.
                    // Immutable을 이용할 수 도 있다.
                }.bind(this)}></CreateContent>
        } else if (this.state.mode === 'update') {
            _article = <UpdateContent
                onSubmit={function (_title, _desc) {
                    this.max_content_id += 1;
                    // push는 기존 값을 변경시키므로 안됨.
                    // var _contents = this.state.contents.concat({id:this.max_content_id, title:_title, desc:_desc});
                    // this.setState({
                    //     contents:_contents
                    // });
                    // 아예 다른값으로 직접복사? 해서 그 값을 바꾸면 가능.
                    var newContents = Array.from(this.state.contents);
                    newContents.push({id: this.max_content_id, title: _title, desc: _desc});
                    this.setState({
                        contents: newContents
                    });
                    // 배열은 이 방식으로 가능. but 객체의 경우 Object.assign({기존 객체}, {붙일 객체}); 으로 구현 가능하다. 다른 방법들도 있으니 찾아보자.
                    // Immutable을 이용할 수 도 있다.
                }.bind(this)}></UpdateContent>
        }
        return _article;
    }

    render() {
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
                        this.setState({
                            mode: 'read',
                            selected_content_id: Number(id)
                        });
                    }.bind(this)}
                    data={this.state.contents}
                >
                </HCJ>
                <Control
                    onChangeMode={function (_mode) {
                        this.setState({mode: _mode});
                    }.bind(this)}
                >
                </Control>
                {this.getContent()}
            </div>
        );
    }
}

export default App;
