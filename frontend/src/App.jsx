import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./components/Error";
import { AnimatePresence } from "framer-motion";
import VotingPage from "./components/VotingPage";
import axios from "axios";


function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND;
  axios.defaults.withCredentials = true;

  return (
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/Voting" element={<VotingPage />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
