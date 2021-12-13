import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUsers } from './actions/action'

const Index = () => {
  const { publicDataLoading, publicData } = useSelector(state => state.users)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  }, [])
  
  return (
    <div>
      {
        publicData.map((user) => (
          <div key={user.id}>
            <div>{ user.name }</div>
            <div>{ user.email }</div>
          </div>
        ))
      }
    </div>
  )
}

export default Index
