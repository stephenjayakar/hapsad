import React, { Component } from 'react';

class NewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({value});
    }
    handleSubmit = (event) => {
        console.log(this.state.value);
    }

    render() {
        return (
            <div>
                <textarea
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Post</button>
            </div>
        );
    }
}

export default NewPost;