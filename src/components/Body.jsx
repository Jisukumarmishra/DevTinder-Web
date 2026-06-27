import { Outlet } from "react-router-dom"
import {NavBar} from "./components/NavBar"
import {Footer} from "./components/Footer"


const Body = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/> {/* <Outlet/> // Creatinng a Outlet For The Body Component To Render The Nested Routes */}
      <Footer/> 
    </div>
  )
}

export default Body;