
import { Input } from "./Components/InputComponents/Input"
import {tasksReducer} from "./Reducer/Reducer"
import { useReducer } from "react";
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

  return (
    <>
      <Input addTask={addTask}/>
    </>
  )
}
