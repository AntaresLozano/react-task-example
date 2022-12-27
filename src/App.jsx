// import Todo from "./components/Todo"
// import { todos } from './Todos'
import TaskList from "./components/TaskList"
import TaskForm from "./components/TaskForm"



function App() {
  // let title1 ="Todo"

  return (
    <div className="App bg-zinc-900 h-screen">
      <div className="container mx-auto p-10" >
        {/* createtask taskform */}
        <TaskForm />
        <TaskList />
        {/*  tasklisk tasks={tasks} deleteTask={deleteTask}  */}
      </div>
    </div>
  )
}

export default App
