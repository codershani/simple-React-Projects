/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles["items-container"]}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
