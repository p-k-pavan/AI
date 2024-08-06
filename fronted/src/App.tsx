import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SingUp from "./pages/SingUp"
import Chat from "./pages/Chat"
import NotFound from "./pages/NotFound"

function App() {


  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<SingUp />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/not-found' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
