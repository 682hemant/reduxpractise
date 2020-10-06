export const toStoreCounter=(data)=>{
  return{
    type:'STORE',
    payload:data
  }
}
export const toRemoveStoreValue=(data)=>{
  return{
    type:'REMOVE',
    payload:data
  }
}