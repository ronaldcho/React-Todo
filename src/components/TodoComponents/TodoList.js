// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

/* ########################################################################

<TodoList /> receives your Todos array and iterates over the list generating 
a new <Todo /> for each element in the array.

###########################################################################
*/

import React from "react";
// to use Todo Component
import Todo from "./Todo";

function TodoList(props) {
  // props = { todos: [...] }
  // pass todos as props from App.js <TodoList> component
  console.log(`TodoList `, props);
  return (
    <ul>
      {props.todos.map(todoObj => {
        // pass 'taskname' as props to Todo component
        return (
          <Todo
            handleToggleComplete={props.handleToggleComplete}
            key={todoObj.id}
            taskname={todoObj.task}
          />
        );
        // return <li key={todo.id}>{todo.task}</li>;
      })}
    </ul>
  );
}

export default TodoList;

// class TodoList extends Component {

//   render(){
//     return(
//       <ul>
//         {this.state.todos.map(newtodo => {
//           return <li key={newtodo.id}>{newtodo.task}</li>
//         })}
//       </ul>
//     )
//   }
// }

// export default TodoList;
