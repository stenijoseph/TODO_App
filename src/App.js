import { useState,useEffect} from "react";
import Todo from "./components/Todo";

const localData=()=>{
  let list=localStorage.getItem("data")
  if(list)
    {
      return JSON.parse(list)
    }
    else{
      return[]
    }
    }
  
function App() {
const [newtask,setnewtask]=useState(" ")
const [todolist,settodolist]=useState(localData())

const onchange=(event)=>{ 
  setnewtask(event.target.value) 
} 


const addtask=(e)=>{
  e.preventDefault()
  if(newtask===" ")
    {
      alert("enter task")
    }
    else{
      let task={
        id:todolist.length===0?1:todolist[todolist.length-1].id+1,
        taskname:newtask,
        completed:false
      }
      let newtodolist=[...todolist,task]
      settodolist(newtodolist) 
      setnewtask(" ")
    }
  
}

const deleteTask=(id)=>{
let newtodolist=todolist.filter((item)=>{
  // if(item===taskname)
  //   {
  //     return false
  //   }
  //   else
  //   {
  //     return true
  //   }
  return item.id !== id
})
settodolist(newtodolist)
}

const isCompleted=(id)=>{
  settodolist(todolist.map((item)=>{
    if(item.id===id)
      {
        return {...item,completed:true}
      }
      else
      {
        return item
      }
  }))
}
const editTask=(id)=>{
let changeTask=todolist.find((item)=>{
  return item.id===id
})
let newtodolist=todolist.filter((item)=>{
  return item.id!==id
})

setnewtask(changeTask.taskname)
settodolist(newtodolist)
}
useEffect(()=>{
localStorage.setItem("data",JSON.stringify(todolist))
},[todolist])
  return (
    <div className="text-2xl text-blue-900 bg-black text-white w-full min-h-screen flex flex-col items-center justify-center gap-4">
   <form className="flex gap-2">
   <input type="text" placeholder="enter your task"className="text-black border-none outline-none px-3" onChange={onchange} value={newtask}/>
   <button onClick={addtask} className="bg-blue-300 px-2 text-black rounded-2xl font-semibold">ADD</button>
   </form>
   
<div className="">
  {
  todolist.map((item,index)=>{
return(
  <Todo deleteTask={deleteTask}
  index={index}
  id={item.id}
  taskname={item.taskname}
  isCompleted={isCompleted}
  completed={item.completed}
  editTask={editTask}
  key={item.id}/>
  
)
})}
</div> 
    </div>
  );
}

export default App;
