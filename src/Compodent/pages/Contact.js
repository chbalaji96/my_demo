import React, { useState } from 'react'

const Contact = () => {
    const[show,setshow]=useState(false)
    const handlesubmit=()=>{
        setshow(!show);
    }
  return (
    <div style={{justifyItems:'center',position:'relative'}}>

        <button onClick={handlesubmit}>{show ? "hide":"Show"}</button>

        {
            show ?(<div>
                <p>jsahkfgadzkfjgasbzflsagfbjaldfgbdajlzfgbasdfbgfasgfiasldkzsbdjkzsdhbzs</p>
            </div>):(<div>Hinde to data</div>)
        }
    </div>
  )
}

export default Contact