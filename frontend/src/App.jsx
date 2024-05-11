import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import Error from "./components/Error";
import { AnimatePresence } from "framer-motion";
import VotingPage from "./components/VotingPage";
import axios from "axios";
import AdminPage from "./components/Admin/AdminPage";
import ResultPage from "./components/ResultPage";
import { Toaster } from "react-hot-toast";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND;
  axios.defaults.withCredentials = true;

  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/voting" element={<VotingPage />}></Route>
          <Route path="/admin" element={<AdminPage />}></Route>
          <Route path="/admin/:subpage" element={<AdminPage />}></Route>
          <Route path="/result" element={<ResultPage />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
}

export default App;
