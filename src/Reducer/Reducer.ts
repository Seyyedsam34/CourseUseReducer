import { Task } from "../App"
import {TypeAction} from "../Reducer/ReducerType"
let nextId:number=0
export function tasksReducer(tasks:Task[],action:TypeAction){

    switch(action.type){
        case "addTask":{
        return[
            ...tasks,
            { 
            id: nextId++,
            title: action.title,
            done: false
        }
        ]
    }
    case "Delete":{
       return tasks.filter((item)=>item.id!==action.id)
    }
    case "Change":{
        return tasks.map((item)=>{
            if(item.id===action.id){
                return{
                    ...item,
                    done: !item.done
                }
            }else{
                return item
            }
        })
     }
     default :
     return tasks
}
}