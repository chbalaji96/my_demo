import React, { useEffect, useState } from 'react'
import  '../css/Index.css'

const url="https://fakestoreapi.com/products";
const Abouts = () => {
const [userdata,setuserdata]=useState([]);
const [loading,setloding]=useState(false);
const [Error,setError]=useState({status:false,meg:''})
    const FetchData=async(api)=>{
        setloding(true);
        setError({status:false,msg:""})
      try {
        const reponse=await fetch(api);
      const getdata=await reponse.json();
      setuserdata(getdata)
      console.log(getdata)
      setloding(false)
      setError({status:false,meg:""})
      } catch (error) {
        console.log(error)
        setuserdata(false)
        setError({status:true,meg:"This Is page respond 404 Error Page"})
      }
    };
    useEffect(()=>{
        FetchData(url)
    },[]);
  return (
    <div>

{loading && !Error?.status&&<h1>Loading....</h1>}
{Error?.status && <h1 style={{justifyItems:'center'}}>{Error.meg}</h1>}
{
    !loading&& !Error?.status && <div id="demo">


      {userdata.map((item)=>{
            const{id,title,category,description,image,price,rating}=item
            return(
                <div  key={id}>
                <div  >
                   <div  style={{boxShadow:'1px 2px 3px 4px'}}>
                        <h1 >{id}</h1>
                        <h1 style={{fontSize:'12px'}}>{title}</h1>
                        <img src={image} style={{width:'150px',justifyItems:'center',alignItems:'center'}}/>
                        <h4 style={{color:'red'}}>{category}</h4>
                        <h3 style={{fontSize:'5px'}}>{description}</h3>
                        <h4>{price}</h4>
                        <p>{rating.count}</p>
                        
                   </div>
                </div>
                </div>
            )
        })
        
    }
    </div>
}

    </div>
  )
}

export default Abouts