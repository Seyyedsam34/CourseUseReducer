import React from "react"
import { Task } from "../../App"

export interface ListShowprop{
    tasks:Task[]
    onDelete:(taslID:number)=>void
    onChange:(taskId:number)=>void
}
export function ListShow({tasks,onDelete,onChange}:ListShowprop){
    const handelOnDelete=(taslId:number)=>{
        onDelete(taslId)
    }
    const handelCheclbox=(taskId:number)=>{
        onChange(taskId)
    }
    return (
    <>
    <div>
       <ul>
       
       {tasks.map((item:Task)=>(
            <div key={item.id} style={{
                display:"flex",margin:"1rem"}}
                onChange={()=>handelCheclbox(item.id)}
                >
                <input type="checkbox"
                 style={{margin:"1rem"}}
                  /> 
                <li key={item.id} style={{margin:"1rem" , 
                listStyle:"none"}}>
                    {item.title}
                </li>
                <button style={{margin:"1rem"}}
                onClick={()=>handelOnDelete(item.id)}
                >
                    delete
                </button>
            </div>
        ))}
       </ul>
    </div>
      
    </>
    )
       }