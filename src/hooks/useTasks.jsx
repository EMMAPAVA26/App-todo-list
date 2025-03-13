import { useState } from "react"


export const useTasks = () => {
const [taskText, setTaskText] = useState({id:"", tarea:"", completed: false }) //Este estado almacena temporalmente el texto que el usuario está escribiendo en el input antes de agregar la tarea a la lista.
const [lisTask, setLisTask] = useState([]) // Este estado almacena todas las tareas agregadas en forma de array de objetos.

//Estado para almacenar la tarea en edición
const[editingTask, setEditingTask] = useState(false)

//Agregar la tarea en la lista 
const handleAddTask = () => {
if(taskText.tarea.trim() === "") return;
const newTask = {...taskText,id: Date.now(), completed:false}; 
   setLisTask([...lisTask,newTask]);
   setTaskText({id:"", tarea: ""})
}

//Manejar el cambio de entrada
const handleChange = ( event) => { 
setTaskText({...taskText, tarea: event.target.value})
}

//Seleccionar tarea para editar  

const handleEditingTask = (id) =>{
const taskToEdit = lisTask.find((task) => task.id === id);
if(taskToEdit !== false ){
  setTaskText(taskToEdit); //Asigna la tarea en el input 
  setEditingTask(taskToEdit); //guarda la tarea en edición


}
}

// Guardar la tarea editada en la lista 

const handleSaveEditingTask = () =>{
  setEditingTask(true)
  if(editingTask  !== false){
    setLisTask(lisTask.map((task) =>
      task.id === editingTask.id ? {...task, tarea:taskText.tarea} : task
    ));
    setEditingTask(false); //Salir del modo edición
    setTaskText({id:"", tarea:" ", completed: false}); //limipa el input 
  }
}
 



const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask()
}

// Función para eliminar tarea 
const handleDeleteTask = (id) => {
setLisTask(lisTask.filter((task) => task.id !==id))
}


console.log(lisTask)
console.log(taskText)

//Función para tachar una tarea 
const handleToogleComplete  = (id) => {
setLisTask(lisTask.map((task) => {
 return task.id === id ? {...task, completed: !task.completed}: task 
}))

}
  return {
    handleAddTask,
    handleChange,
    taskText,
    lisTask,
    handleSubmit,
    handleDeleteTask,
    handleToogleComplete,
    handleEditingTask,
    handleSaveEditingTask,
  }
}






