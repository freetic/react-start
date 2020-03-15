import React, {Component} from "react";

class HCJ extends Component {
    render() {
        var lists = [];
        var data = this.props.data;
        for (var i = 0; i < data.length; i++) {
            lists.push(
                <li key={data[i].id}>
                    <a
                        href="/content/+data[i].id"
                        onClick={function(e){
                            e.preventDefault();
                            this.props.onChangePage();
                        }.bind(this)}
                    >{data[i].title}</a>
                </li>);
        }

        return (
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        );
    }
}

export default HCJ;