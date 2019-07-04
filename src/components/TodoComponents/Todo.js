/* ########################################################################

<Todo /> is a component that takes in the todo data and 
displays the task to the screen.

###########################################################################
*/
import React from "react";

const Todo = props => {
    // props from App.js 
  console.log(`Todo.js this is Todo `, props);
  return (
    <div
      style={props.completed ? { textDecoration: "line-through" } : null}
      onClick={event => {
        props.handleToggleComplete(props.id);
      }}
    >
      <li> {props.taskname} </li>
    </div>
    // <li key={props.id}>{props.taskname}</li>
  );
};
export default Todo;