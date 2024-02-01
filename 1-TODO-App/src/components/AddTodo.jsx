function AddTodo() {
  return (
    <div className="container text-cetner">
      <div className="row ez-row">
        <div className="col-6">
          <input type="text" placeholder="Enter TODO here" />
        </div>
        <div className="col-4">
          <input type="date" name="" id="" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success ez-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
