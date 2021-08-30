const count = 0;

//const CounterReducer = (state, action) => {};
const CounterReducer = (state = count, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - action.payload;
    default:
      return state;
  }
};

export default CounterReducer;