import { TextField, Button } from "@mui/material";

export const TaskForm = ({ handleAddTask, handleChange, taskText,editingTask, handleSaveEditingTask}) => {
 console.log(editingTask,'Este es un editingTask') 
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={taskText.tarea || ""}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={editingTask ? handleSaveEditingTask :handleAddTask }>
        {editingTask ? 'editar ' : 'agregar'}
      </Button>
    </>
  );
};

