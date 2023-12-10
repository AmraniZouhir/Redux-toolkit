import React from 'react'
import {Provider} from 'react-redux'
import { store } from './Store/Store'
import Users from './Users'
import UserForm from './UserForm'

export default function App() {
  return (
    <Provider store={store}>
        <Users/>
        <UserForm/>
    </Provider>
  )
}
