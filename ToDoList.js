import React, { useState } from "react";

const ToDoList=()=>{
    const [num, setNum]=useState(0);
    const Incnum=()=>{
        setNum(num+1);
    }
    const Decnum=()=>{
        if(num>0){
            setNum(num-1)
        }
        else{
            alert("sorry, Limit zero");
        }
    }
    return(
        <>
        <div className="list">
            <div className="simple">
                <h1>{num}</h1>
                <div className='button_div'>
                <button onClick={Incnum}>InCNum</button>
                <button onClick={Decnum}>DecNum</button>
                </div>
            </div>
        </div>
        </> 
    )
}

export default ToDoList;