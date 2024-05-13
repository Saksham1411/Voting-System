import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const {setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const logoutHandler = async()=>{
        const res = await axios.post('/logout');
        setUser(null);
        navigate('/login');
    }
  return (
    <>
      <button className="absolute z-40 text-white border border-white py-2 px-4 right-5 top-5 rounded hover:bg-white hover:text-black font-semibold " onClick={logoutHandler}>
        Logout
      </button>
    </>
  );
};

export default Logout;
