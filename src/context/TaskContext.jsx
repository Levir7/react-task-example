import {createContext, useState, useEffect} from 'react'
import { tasks as data } from "../assets/Task";


export const ContextTask = createContext()

export const TaskContextProvider = (props) => {
    
  const [tasks, setTasks] = useState([]);

  
  useEffect(() => {
    setTasks(data);
  }, []);

  const createTask = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.descripcion,
      },
    ]);
    console.log(tasks);
  };

  const deleteTask = (task) => {
    console.log(tasks);
    setTasks(tasks.filter((n) => n.id !== task.id));
    console.log(tasks);
  }; 
    return (
        <ContextTask.Provider value={{tasks, createTask, deleteTask}}>
            {props.children}
        </ContextTask.Provider>
  )
}
