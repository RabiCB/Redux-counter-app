
import React from 'react'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { AddTodo, Deletetodo} from './Action'
import {BsPlus} from 'react-icons/bs'
import {AiFillDelete} from 'react-icons/ai'
const App = () => {
 const [addTodo,setAddTodo]=useState("")
 const [edit,setEdit]=useState(false)
 const dispatch=useDispatch();
 const lists=useSelector((state)=>state.Todosreducer.list)
    
 const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(addTodo)

 }

  return (

    <div className='flex items-center bg-purple-300 flex-col gap-4 pt-40 h-screen'>
    <form className="flex items-center gap-4" onSubmit={handleSubmit}>
     <input type="text" placeholder='enter your todo' className="border-2  rounded-md pl-4 h-10 w-60 outline-none " onChange={(e)=>setAddTodo(e.target.value)}/>
     <BsPlus type="submit" className=" text-2xl bg-white rounded-md" onClick={()=>dispatch(AddTodo(addTodo),setAddTodo(""))}></BsPlus>
    
     </form>
     {
      lists.map((x)=>{
        return<div className='flex items-center  gap-4' key={x.id}>
          <span className="pl-4 bg-purple-600 w-60 pr-4 pt-1 pb-1 text-white rounded-md">{x.data}</span>
          <AiFillDelete onClick={()=>dispatch(Deletetodo(x.id))}/>
        </div>


      })
     }
     </div>
  )
}

export default App