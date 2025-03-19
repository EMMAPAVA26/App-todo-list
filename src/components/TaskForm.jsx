import { TextField, Button, Box } from "@mui/material";

export const TaskForm = ({ handleAddTask, handleChange, taskText,editingTask, handleSaveEditingTask}) => {
 
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", gap:"0.5rem",  padding:"0.5rem"}}>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        value={taskText.tarea || ""}
        onChange={handleChange}
      />

      <Button variant="contained" onClick={editingTask ? handleSaveEditingTask :handleAddTask } size="large" sx={{height:"100%",}}>
        {editingTask ? 'editar ' : 'agregar'}
      </Button>
    </Box>
  );
};

