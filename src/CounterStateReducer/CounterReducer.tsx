import { useReducer } from 'react'
import { increments } from '../types'
import { countReducerActions, countReducerState } from './types'

/**
 * Looks just like a redux reducer
 * Reusable and easy to test
 * Better type support
 * Easier to understand outcomes of changes
 */
export const counterReducer = (
  state: countReducerState,
  action: countReducerActions
): countReducerState => {
  switch (action.type) {
    case 'increment': {
      return { ...state, count: state.count + state.increment }
    }
    case 'decrement': {
      return { ...state, count: state.count - state.increment }
    }
    case 'setIncrement': {
      return {
        ...state,
        increment: action.value,
      }
    }
    case 'save': {
      return {
        ...state,
        count: 0,
        savedCounts: [
          ...state.savedCounts,
          { id: new Date().toISOString(), count: state.count },
        ],
      }
    }
    case 'deleteSaved': {
      return {
        ...state,
        savedCounts: state.savedCounts.filter(
          (count) => count.id !== action.id
        ),
      }
    }
    default: {
      throw new Error(`You tried using an action that is not configured`)
    }
  }
}

export const useCounter = (defaultState: countReducerState) => {
  const [counter, setCounterState] = useReducer(counterReducer, defaultState)

  function increaseCount() {
    setCounterState({ type: 'increment' })
  }

  function decreaseCount() {
    setCounterState({ type: 'decrement' })
  }

  function setIncrementAmount(value: increments) {
    setCounterState({ type: 'setIncrement', value })
  }

  function save() {
    setCounterState({ type: 'save' })
  }

  function deleteSavedCount(id: string) {
    setCounterState({ type: 'deleteSaved', id })
  }

  return {
    counter,
    increaseCount,
    decreaseCount,
    setIncrementAmount,
    save,
    deleteSavedCount,
  }
}
