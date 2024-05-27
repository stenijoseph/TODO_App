import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';

const Todo = ({deleteTask,index,id,taskname,isCompleted,completed,editTask}) => {
  return (
    <div className="flex gap-2 items-center">
    <h1 className={`
    ${completed?"line-through text-green-600":"text-white"}
    `}>
      <span>{index+1}.</span>{taskname}</h1>
    <DoneIcon onClick={()=>{isCompleted(id)}}/>
    <DeleteIcon onClick={()=>{deleteTask(id)}} />
    <EditIcon onClick={()=>{editTask(id)}}/>
  </div>
  )
}

export default Todo 