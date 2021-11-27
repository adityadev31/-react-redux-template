/*
   - actions are simple functions that return dispatch function containing: (type and payload)
*/


export const addNumber = (num) => {
   return (dispatch) => {
      dispatch({
         type: "ADD_NUMBER",
         payload: num,
      })
   }
}

export const subNumber = (num) => {
   return (dispatch) => {
      dispatch({
         type: "SUB_NUMBER",
         payload: num,
      })
   }
}