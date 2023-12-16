import React, { useContext } from 'react'
import { AuthContext } from '../contacts/AuthProvider'
import { Navigate, useLocation } from 'react-router'
import { Spinner } from 'flowbite-react';

function Privateroute({children}) {
    const {user ,loading } = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return  
        <div className='text-center'>
             <Spinner aria-label="Extra large spinner example" size="xl" />
        </div>
    }

    if(user){
        return children
    }

  return (
            <Navigate to="/login" state={{from :location}}replace></Navigate>
  )
}

export default Privateroute