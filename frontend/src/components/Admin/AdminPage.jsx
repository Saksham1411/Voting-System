import React, { useContext } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import CandidateForm from "./CandidateForm";
import CandidateList from "./CandidateList";
import { AuthContext } from "@/context/AuthContext";
import Logout from "../Logout";
import axios from "axios";
import toast from "react-hot-toast";

const AdminPage = () => {
  const { subpage } = useParams();
  const { user } = useContext(AuthContext);
  // const navigate = useNavigate();
  console.log(user);

  async function declareResultHandler(){
    try {
      await axios.post('/result');
      toast.success('Result declare');
    } catch (error) {
      console.log(error);
    }
  }

  if (!user) return <Navigate to={"/login"}></Navigate>;

  return (
    <>
      <Logout />
      <div className="h-screen  bg-neutral-950  text-neutral-200 ">
        {subpage === undefined && (
          <div className="relative z-20 flex flex-col items-center p-10">
            <Link
              className="border bg-transparent text-xl px-4 py-2 rounded"
              to={"/admin/newcandidate"}
            >
              Add Candidate
            </Link>
            <div>
              <CandidateList />
            </div>
            <button className="border px-6 py-3 rounded-full hover:shadow-sm hover:shadow-white text-xl" onClick={declareResultHandler}>
              Declare Result
            </button>
          </div>
        )}
        {subpage === "newcandidate" && <CandidateForm />}

        <BackgroundBeams />
      </div>
    </>
  );
};

export default AdminPage;
