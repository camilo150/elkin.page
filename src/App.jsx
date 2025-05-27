import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Inicio from "./assets/pages/Inicio"
let router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/>
  },
])

const App =()=> {
  return (
     <RouterProvider router={router} />
  )
}
export default App