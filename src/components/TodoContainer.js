
import Header from './Header';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from 'react-redux';
import React, { useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr'

class TodoContainer extends React.Component
{
  
  constructor(props)
  {
    super(props)
    this.state =
    {
      error:null,
      isLoaded:false,
      todos:[],
      connection:null,
    }
  }
  
  async componentDidMount()
  {
    const url = "https://localhost:5001/todo/getlist";
    await fetch(url,
      {
        method:"GET",
        mode:'cors',
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => response.json())
      .then(list => 
        {
          this.setState({todos:list})
        })

        const connection = new HubConnectionBuilder()
          .withUrl('https://localhost:5001/hubs/chat')
          .withAutomaticReconnect()
          .build();

          this.setState({connection}, () =>
          {
        if(this.state.connection)
          {
            this.state.connection
            .start()
            .then(() => console.log('Connection started!'))
            .catch(err => console.log('Error while establishing connection :('));

            this.state.connection.on('ReceiveMessage',(message) =>
            {
              const list = message;
              this.setState({todos:list});
              console.log(this.state.todos);
            })
          }
          })
  }

  handleAdd = () => 
  {
    const url = "https://localhost:5001/todo/getlist";
    fetch(url,
      {
        method:"GET",
        mode:'cors',
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => response.json())
      .then(list => 
        {
          this.setState({todos:list})
        })
  }


   handleChange = (id) => 
   {

    const url = "https://localhost:5001/todo/"

    const response = fetch(
      `${url}${id}`, {
          method: 'PUT',
          mode: 'cors',
          credentials: 'include',
      })

      this.setState(
        (prevState) => {
          return {
            todos: prevState.todos.map(todo => {
              if (todo.id === id) {      
                return {
              ...todo,
              completed: !todo.completed,

            }
          }
          return todo
        }),
      }
      })
    }

    handleDelete = (id) =>
    { 
      // this is a bit lenthy. the code can be simplyfied 
      //by using spread operator ...
      // for example at line 56

      // todos : ...this.state.todos.filter(todo => 
        //{
        //return todo.id !== id
        //})

      const url = "https://localhost:5001/todo/";

       let todos = []
        todos = this.state.todos.filter(todo => 
        {
          return todo.id !== id
        })

        fetch(
              `${url}${id}`, {
                  method: 'DELETE',
                  mode: 'cors',
                  credentials: 'include',
              }
          )
        
        this.setState(
        {
          todos: todos
        }
      )
    }

    render() {
        return (
          <div className="container">
            <div className="inner">
              <Header></Header>
              <InputTodo handleAddProps={this.handleAdd}></InputTodo> 
              <TodosList todos={this.state.todos} handleDeleteProps={this.handleDelete}  handleChangeProps={this.handleChange}></TodosList>          
            </div>
          </div>
        );
    }
}
export default TodoContainer