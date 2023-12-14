import React from 'react'
import { useSelector } from 'react-redux'
import { selector } from './Store/UserSelector'

export default function Users() {
  const user = useSelector(selector)
  return (
    <>{user.name}</>
  )
}
