import React, { useState } from 'react'
import CountController from '../parts/CountController'
import IncrementField from '../parts/IncrementField'
import SaveButton from '../parts/SaveButton'
import SavedList from '../parts/SavedList'
import Title from '../parts/Title'
import { increments, savedCount } from '../types'

/**
 * Give the user the ability to save their current count
 * Give the user the ability to delete a saved count
 */

const CounterState = () => {
  const [clickCount, setClickCount] = useState(0)
  const [increment, setIncrement] = useState<increments>(1)
  const [savedCounts, setSavedCounts] = useState<savedCount[]>([])

  function increaseCount() {
    setClickCount(clickCount + increment)
  }

  function decreaseCount() {
    setClickCount(clickCount - increment)
  }

  function setIncrementAmount(value: increments) {
    setIncrement(value)
  }

  function saveCount() {
    setSavedCounts([
      ...savedCounts,
      { id: new Date().toISOString(), count: clickCount },
    ])
    setClickCount(0)
  }

  function deleteCount(id: string) {
    setSavedCounts(savedCounts.filter((count) => count.id !== id))
  }

  return (
    <div className="counter">
      <Title title="Counter" />
      <SavedList savedCounts={savedCounts} deleteSaved={deleteCount} />
      <IncrementField
        increment={increment}
        setIncrementAmount={setIncrementAmount}
      />
      <br />
      <CountController
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        increment={increment}
        currentCount={clickCount}
      />
      <SaveButton save={saveCount} />
    </div>
  )
}

export default CounterState
