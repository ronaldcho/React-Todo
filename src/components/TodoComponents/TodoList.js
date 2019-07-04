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
  console.log(`TodoList passed from App.js props: `, props);
  return (
      <div>
        <h1>Todo Lists</h1>
        <ul>
            {props.todos.map(todoObj => {
                // pass 'taskname' as props to Todo component
                // pass 'handleToggleComplete' as props to Todo 
                console.log(`todoObj.id is props todo id : ${todoObj.id}`);
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
      </div>

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
