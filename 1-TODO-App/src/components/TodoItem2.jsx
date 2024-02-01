function TodoItem2() {
  let todoName = "Go to College";
  let todoDate = "01/02/24";

  return (
    <div className="container">
      <div className="row ez-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger ez-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem2;