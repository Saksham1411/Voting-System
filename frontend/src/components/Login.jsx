import { useContext, useState } from "react";
import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { Link, useNavigate } from "react-router-dom";
import avatar from "../assets/input-fields-icons/avatar.svg";
import lock from "../assets/input-fields-icons/password.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "@/context/AuthContext";
import toast from "react-hot-toast";

function Login() {
  const [aadharNumber, setAadharNumber] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/login", { aadharNumber, password });
      const data = await res.data;
      setUser(data);
      if(user.role==='USER'){
        navigate('/voting');
      }else{
        navigate('/admin')
      }
    } catch (error) {
      toast.error(error.response.data);
    }
  };

  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="realtive w-full h-screen py-72 flex flex-col gap-4 items-center justify-center"
      >
        <div className="w-2/5 h-fit bg-white/10 backdrop-blur-lg  px-5 py-8 flex flex-col justify-center items-center text-center text-lg rounded-3xl border border-white/70 shadow-sm shadow-white/40">
          <h1 className="font-fredoka text-2xl tracking-wider font-medium text-white/90">
            Login to your Account
          </h1>
          <p className="mt-2 mb-5 w-48 ring-1 ring-white/80 bg-white rounded-full"></p>

          {/* AadharNumber */}
          <form
            className="w-full flex flex-col items-center justify-center"
            onSubmit={submitHandler}
          >
            <div className="field-div transition ${typing? active:ease-in active:scale-105 :  }">
              <img className="w-8 h-8" src={avatar} alt="avatar_svg" />
              <input
                className="py-2 w-full px-2 bg-transparent tracking-wider focus:outline-none"
                placeholder="Enter your adhar number"
                type="number"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div className="field-div">
              <img className="w-8 h-8" src={lock} alt="password_svg" />
              <input
                className="px-2 py-2 w-full text-white/80 tracking-wider focus:text-white bg-transparent focus:outline-none"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit */}
            <p className="my-5 w-[400px] ring-1 ring-white bg-white rounded-lg"></p>
            <button
              className="w-4/5  text-clip font-semibold font-sans hover:ring-1 hover:ring-white hover:bg-transparent hover:text-white bg-white rounded-md py-3 px-2 text-center transition-all hover:scale-95"
              type="submit"
            >
              Login
            </button>
          </form>

          <Link
            className="mt-4 text-normal text-blue-100 cursor-pointer translate-x-18 "
            to="/"
          >
            Forgot Password?
          </Link>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}

export default Login;
