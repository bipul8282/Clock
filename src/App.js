import React,{useState} from 'react'
import './App.css';

const App = ()=>{

  let time = new Date().toLocaleTimeString();
  const[ctime,setCtime]=useState(time);
  const xyz = () =>{
    time = new Date().toLocaleTimeString();
    setCtime(time)
  }
  setInterval(xyz,1000)
  return(
<>
<h1>{time}</h1>
{/* <button onClick={xyz}>Get Time</button> */}
</>
  )
}
export default App