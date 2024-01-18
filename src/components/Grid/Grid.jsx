import React, { useCallback, useState } from 'react'
import Card from '../Card/Card';
import './Grid.css'
import isWinner from '../../helpers/checkWinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Grid({numberOfCards}) {
  const [turn,setTurn] = useState(true)
  const [board, setboard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);

    const play = useCallback( function playCallback(index){
    console.log("move played",index)
    if(turn === true){
      board[index] = "O"
    }else{
      board[index] = "X"
    }

    const win = isWinner(board, turn ? 'O' : 'X')
    if(win){
      setWinner(win);
      toast.success(`Congratulations ${win} wins the game!`)
    }
    setboard([...board])
    setTurn(!turn)  
  },[turn]);
  function reset(){
    setboard(Array(numberOfCards).fill(""));
    setWinner(null);
    setTurn(!turn);
  }

  return ( 
      <div className='gridWrapper'>
    {winner && 
    (   <>
            <h1 className='turn'>Winner is {winner}</h1>
            <button className='reset' onClick={reset}>Reset game</button>
            <ToastContainer position='top-center'/>
        </>
    )}
    <h1 className='turn'>Current Turn: {(turn)? 'O':'X'}</h1>
    <div className='grid'>
   {board.map((value, idx)=>{
    return <Card gameEnd={winner ? true : false} onPlay={play} player={value} key={idx} index={idx}/>
   })}
    </div>
    </div>
  )
}

export default Grid;