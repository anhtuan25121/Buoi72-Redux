import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import {countDown, countUp} from '../redux2/countSlice'

export default function Exam3() {
    const dispatch= useDispatch()
    const count= useSelector((state)=> state.count.value)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=> dispatch(countDown())}>Count Down</button>
      <button onClick={()=> dispatch(countUp())}>Count Up</button>
    </div>
  )
}
