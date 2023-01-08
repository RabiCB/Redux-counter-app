import { act } from "react-dom/test-utils"

const initialstate={
    list: []
}
const Todosreducer=(state=initialstate,action)=>{
    switch(action.type){
        case "Add_todo":
            const {id,data}=action.payload
            return {
                ...state,
                list:[
                    ...state.list,
                    {
                        id:id,
                        data:data
                    }

                ]
            }
       
        case "Delete_todo":
            const newList=state.list.filter((x)=>x.id !==action.id)
            return{
                ...state,
                list:newList
            }
        default:
            return state
    }

}
export default Todosreducer;