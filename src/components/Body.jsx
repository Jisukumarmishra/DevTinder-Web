import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import { Axios } from "axios"
import { BASE_URL } from "../utils/constants"


const Body = () => {
  const fetchUser = async () => {
    try {const user = await Axios.GET(BASE_URL+"/profile/view", {
      withCredential : true,
    });}
    catch (err) {
     console.error(err); 
    }

  }
  return (
    <div>
      <NavBar/>
      <Outlet/> {/* <Outlet/> // Creatinng a Outlet For The Body Component To Render The Nested Routes */}
      <Footer/> 
    </div>
  )
}

export default Body;