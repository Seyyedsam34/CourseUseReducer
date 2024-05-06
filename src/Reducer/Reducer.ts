import { Task } from "../App"
import {TypeAction} from "../Reducer/ReducerType"
let nextId:number=0
export function tasksReducer(tasks:Task[],action:TypeAction,){

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
    }}
}

