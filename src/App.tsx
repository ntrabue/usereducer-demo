import React from 'react'
import './App.css'
import CounterState from './CounterState/CounterState'
import CounterStateReducer from './CounterStateReducer/CounterStateReducer'
import NewCounter from './CounterStateReducer/NewCounter'

function App() {
  return (
    <div className="App">
      <CounterState />
      <hr />
      <CounterStateReducer />
      <hr />
      <NewCounter />
    </div>
  )
}

export default App
