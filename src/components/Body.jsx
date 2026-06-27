import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"


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