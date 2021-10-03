import React, { Component } from 'react'
import styles from "./TodoItem.module.css"

export default class TodoItem extends Component {

    render() {

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }

        const {id, title, completed} = this.props.todo

        return (
            <li key={id} className={styles.item}>
                <input
                key={id+1000}
                    className={styles.checkbox}
                    type="checkbox" 
                    checked={completed}
                    onChange={() => 
                    {
                        this.props.handleChangeProps(id) 
                    }
                    } />
                    <span style={completed ? completedStyle : null}>
                    {title}
                    </span>
                    <button onClick={() => 
                        {
                            this.props.handleDeleteProps(id)
                        }
                        }>Delete</button>
            </li>
        )
    }
}
