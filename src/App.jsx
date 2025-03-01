import { TaskForm } from "./components/TaskForm"
import { useTasks } from "./hooks/useTasks"
import {TaskList} from "./components/TaskList"

export const App  = () => {

const {handleAddTask,handleChange,taskText,lisTask, handleSubmit, handleDeleteTask, handleToogleComplete} = useTasks()

  return (
  <>
 <TaskForm handleAddTask= {handleAddTask} 
 handleChange={handleChange}
 taskText ={taskText}
 handleSubmit = {handleSubmit}

  />
 <TaskList lisTask={lisTask} 
  handleDeleteTask={handleDeleteTask}
  handleToogleComplete={handleToogleComplete}
 />
  </>
)
}




