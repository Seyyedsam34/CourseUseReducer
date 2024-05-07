export type TypeAction=
    {
        type:"addTask",
        title:string
    }|{
        type:"Delete"|"Change",
        id:number
    }