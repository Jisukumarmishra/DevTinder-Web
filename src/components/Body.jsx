import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import  axios  from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"


const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const fetchUser = async () => {
    try {
      const res = await axios.get(BASE_URL+"/profile/view", {
      withCredentials : true,
    });
    dispatch(addUser(res.data));
   }
    catch (err) {
      navigate("/login");''
     console.error(err); 
    }
  }
  useEffect(() => {
    fetchUser();
  },[]);
  return (
    <div>
      <NavBar/>
      <Outlet/> {/* <Outlet/> // Creatinng a Outlet For The Body Component To Render The Nested Routes */}
      <Footer/> 
    </div>
  )
}

export default Body;