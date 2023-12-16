import React from 'react'
import SideBar from './Sidebar'
import { Outlet } from 'react-router'


function Dashboardlayout() {
  return (
    <div className='flex gap-4 flex-col md:flex-row'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default Dashboardlayout