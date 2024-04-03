import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Registration from './components/Registration'
import Login from './components/Login'
import Home from './components/Home'
import Error from './components/Error'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/register" element={<Registration />} ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
