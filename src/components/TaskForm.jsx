import { TextField, Button } from "@mui/material";

export const TaskForm = ({ handleAddTask, handleChange, taskText, handleSubmit, handleDeleteTask }) => {
  return (
    <>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={taskText?.tarea || ""}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={handleSubmit}>
        Agregar
      </Button>
    </>
  );
};

