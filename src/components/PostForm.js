import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title:''
        };
    }

    submitHandler = event => {
        event.preventDefault()
    }

    changeInputHangler = event => {
        this.setState(prev => ({...prev, ...{
        [event.target.name]:event.target.value
        }}))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Заголовок поста</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title" 
                        name="title"
                        value = {this.state.title}
                        onChange = {this.changeInputHangler}
                        />
                </div>
                <button className="btn btn-success" type="submit">Создать</button>
            </form>
        );
    }
}

export default PostForm;
