import React, { useState } from 'react'
import { increments } from '../types'

interface IIncrementField {
  increment: number
  setIncrementAmount: (value: increments) => void
}

const IncrementField: React.FC<IIncrementField> = ({
  increment,
  setIncrementAmount,
}) => {
  const [editing, toggleEdit] = useState(false)

  if (!editing) {
    return (
      <span>
        Increment count by {increment}{' '}
        <button className="edit-button" onClick={() => toggleEdit(true)}>
          edit
        </button>
      </span>
    )
  }

  return (
    <div>
      <label htmlFor="incrementSelect">increment count by:</label>
      <br />
      <select
        id="incrementSelect"
        value={increment}
        onChange={(e) => {
          const value = parseInt(e.currentTarget.value, 10) as increments
          return setIncrementAmount(value)
        }}
      >
        <option value={1}>1</option>
        <option value={5}>5</option>
        <option value={10}>10</option>
      </select>
      <button onClick={() => toggleEdit(false)}>
        <span role="img" aria-label="done editing increment">
          ✔️
        </span>
      </button>
    </div>
  )
}

export default IncrementField
