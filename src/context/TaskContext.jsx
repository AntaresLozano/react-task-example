import { createContext, useEffect, useState } from 'react'
import { tasks as data } from '../data/tasks';

export const TaskContext = createContext()

export function TaskContentProvider(props) {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(data)
  }, [])

  const createTask = (task) => {
    setTasks([...tasks, {
      title: task.title,
      id: tasks.length,
      description: task.description
    }])
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }


  return (
    <TaskContext.Provider value={
      {
        createTask,
        deleteTask,
        tasks
      }
    }>
      {props.children}
    </TaskContext.Provider>
  )
}

export default TaskContext