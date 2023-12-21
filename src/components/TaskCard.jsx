import { ContextTask } from '../context/TaskContext';

import { useContext } from 'react';
const TaskCard = ({task}) => {

    const {deleteTask} = useContext(ContextTask);

    const alerta = () => {
        alert('eliminando... ' + task.id )
    }
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
    <h1 className='text-xl font-bold capitalize'>{task.title}</h1>
    <p className='text-gray-500 text-sm'>{task.descripcion}</p>
    <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={()=> {
        deleteTask(task)
    }}>Eliminar Tarea</button>
    </div>
)
  
}

export default TaskCard