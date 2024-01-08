import React, { useState } from 'react'
import Card from '../Card/Card';
import './Grid.css'

function Grid({numberOfCards}) {
  const [turn,setTurn] = useState(true)
  function play(){
    console.log("move played")
    setTurn(!turn)  
  }
  return (
    <>
    <h1 className='turn'>Current Turn: {(turn)? 'O':'X'}</h1>
    <div className='grid'>
   {Array(numberOfCards).fill(<Card />).map((el,idx)=>{
    return <Card onPlay={play} key={idx}/>
   })}
    </div>
    </>
  )
}

export default Grid;