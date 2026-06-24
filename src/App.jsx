import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Body from "./Body"

function App() {
   return (
    <>
    <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<Body/>}>
       <Route path="/login" element={<Body/>}/>
      </Route>
     </Routes>
    </BrowserRouter>
   <NavBar/>
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
