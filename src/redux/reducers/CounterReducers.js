const initialState = {
  counter: 0
}

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREAMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return{
        ...state,
        counter:state.counter-1
      }
      case 'ADD':
      return{
        ...state,
        counter:state.counter+action.payload
      }
      case 'REMOVE':
        return{
          ...state,
          counter:state.counter-action.payload
        }
        case 'RESET':
          return{
            ...state,
            counter:0
          }
  }

  return state;

}
export default CounterReducer;