
/* ########################################################################

<App /> will hold all the data needed for this project. It will also be 
the container for your Todo Components.
  All of your application data will be stored here on <App />.
  All of your handler functions should live here on <App />.

###########################################################################
*/
import React, { Component } from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoFrom from "./components/TodoComponents/TodoForm";



// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//       </div>
//     );
//   }
// }

// export default App;

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Organize Garage",
          id: 1528817077286,
          completed: false
        },
        {
          task: "Bake Cookies",
          id: 1528817084358,
          completed: false
        },
        {
          task: "Write Todo App",
          id: 1528817094358,
          completed: false
        }
      ],
      todo: ""
    };
  }

  // create new Todo list and pass as props 'createTodo'
  // in TodoFrom component
  createNewTodo = (text /*string*/) => {
    // text.preventDefault();
    const newTodo = {
      task: text,
      id: Date.now(),
      completed: false
    };


    this.setState(prevState => {
      console.log("App.js prevState context: ", this.state.todos);
      const oldTodos = this.state.todos.slice();
      console.log("App.js prevState after using slice: ", oldTodos);
      oldTodos.push(newTodo);
      console.log("App.js prevState after using slice: ", oldTodos);
      return { todos: oldTodos };

    });
  };


  // look through todoList and find the todo I clicked on
  // toggle the completed statu for that todo
  // toggleTodoComplete = todoId => {
  //   this.setState({
  //   //   todosList: this.state.todoList.map((todo, idx) => {
  //   //     if (todoId !== idx){
  //   //       return todo;
  //   //     } else {
  //   //       // updated complete status 
  //   //       // return{
  //   //         // ...todo,
  //   //         todo.completed = !todo.completed;
  //   //         return todosList;
  //   //     }
  //   //   }) // end arrow function
  //   // }); // end this setState

  //     let prevTodos = this.state.todos.slice();
  //     prevTodos = prevState.map(finishedTodo => {
  //         if (finishedTodo.id === todoId) {
  //           finishedTodo.completed = !finishedTodo.completed;
  //           return prevTodos;
  //         } else {
  //           return finishedTodo;
  //         }
  //       }); // end arrow function
  //     // console.log('toggleTodoComplete prevTodos content: ', prevTodos);
  //     // console.log('toggleTodoComplete/ finishedTodo context :', finishedTodo);
  //     // this.setState({ prevTodos });
  //   // }); // end of setState
  //   // console.log('toggleTodoComplete prevTodos content: ', prevTodos);
  // }; // end toggleTodoComplete


  
  toggleTodoComplete = todoId => {
    let prevTodos = this.state.todos.slice();
    prevTodos = prevTodos.map(finishedTodo => {
      if (finishedTodo.id === todoId) {
        finishedTodo.completed = !finishedTodo.completed;
        return prevTodos;
      } else {
        return finishedTodo;
      }
      // this.setState({ prevTodos });
    });
  };

  //  pass 'todos' as props to TodoList component
  // pass 'createTodo' as props to TodoFrom component as method
  render() {
    return (
      <div>
        <h2>Welcome to Todo App</h2>
        <TodoList
          handleToggleComplete={this.toggleTodoComplete}
          todos={this.state.todos}
        />
        <TodoFrom
          value={this.state.finishedTodo}
          createTodo={this.createNewTodo}
        />
      </div>
    );
  }
}

export default App;