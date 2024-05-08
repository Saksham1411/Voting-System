import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Link, useParams } from "react-router-dom";
import CandidateForm from "./CandidateForm";

const AdminPage = () => {
  const { subpage } = useParams();
  console.log(subpage);
  return (
    <div className="h-screen  bg-neutral-950  text-neutral-200 ">
      {subpage === undefined && (
        <div className="relative z-20 flex flex-col items-center p-10">
          <Link
            className="border bg-transparent text-xl px-4 py-2 rounded"
            to={"/admin/newcandidate"}
          >
            Add Candidate
          </Link>
          <div></div>
        </div>
      )}
      {subpage==="newcandidate" && <CandidateForm/>}

      <BackgroundBeams />
    </div>
  );
};

export default AdminPage;
