import React, { Component } from 'react';

import TodotItem from './TodoItem';

class Todos extends Component {
  
  render() {
    let todosItems;
    if (this.props.todos){
       todosItems = this.props.todos.map(todos=>{
       //console.log(project)
       return (
         <TodosItem key={todos.title} todo={todo} />
       );
    });
  }
 
  // console.log(this.props);
  return (
    <div className="Todos">
      <h3>Todos List</h3>
       {todosItems}
    </div>  
    );
  }
}

export default Todos;