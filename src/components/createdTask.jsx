import { AiOutlineDelete } from "react-icons/ai";

function CreatedTask({ addTask, date, id, onDelete }) {
  return (
    <>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-5">{addTask}</div>
        <div className="col-4">{date}</div>
        <div className="col-3">
          <button
            className="btn btn-danger button"
            id={id}
            onClick={(e) => onDelete(e.target.id)}
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </>
  );
}
export default CreatedTask;
