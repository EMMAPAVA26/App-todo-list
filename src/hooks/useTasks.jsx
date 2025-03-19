import { useState } from "react";

export const useTasks = () => {
  //Este estado almacena temporalmente el texto que el usuario está escribiendo en el input antes de agregar la tarea a la lista.
  const [taskText, setTaskText] = useState({
    id: "",
    tarea: "",
    completed: false,
  });
  // Este estado almacena todas las tareas agregadas en forma de array de objetos.
  const [lisTask, setLisTask] = useState([]);

  //Estado para almacenar la tarea en edición
  const [editingTask, setEditingTask] = useState(false);

  //Agregar la tarea en la lista
  const handleAddTask = () => {
    if (taskText.tarea.trim() === "") return;
    const newTask = { ...taskText, id: Date.now(), completed: false };
    setLisTask([...lisTask, newTask]);
    setTaskText({ id: "", tarea: "" });
  };

  //Manejar el cambio de entrada
  const handleChange = (event) => {
    setTaskText({ ...taskText, tarea: event.target.value });
  };

  //Seleccionar tarea para editar

  const handleEditingTask = (id) => {
    const taskToEdit = lisTask.find((task) => task.id === id);
    if (taskToEdit) {
      setTaskText(taskToEdit);
      setEditingTask(true);
    }
  };

  // Guardar la tarea editada en la lista
  const handleSaveEditingTask = () => {
    if (taskText.tarea.trim() === "") return;

    setLisTask(
      lisTask.map((task) =>
        task.id === taskText.id
          ? { ...task, tarea: taskText.tarea.trim() }
          : task
      )
    );
    setEditingTask(false);
    setTaskText({ id: "", tarea: "", completed: false });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTask();
  };

  // Función para eliminar tarea
  const handleDeleteTask = (id) => {
    setLisTask(lisTask.filter((task) => task.id !== id));
   
  };

  //Función para tachar una tarea
  const handleToogleComplete = (id) => {
    setLisTask(
      lisTask.map((task) => {
        const updatedTask = task.id === id ? { ...task, completed: !task.completed } : task;
        return updatedTask;
    
      })
    );
  };


 

  return {
    handleAddTask,
    handleChange,
    taskText,
    lisTask,
    editingTask,
    handleSubmit,
    handleDeleteTask,
    handleToogleComplete,
    handleEditingTask,
    handleSaveEditingTask,
  };
};
