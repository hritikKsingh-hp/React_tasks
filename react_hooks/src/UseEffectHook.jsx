import React, { useEffect, useState } from 'react'


export default function UseEffectHook() {
    const [count,setCount]=useState(30)
    
        

    useEffect(() => {
        if(count>0){
        const timer =setTimeout(()=>{
        setCount(count-1)
        console.log('render');
        
      }, 1000)
    
    //   return () => clearTimeout(timer)
        // return;
      
    }}, )
    
  return (
    <div>
        {count>0? `please wait for ${count} seconds`:`your wait time is over`}
    </div>
  )
}
