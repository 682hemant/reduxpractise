const initialstate={
  store:[]
}
const StoreReducer=(state=initialstate,action)=>{
  switch(action.type){
    case 'STORE':
      return{
          ...state,
          store:state.store.concat({value:action.payload,id:Math.random()})
      }
      case 'REMOVE':
      return{
          ...state,
          store:state.store.filter(counter=>counter.id!==action.payload)
      }
  }
  return state;
}
export default StoreReducer