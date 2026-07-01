import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { useDispatch } from "react-redux"
import { addFeed } from "../utils/feedSlice"

const Feed = () => {
  const dispatch = useDispatch()

  const getFeed = async () => {

   const res = await axios.get(BASE_URL + "/feed");
   dispatch(addFeed(res.data))
   
  }
  return (
    <div>Feed</div>
  )
}

export default Feed