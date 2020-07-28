import React from 'react'
import CountController from '../parts/CountController'
import IncrementField from '../parts/IncrementField'
import SaveButton from '../parts/SaveButton'
import SavedList from '../parts/SavedList'
import Title from '../parts/Title'

import { useCounter } from './CounterReducer'

const CounterReducer = () => {
  const {
    increaseCount,
    decreaseCount,
    setIncrementAmount,
    save,
    deleteSavedCount,
    counter,
  } = useCounter({
    count: 0,
    savedCounts: [],
    increment: 1,
  })

  return (
    <div className="CounterWithReducer">
      <Title title="Counter" />
      <SavedList
        savedCounts={counter.savedCounts}
        deleteSaved={deleteSavedCount}
      />
      <IncrementField
        increment={counter.increment}
        setIncrementAmount={setIncrementAmount}
      />
      <br />
      <CountController
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        increment={counter.increment}
        currentCount={counter.count}
      />
      <SaveButton save={save} />
    </div>
  )
}

export default CounterReducer
