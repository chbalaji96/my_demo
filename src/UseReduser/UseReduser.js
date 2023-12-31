import React, { useReducer, useState } from 'react'

const reduser=(state,action)=>{
    if(action.type==="DELETE_PERSON"){
        const newperson=state.data.filter((eachPerson)=>{
            return eachPerson.id !==action.payload
        });
        return{
            data:newperson
        }
    
    }


}
const DemoReduser = () => {
    const initialState={
        data:[
            {id:1,firstname:"balaji",email:"balaji99@Gmail.com"},
            {id:2,firstname:"sreenu",email:"gmail.com"}
        ]
    }
    const[count ,setcount]=useState("")
    useReducer(reduser,initialState)
  const [state,dispatch]=useReducer(reduser,initialState)
  const handledelete=(id)=>{
dispatch({
    type:"DELETE_PERSON",
    payload:id
})
  };
  return (
    <div> 
       {
        state.data.map((item)=>{
            const{id,firstname,email}=item
            return(
                <div key={id}>
                    <h1>{id}</h1>
                    <h1>{firstname}</h1>
                    <h1>{email}</h1>
                    <button type='submit'  onClick={()=>handledelete(id)}>Delete</button>
                </div>
            )
        })
       }
    </div>
  )
}

export default DemoReduser