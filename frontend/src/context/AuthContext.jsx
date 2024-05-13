import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

export function AuthContextProvider({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      axios
        .get("/profile")
        .then(({ data }) => {
          setUser(data);
        })
        .catch((err) => {
          setUser(null);
        });
    }
    else if(user.role === "USER" && user.votingStatus===true){
      console.log("true");
      navigate('/result');
    }  
    else if (user.role === "USER") navigate("/voting");
    else if(user.role === "ADMIN") navigate("/admin");
  }, [user]);
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
