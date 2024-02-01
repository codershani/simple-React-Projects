import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
      id: 1,
      name: "Buy Milk",
      dueDate: "01/02/2024",
    },
    {
      id: 2,
      name: "Goto College",
      dueDate: "01/02/2024",
    },
    {
      id: 3,
      name: "Evening Sports",
      dueDate: "01/02/2024",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
