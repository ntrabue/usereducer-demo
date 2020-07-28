import React from 'react'
import { savedCount } from '../types'

interface ISavedList {
  savedCounts: savedCount[]
  deleteSaved: (id: string) => void
}

const SavedList: React.FC<ISavedList> = ({ savedCounts, deleteSaved }) => {
  if (savedCounts.length > 0)
    return (
      <>
        <p>Saved Counts:</p>
        <ul>
          {savedCounts.map((count) => (
            <li>
              {count.count}
              <button onClick={() => deleteSaved(count.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </>
    )
  return null
}

export default SavedList
