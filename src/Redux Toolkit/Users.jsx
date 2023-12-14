import React from 'react'
import { useSelector } from 'react-redux'
import { selector } from './Store/UserSelector'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Users() {
  const user = useSelector(selector)
  return (
    <>
      <div className='px-4 pt-5 my-5 text-center border-bottom'>
        <h1 className="display-4 fw-bold">{user.name} {user.prenom} ({user.age} years)</h1>
        <div className="mx-auto">
          <p className="lead mb-4">
            <img src={`https://flagcdn.com/48x36/${user.country}.png`} />
          </p>
          <div className='d-grid gap-2 d-flex justify-content-center mb-5'>
            <button type='button' className='btn btn-primary btn-lg px-4 me-sm-3'>Update Your profile</button>
            <button type='button' className='btn btn-outline-danger btn-lg px-4'>Delete Your profile</button>
          </div>
        </div>
      </div>
    </>
  )
}
