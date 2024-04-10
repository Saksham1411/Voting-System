import { useState } from 'react'
import { motion } from "framer-motion"
import { AuroraBackground } from "./ui/aurora-background";
import { Link } from 'react-router-dom';
import avatar from '../assets/input-fields-icons/avatar.svg'
import lock from '../assets/input-fields-icons/password.svg'

function Login() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ name: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors({ name: "", password: "" });

    if (name.length > 50) {
      setErrors({ ...errors, name: "Username is too long" })
      return;
    }

    if (password.length < 8) {
      setErrors({ ...errors, password: "Password must be of atleast 8 letters" })
      return;
    }

    // Match the data with database
    // 1 -> if its correct then redirect the user to dashboard
    // 2 -> if not then lock the account for 1hr after 5 consecutive tries
    
    
    console.log("Form Submitted");
  }

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
        <div className='w-2/5 h-fit bg-white/10 backdrop-blur-lg  px-5 py-8 flex flex-col justify-center items-center text-center text-lg rounded-3xl border border-white/70 shadow-sm shadow-white/40'>
          <h1 className='font-fredoka text-2xl tracking-wider font-medium text-white/90'>Login to your Account</h1>
          <p className="mt-2 mb-5 w-48 ring-1 ring-white/80 bg-white rounded-full"></p>

          {/* Name */}
          <form className='w-full flex flex-col items-center justify-center' onSubmit={handleSubmit}>
            <div className="field-div transition ${typing? active:ease-in active:scale-105 :  }">
              <img className='w-8 h-8' src={avatar} alt="avatar_svg" />
              <input className='py-2 w-full px-2 bg-transparent tracking-wider focus:outline-none'
                placeholder='Enter your full name'
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required />
            </div>
            {errors.name && <div className='-translate-x-36 mb-3 text-sm tracking-wide text-red-400'>* {errors.name}</div>}

            {/* Password */}
            <div className="field-div">
              <img className='w-8 h-8' src={lock} alt="password_svg" />
              <input className='px-2 py-2 w-full text-white/80 tracking-wider focus:text-white bg-transparent focus:outline-none'
                placeholder='Password'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            </div>
            {errors.password && <div className='-translate-x-[90px] mb-3 text-sm tracking-wide text-red-400'>* {errors.password}</div>}

            {/* Submit */}
            <p className="my-5 w-[400px] ring-1 ring-white bg-white rounded-lg"></p>
            <button className="w-4/5  text-clip font-semibold font-sans hover:ring-1 hover:ring-white hover:bg-transparent hover:text-white bg-white rounded-md py-3 px-2 text-center transition-all hover:scale-95"
              type="submit">Login</button>
          </form>

          <Link className='mt-4 text-normal text-blue-100 cursor-pointer translate-x-18 ' to='/'>Forgot Password?</Link>

        </div>
      </motion.div>
    </AuroraBackground>
  )
}

export default Login