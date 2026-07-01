import axios from "axios"
import { BASE_URL } from "../utils/constants"

const Feed = () => {

  const getFeed = async () => {

   const res = await axios.get(BASE_URL + "/feed");
   
  }
  return (
    <div>Feed</div>
  )
}

export default Feed