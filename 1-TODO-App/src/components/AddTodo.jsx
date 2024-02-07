/* eslint-disable react/prop-types */
import { useRef } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const todoIdElement = useRef(1);
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    todoIdElement.current += 1;
    const todoId = todoIdElement.current;
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoId, todoName, dueDate);
  };

  return (
    <div className="container text-cetner">
      <form className="row ez-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            className={styles.inputField}
            placeholder="Enter TODO here"
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={dueDateElement}
            className={styles.inputField}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success ez-button">
            <MdOutlineAddBox />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
