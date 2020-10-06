import React from 'react'
import { connect } from 'react-redux';
import {counterAction,decrementCounter,toAddedCounter,toRemoveCounter,toResetCounter} from '../../redux/actions/CounterActions';
import {toStoreCounter,toRemoveStoreValue} from '../../redux/actions/StoreActions';

const Counter = (props) => {
  const Increament=()=>{
    props.dispatch(counterAction())
  }
  const Decreament=()=>{
    props.dispatch(decrementCounter())
  }
  const add=()=>{
    props.dispatch(toAddedCounter(10))
  }
  const remove=()=>{
    props.dispatch(toRemoveCounter(10))
  }
  const store=()=>{
    props.dispatch(toStoreCounter(props.cnt))
  }
  const ondeletecounter=(Id)=>{
    props.dispatch(toRemoveStoreValue(Id))
  }
  const reset=()=>{
    props.dispatch(toResetCounter())
  }
  return (
    <div>
      <h1>your counter is:{props.cnt} </h1>
      <button onClick={Increament}>increase counter</button>
      <button onClick={Decreament}>decrement Counter</button>
      <button onClick={add}>add 10</button>
      <button onClick={remove}>remove 10</button>
      <button onClick={reset}>reset</button>
      <button onClick={store}>store counter</button>
      <ul>
        {props.storecounter.map(counter=><li key={counter.id} onClick={()=>ondeletecounter(counter.id)}>{counter.value}</li>)}
      </ul>

    </div>
  )
}
const mapStateToProps = state => {
  return {
    cnt: state.ctr.counter,
    storecounter:state.str.store
  }
}

export default connect(mapStateToProps)(Counter)


