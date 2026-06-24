import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"

function App() {
   return (
    <>
    <BrowserRouter basename="/">
     <Routes>
      <Route path="/" element={<div>Base Page</div>}/>
      <Route path="/login" element={<div>LogIn Page</div>}/>
      <Route path="/test" element={<div>Test Page</div>}/>
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
