/* 
   - reducers are like calculators (brains)
   - takes initial value & action

*/

const numberReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return state + action.payload;
    case "SUB_NUMBER":
      return state - action.payload;
    default:
      return state;
  }
};

export default numberReducer;