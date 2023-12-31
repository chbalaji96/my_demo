import React, { useEffect, useReducer } from 'react'
const url="https://fakestoreapi.com/products"

const ReduxUser = () => {
 const reduser=(state,action)=>{
    if(action.type==="GETDATA"){
        return{
            ...state,
            userData:action.payloading
        }
    }
    if(action.type==="LODING"){
        return{
            ...state,
            isLoading:action.payloading
        }
    }
    if(action.type==="ERROR"){
        return{
            ...state,
            IsError:action.payloading
        }
    }
return state
 }
    const fetchData= async(api)=>{
       try {
        debugger;
        dispatch({type:"LODING",payloading:true})
        dispatch({type:"ERROR",payloading:{status:false,msg:""}})
        const fetchUser=await fetch(api);
        const data= await fetchUser.json();
        console.log(data);
        dispatch({type:"GETDATA",payloading:data})
        dispatch({type:"LODING",payloading:false})
       } catch (error) {
        console.log(error)
        dispatch({type:"LODING",payloading:false})
        dispatch({type:"ERROR",payloading:{status:true,msg:error.Message||"this is page error"}})
       }
    }
    useEffect(()=>{
        dispatch(fetchData(url))
        console.log(fetchData(url))
    },[])

    const initialState={
        userData:[],
        isLoading:false,
        IsError:[{status:false,msg:""}]
    }
    const[state,dispatch]=useReducer(reduser,initialState);
if(state.isLoading){
    return(
        <div>
            <h1>LODING....</h1>
        </div>
    )
}

  return (
    <div>
        {
            state.userData.map((item)=>{
                return(
                    <h1 key={item.id}>{item.id}</h1>
                )
            })
        }
    </div>
  )
}

export default ReduxUser