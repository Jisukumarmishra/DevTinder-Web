import { BrowserRouter, Route, Routes } from "react-router-dom"
import Body from "./Body"
import LogIn from "./LogIn"
import Profile from "./Profile"

function App() {
   return (
    <>
    <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<Body/>}>
       <Route path="/login" element={<LogIn/>}/>
       <Route path ="/profile" element={<Profile/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
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
