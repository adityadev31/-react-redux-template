import React from 'react'
import './button.css'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../redux/action-creators/index'


const Button = ({ text, type, num }) => {

   const dispatch = useDispatch();
   const { addNumber, subNumber } = bindActionCreators(actionCreators, dispatch);
   
   const onClickHandler = () => {
      if(type==="add") {
         addNumber(num);
      } else {
         subNumber(num);
      }
   }
 
   return (
      <button className="button" onClick={onClickHandler}>
         {text}
      </button>
   )
}

export default Button
