import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";



export const TaskList = ({lisTask,handleDeleteTask,handleToogleComplete,handleEditingTask}) => {

    return (
        <>
        {lisTask.map((task) => (
            <Box sx={{ display:"flex", gap:"0.5rem", alignItems:"center", padding:"0.5rem",}} variant="li"  key={task.id}>
            {<Typography sx={{
            textDecoration: task.completed ?"line-through" : "none",}}
            onClick={() => handleToogleComplete(task.id)}
            >
           {task.tarea} 
           

          </Typography>}
            <Button variant="contained"
            onClick={() => handleDeleteTask(task.id)}
            >
            <DeleteIcon />
          </Button>

          <Button variant="contained"
          onClick={() => handleEditingTask(task.id) }
          >
          <EditIcon/>
          </Button>
          
          </Box>
          
        
        ))}
        </>
    
    )
}