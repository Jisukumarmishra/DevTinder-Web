import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"


const Body = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/> // Creatinng a Outlet For The Body Component To Render The Nested Routes
    </div>
  )
}

export default Body