import React, { useContext } from 'react'
import { AuthContext } from '../contacts/AuthProvider'
import { useLocation, useNavigate } from 'react-router';

function Logout() {
    const {logOut}= useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/"

    const handleLogout = ()=>{
        logOut().then(()=>{
            alert('Successfully SignOut')
            navigate(from ,{ replace:true})
        }).catch((error) =>{

        })
    }

  return (
    <div className='h-screen bg-teal-200 flex items-center justify-center'>
        <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Log Out</button>
    </div>
  )
}

export default Logout