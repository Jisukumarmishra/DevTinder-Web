import { BrowserRouter } from "react-router-dom"
import NavBar from "./NavBar"

function App() {
   return (
    <>
    <BrowserRouter basename="/"></BrowserRouter>
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
