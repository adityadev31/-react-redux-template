import React from 'react'
import Display from './components/display/Display'
import Button from './components/button/Button'
import './app.css'

const App = () => {
   return (
      <div className="app_box_wrapper">
         <div className="app_box">
            <Display />
            <div className="app_btnBox">
               <Button text={"Add"} type={"add"} num={1000} />
               <Button text={"Sub"} type={"sub"} num={1000} />
            </div>
         </div>
      </div>
   )
}

export default App
