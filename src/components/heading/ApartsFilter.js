import React, { useContext } from 'react'
import GlobalContext from '../../SearchApartContext'
import MySelectApart from './MySelectApart'

function ApartsFilter () {
  const { currentApart, setCurrentApart } = useContext(GlobalContext)

  const setAp = (currentApart) => {
    setCurrentApart(currentApart)
    console.log(currentApart)
  }

  return (
    <MySelectApart
      value={currentApart}
      onChange={setAp}
      defaultValue="apartment"
      options={[
        { value: 'apartment', name: 'apartment' },
        { value: 'newfound', name: 'newfound' },
        { value: 'room', name: 'room' },
        { value: 'house', name: 'house' },
        { value: 'office', name: 'office' },
        { value: 'garage', name: 'garage' }
      ]}
    />
  )
}
export default ApartsFilter
