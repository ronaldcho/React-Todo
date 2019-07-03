/* ########################################################################

<TodoForm> will hold your input field and your Add Todo and 
  Clear Completed buttons.
Your input field should take in user input, and allow 
a user to press Enter or click on the Submit Button to 
add a todo to your list.
Once a todo is submitted, the Todo List should re-render 
and show the added todo.

###########################################################################
*/
import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      inputText: ""
    };
  }

  // submitHandler createTodo as props createNewTodo method
  submitHandler = event => {
    event.preventDefault();
    this.props.createTodo(this.state.inputText);
    this.setState({ inputText: " " });
  };

  // onChangeHandler the input text string
  changeHandler = event => {
    // event.target.value Do not mutate state
    // directly Use setState(). (react/no-direct-mutation-state)
    // this.state.inputText = event.target.value
    this.setState({ inputText: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.changeHandler}
        />
        <button type="submit">Add Todo</button>
        <button>Clear Todos</button>
      </form>
    );
  }
}
export default TodoForm;

// function TodoForm(props) {
//   return (
//     <from>
//       <input type="text" />
//       <button type="submit">Add Todo</button>
//       <button>Clear Todos</button>
//     </from>
//   );
// }
