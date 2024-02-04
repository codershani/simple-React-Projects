/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import styles from "./AddTodo.module.css";
function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [todoId, setTodoId] = useState(1);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    setTodoId(todoId + 1);
    onNewItem(todoId, todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-cetner">
      <div className="row ez-row">
        <div className="col-6">
          <input
            type="text"
            className={styles.inputField}
            placeholder="Enter TODO here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className={styles.inputField}
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success ez-button"
            onClick={handleAddButtonClicked}
          >
            <MdOutlineAddBox />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
