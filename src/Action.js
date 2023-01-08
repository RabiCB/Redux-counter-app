export const AddTodo=(data)=>{
    return{
        type:'Add_todo',
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const Deletetodo=(id)=>{
    return{
        type:'Delete_todo',
        id
    }
}




