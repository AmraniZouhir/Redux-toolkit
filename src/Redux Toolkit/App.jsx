import React from 'react'
import {Provider} from 'react-redux'
import { store } from './Store/Store'
import Users from './Users'

export default function App() {
  return (
    // had l provider hwa likayfr9 lina stor 3la ga3 les componenet li3sdna fl app
    <Provider store={store}>
        <Users/>
        {/* <UserForm/> */}
    </Provider>
  )
}
