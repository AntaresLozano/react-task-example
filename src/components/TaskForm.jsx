import { useContext, useState } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskForm() {

    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')

    const { createTask } = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        createTask({
            title, description
        })
        setTitle('')
        setdescription('')
    }

    return (
        <div className='max-w-md mx-auto' >
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 ">
                <h1 className='text-2xl font-bold text-white mb-3' >Crea tu tarea</h1>
                <input type="text" placeholder="Escribe tu tarea"
                    className='bg-slate-300 p-3 w-full mb-2'
                    autoFocus value={title} onChange={(e) => setTitle(e.target.value)}
                />
                <textarea cols="20" rows="2" placeholder='Escribe una descripción'
                    value={description} onChange={(e) => setdescription(e.target.value)}
                className="bg-slate-300 p-3 w-full mb-2'"  ></textarea>

                <button className="bg-indigo-500 px-3 py-1 text-white"  >Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm