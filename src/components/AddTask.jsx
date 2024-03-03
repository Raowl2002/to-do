import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddTask({ onClickAdd }) {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  function takeTask(e) {
    let newTask = e.target.value;
    setTask(newTask);
  }
  function takeDate(e) {
    let newdate = e.target.value;
    setDate(newdate);
  }

  const Add = () => {
    onClickAdd(task, date);
    setTask("");
    setDate("");
  };

  return (
    <div className="row">
      <div className="col-5">
        <input
          type="text"
          placeholder="Add Task"
          id="add"
          onChange={takeTask}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={takeDate} />
      </div>
      <div className="col-3">
        <button className="btn btn-success button" onClick={Add}>
          <IoIosAddCircle />
        </button>
      </div>
    </div>
  );
}
export default AddTask;
