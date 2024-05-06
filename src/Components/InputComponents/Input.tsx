import { useState } from "react"
export interface TaskInput{
    addTask:(title:string)=>void
}


export function Input({addTask}:TaskInput){
    const[value,setValue]=useState("")

    const handelSubmit=()=>{
        addTask(value)
        setValue("")
    }
    return (
    <>
    <div>
        <span>
            <input type="text"  placeholder="Input Text"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            />
            <span><button onClick={handelSubmit}>Submit</button></span>
        </span>
    </div>
    </>
    )
}