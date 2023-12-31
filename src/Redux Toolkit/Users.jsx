import React from 'react'
import { useSelector } from 'react-redux'
import { selector } from './Store/UserSelector'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Users() {
  const user = useSelector(selector)
  return (
    <>

      <div className='px-4 pt-5 my-5 text-center border-bottom'>
        <h1 className="display-4 fw-bold">
          {user.name ? `Name: ${user.name}` : 'Name: N/A'}{' '}
          {user.prenom ? `Prenom: ${user.prenom}` : 'Prenom: N/A'}{' '}
          {user.age ? `(${user.age} years)` : '(Age not available)'}
        </h1>

        <div className="mx-auto">
          <p className="lead mb-4">
            {user.country ? (
              <img src={`https://flagcdn.com/48x36/${user.country}.png`} alt={user.country} />
            ) : (
              <div>Default Flag</div>
            )}
          </p>

        </div>
      </div>

    </>
  )
}
