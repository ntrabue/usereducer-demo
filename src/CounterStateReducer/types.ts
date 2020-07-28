import { increments, savedCount } from '../types'

export interface CounterProps {
  title: string
  initialCount?: number
}

export interface countReducerState {
  count: number
  increment: increments
  savedCounts: savedCount[]
}

export type countReducerActions =
  | increment
  | decrement
  | setIncrement
  | save
  | deleteSaved

interface increment {
  type: 'increment'
}

interface decrement {
  type: 'decrement'
}

interface setIncrement {
  type: 'setIncrement'
  value: increments
}

interface save {
  type: 'save'
}

interface deleteSaved {
  type: 'deleteSaved'
  id: string
}
