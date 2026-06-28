import { Outlet, useNavigate } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"
import  axios  from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useEffect } from "react"


const Body = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user)
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
    if(!userData) {
    fetchUser(); // only make an api call when no data present in store
    }
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