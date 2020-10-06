export const counterAction=()=>{
  return{
     type:'INCREAMENT',

  }
}
export const decrementCounter=()=>{
  return{
    type:'DECREMENT'
  }
}
export const toAddedCounter =(data)=>{
  return{
    type:'ADD',
    payload:data

  }
}
export const toRemoveCounter=(data)=>{
  return{
    type:'REMOVE',
    payload:data
  }
}

export const toResetCounter=()=>{
  return{
    type:'RESET',
  }
}