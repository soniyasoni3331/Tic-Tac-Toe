import { FaTimes, FaPen, FaRegCircle } from "react-icons/fa";
import React from 'react'

function Icon({name}) {
    if(name === "circle"){
        return <FaRegCircle />
    }else if(name === "cross"){
        return<FaTimes/>
    }else{
        return <FaPen/>
    }
  
}

export default Icon;