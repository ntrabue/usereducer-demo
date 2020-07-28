import React from 'react'

interface ISaveButton {
  save: () => void
}

const SaveButton: React.FC<ISaveButton> = ({ save }) => {
  return (
    <button onClick={save} type="button">
      Save Count
    </button>
  )
}

export default SaveButton
