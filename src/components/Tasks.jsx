import CreatedTask from "./createdTask";
function Tasks({ tasks, onDelete }) {
  return (
    <>
      {tasks.map((item, index) => {
        return (
          <>
            <CreatedTask
              id={index}
              addTask={item.addTask}
              date={item.date}
              onDelete={onDelete}
            />
          </>
        );
      })}
    </>
  );
}
export default Tasks;
