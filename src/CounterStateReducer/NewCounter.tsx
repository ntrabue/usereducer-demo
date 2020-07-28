import React from 'react'
import CountController from '../parts/CountController'
import Title from '../parts/Title'
import { useCounter } from './CounterReducer'

const NewCounter: React.FC = () => {
  const { counter, increaseCount, decreaseCount } = useCounter({
    count: 0,
    increment: 10,
    savedCounts: [],
  })
  return (
    <>
      <Title title="test" />
      <CountController
        decreaseCount={decreaseCount}
        increaseCount={increaseCount}
        currentCount={counter.count}
        increment={counter.increment}
      />
    </>
  )
}

export default NewCounter
