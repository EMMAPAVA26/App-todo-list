import { Box, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";


export const TaskList = ({lisTask,handleDeleteTask,handleToogleComplete}) => {

    return (
        <>
        {lisTask.map((task) => (
            <Box sx={{backgroundColor:"red", display:"flex"}} variant="li"  key={task.id}>
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
          
          </Box>
          
        
        ))}
        </>
    
    )
}