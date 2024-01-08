import React from 'react'
import './Card.css'
import Icon from '../Icon/Icon'

function Card({iconName, onPlay}) {
  return (
    <>
    <div className='card' onClick={onPlay}>
        <Icon name={iconName}/>
    </div>
    </>
  )
}

export default Card