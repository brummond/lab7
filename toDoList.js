import React from 'react';
import toDo from './toDo'

class ToDoList extends React.Component{
  constructor(props){
    super(props);
    this.state={
        counter: 0,
        toDos: []
    };
  //binding is necessary for 'this' to work in the callback
  this.addToDoItem = this.addToDoItem.bind(this);
  }

addToDoItem(){
  var newItem={
    num: this.state.counter +1,
    toDoItem: this.textInput.value
  }

  this.state.toDos.push(newItem);

  this.setState({
    toDos: this.state.toDos,
    counter: this.state.counter +1
  });

  this.textInput.value = "";
}

render(){
  return (
      <div>
      <div className="toDoListMain">
      <div className="header">
        <h1>To Do List</h1>
      </div>
      <ul> {this.state.toDos.map(item => <li key={item.key}> <toDo name={item.name} onToDoAdd={this.addToDoItem}/></li>)}
      </ul>
      <h2>Total: {this.state.totalVotes}</h2>

       <label> what do you have to do? <input type="text" name="name" /></label>
        <button onClick={this.addToDoItem}>
        add
        </button>
      </div>
    </div>
    );
  }
}

export default ToDoList;