import React, {Component} from "react";

class HCJ extends Component{
    render(){
        var lists = [];
        var data = this.props.data;
        for(var i = 0; i < data.length; i++){
            lists.push(<li key={data[i].id}><a href="/content/+data[i].id">{data[i].title}</a></li>);
        }

        return(
            <div>
                <ul>
                    {lists}
                </ul>
            </div>
        );
    }
}

export default HCJ;