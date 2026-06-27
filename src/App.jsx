import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./components/Body"
import LogIn from "./components/LogIn"
import Profile from "./components/Profile"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Feed from "./components/Feed"

function App() {
   return (
    <>
    <Provider store = {appStore}>
    <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<Body/>}>
       <Route path="/" element={<Feed/>}/>
       <Route path="/login" element={<LogIn/>}/>
       <Route path ="/profile" element={<Profile/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
  
}

// export default function App() {
//   return (
//     <div className="bg-red-500 text-white text-5xl p-10">
//       DevTinder
//     </div>
//   );
// }

export default App
