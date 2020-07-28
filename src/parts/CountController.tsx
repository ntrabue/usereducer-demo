import React from 'react'
import { increments } from '../types'

interface ICountController {
  decreaseCount: () => void
  increaseCount: () => void
  increment: increments
  currentCount: number
}

const CountController: React.FC<ICountController> = ({
  decreaseCount,
  increaseCount,
  increment,
  currentCount,
}) => {
  return (
    <div className="count-wrapper">
      <button onClick={decreaseCount}>-{increment}</button>
      <span className="count-wrapper-count">{currentCount}</span>
      <button onClick={increaseCount}>+{increment}</button>
    </div>
  )
}

export default CountController
