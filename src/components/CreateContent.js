import React, {Component} from "react";

class CreateContent extends Component {
    render() {
        return (
            <div>
                <h1>Create</h1>
                <form action="/create_process" method={"post"}
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(e.target.title.value, e.target.desc.value);
                    }.bind(this)}
                >
                    <p><input type="text" name={"title"} placeholder={"title"}/></p>
                    <p>
                        <textarea name="desc" id="" cols="30" rows="10" placeholder={"description"}></textarea>
                    </p>
                    <p><input type="submit" value={"전송"}/></p>
                </form>
            </div>
        );
    }
}
export default CreateContent;