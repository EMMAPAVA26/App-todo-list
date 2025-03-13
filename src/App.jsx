import { TaskForm } from "./components/TaskForm"
import { useTasks } from "./hooks/useTasks"
import {TaskList} from "./components/TaskList"

export const App  = () => {

const {handleAddTask,handleChange,taskText,lisTask, handleSubmit, handleDeleteTask, handleToogleComplete,handleEditingTask, handleSaveEditingTask, editingTask,setEditingTask,} = useTasks()

  return (
  <>
 <TaskForm handleAddTask= {handleAddTask} 
 handleChange={handleChange}
 taskText ={taskText}
 handleSubmit = {handleSubmit}
 handleEditingTask = {handleEditingTask}
 editingTask={editingTask}
 setEditingTask={setEditingTask}
 handleSaveEditingTask={handleSaveEditingTask}


  />
 <TaskList lisTask={lisTask} 
  handleDeleteTask={handleDeleteTask}
  handleToogleComplete={handleToogleComplete}
  handleSaveEditingTask={handleSaveEditingTask}
  handleEditingTask={handleEditingTask}
 />
  </>
)
}




