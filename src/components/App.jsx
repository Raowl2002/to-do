import Head from "./Head";
import AddTask from "./AddTask";
import Tasks from "./Tasks";
import "./App.css";
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);

  const handleClickAdd = (task, date) => {
    let newItem = { addTask: task, date: date };
    setList([...list, newItem]);
  };
  const handleDelete = (index) => {
    setList(list.filter((item) => item != list[index]));
  };

  return (
    <center>
      <Head />

      <div className="container">
        <AddTask onClickAdd={handleClickAdd} />
        <Tasks tasks={list} onDelete={handleDelete} />
      </div>
    </center>
  );
}
export default App;
