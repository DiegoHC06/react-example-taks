import { useContext } from "react";
import {TaskContext} from "../context/TaskContext";

function TaskCard({ task }) {
  const {deleteTask} = useContext(TaskContext);

  return ( 
      <div className=" bg-gray-600 text-white p-4 rounded-md">
        <h1 className=" text-x1 font-bold capitalize">{task.title}</h1>
        <p className=" text-gray-800 text-sm"> {task.description} </p>
        <button
          onClick={() => {
            deleteTask(task.id);
            
          }}
          className=" bg-red-600 rounded-md px-2 py-1 mt-4 hover:bg-red-300"
          >
          Eliminar Tarea
        </button>
      </div> 
  );
}

export default TaskCard;
