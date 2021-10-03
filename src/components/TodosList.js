import React, { Component } from 'react'
import TodoItem from './TodoItem'

export default class TodosList extends Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo => 
                        (<TodoItem 
                            sendMessage={this.props.sendMessage}
                            key={todo.id} 
                            todo={todo} 
                            handleDeleteProps={this.props.handleDeleteProps}
                            handleChangeProps={this.props.handleChangeProps}></TodoItem>))
                }
            </ul>
        )
    }
}
