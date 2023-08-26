import React, { useEffect, useState } from 'react'
import "./Stopwatch.css"

export const Stopwatch = () => {

    const [time, setTime] = useState(0)
    const [running, setRunning] = useState(false)

    
  
    useEffect(() => {
      let intervel;
      if (running) {
        intervel = setInterval(() => {
          setTime((preTime) => preTime + 10);
        }, 10)
      } else if (!running) {
        clearInterval(intervel)
      }
      return () => clearInterval(intervel)
    }, [running])

    return (
        <div>
            <div className='clock'>
                <h4>Stop Watch</h4>
                <span>{('0' + Math.floor((time / 360000) % 60)).slice(-2)}</span> :&nbsp;
                <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}</span> :&nbsp; 
                <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}</span> .&nbsp; 
                <span>{('0' + (time / 10) % 60).slice(-2)}</span>
            </div>
            <div>
                <button  className='start' onClick={()=>setRunning(true)}>Start</button>
                <button className='stop' onClick={()=>setRunning(false)}>Stop</button>
                <button className='reset' onClick={()=>setTime(0)}>Reset</button>
            </div>
        </div>
    )
}
