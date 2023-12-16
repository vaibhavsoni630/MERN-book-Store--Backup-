import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import "./App.css"

import Myfooter from "./components/Myfooter"

function App() {
  return (
    <>
      <Navbar/>
      <div className="min-h-screen">
        <Outlet/>
      </div>
      <Myfooter/>
    </>
  )
}

export default App
