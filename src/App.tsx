
import React from "react";
import { Input } from "./Components/InputComponents/Input"
import {tasksReducer} from "./Reducer/Reducer"
import { useReducer } from "react";
import { ListShow } from "./Components/ListShowComponent/ListShow";
export interface Task{
  id:number,
  title:string,
  done:boolean
}
export default function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, [])

  function addTask(taskTitle: string) {
    dispatch({type:"addTask",title:taskTitle })
  }  
  function onDelete(taskID){
    dispatch({type:"Delete",id:taskID})
  }
  function onChange(taskID){
    dispatch({type:"Change",id:taskID})
  }
  return (
    <>
      <Input addTask={addTask}/>
      <ListShow tasks={tasks} onDelete={onDelete} onChange={onChange}/>
    </>
  )
}



