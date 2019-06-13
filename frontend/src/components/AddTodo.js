import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => this.setState({
        [e.target.name]: e.target.value
    });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{  }}>
                    <input 
                        type="text"
                        name="title"
                        style={{ }}
                        placeholder="Add Todo..."
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    <input
                        type="submit"
                        value="Submit"
                        className="btn"
                        style={{}}

                    />
                </form>
            </div>
        )
    }
}

export default AddTodo
