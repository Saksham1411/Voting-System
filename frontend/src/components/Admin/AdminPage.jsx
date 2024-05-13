import React, { useContext } from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import CandidateForm from "./CandidateForm";
import CandidateList from "./CandidateList";
import { AuthContext } from "@/context/AuthContext";
import Logout from "../Logout";

const AdminPage = () => {
  const { subpage } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(user);

  if(!user) return <Navigate to={'/login'}></Navigate>; 

  return (
    <>
    <Logout/>
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
        </div>
      )}
      {subpage === "newcandidate" && <CandidateForm />}

      <BackgroundBeams />
    </div>
    </>
  );
};

export default AdminPage;
