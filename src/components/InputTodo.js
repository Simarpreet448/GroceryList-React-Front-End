import React, { Component } from 'react'
import { addTodo } from '../store/apiCalls';

export default class InputTodo extends Component {
    state = {
        title : "" 
    }

    onChange = e =>
    {
        this.setState({
            title : e.target.value
        })
    }

    handleSubmit = e =>
    {
        e.preventDefault()
        if(this.state.title.trim())
        {
            var title = this.state.title
            fetch(`https://localhost:5001/todo`, {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({title:title})
            }).then(response =>
                {
                    if(response.ok)
                    {
                        this.props.handleAddProps() 
                    }
                })            
        this.setState(
            {title:""}
        )
        }
        else
        {
            alert("please enter something")
        }
    }

    render() {
        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input className="input-text"
                    name="title"
                    onChange={this.onChange} 
                    type="text" 
                    placeholder="Add to Todo ... " 
                    value={this.state.title}></input>
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}
