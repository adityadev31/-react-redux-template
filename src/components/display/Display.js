import React from 'react'
import './display.css'
import { useSelector } from 'react-redux'

const Display = () => {

   const { number } = useSelector((state) => state);

   return (
      <div className="display_wrapper">
         <h1>{ number }</h1>
      </div>
   )
}

export default Display
