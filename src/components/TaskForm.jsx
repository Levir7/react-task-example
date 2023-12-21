import { useState, useContext } from "react";
import { ContextTask } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { createTask} = useContext(ContextTask)

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if([title, descripcion].includes('')) {
            return console.log('errror')
        }
        createTask({
            title,
            descripcion});
            //AL DAR CLICK RESTAURAMOS EL ESTADO A VACIO
            setTitle('')
            setDescripcion('')

    }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-2">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea placeholder="Escribe la descripcion de la tarea"
            onChange={e => setDescripcion(e.target.value)}
            className="bg-slate-300 p-3 w-full mb-2"
            value={ descripcion }
        ></textarea>
        <button
        className="bg-indigo-500 py-1 px-3 text-white"
        >Enviar</button>
      </form>
    </div>
  );
};

export default TaskForm;
