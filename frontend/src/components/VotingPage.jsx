import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BackgroundBeams } from "./ui/background-beams";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { AuthContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";

const VotingPage = () => {
  const { user } = useContext(AuthContext);
  const [candidates, setCandidates] = useState([]);
  const navigate = useNavigate();

  if(!user) navigate('/login'); 

  useEffect(() => {
    async function getData() {
      const res = await axios.get("/candidate");
      const data = res.data;
      setCandidates(data);
    }

    getData();
  }, []);

  async function voteHandler({ id }) {
    // console.log("Voted", id);
    const res = await axios.patch("/vote", { candId: id });
    console.log(res.data);
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral-950 text-white">
      <h1 className=" font-bold text-2xl mb-8 ">List of Candidates</h1>
      <div className="relative z-10">
        {candidates.length > 0 &&
          candidates.map((cand, idx) => (
            <div key={cand._id} className="flex justify-between w-80 mb-4">
              <div className="flex gap-4 items-center">
                <img
                  src={cand.partyLogo}
                  className=" h-12 w-12 rounded-full object-cover"
                />
                <h1 className="text-xl uppercase font-roboto">
                  {cand.partyName}
                </h1>
              </div>
              <AlertDialog className="text-white bg-opacity-100">
                <AlertDialogTrigger className="border px-6 ">
                  Vote
                </AlertDialogTrigger>
                <AlertDialogContent className="text-white rounded-lg">
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. You can not vote other
                      candidate
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel className="rounded">
                      Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                      className="bg-white text-black rounded hover:bg-white/80"
                      onClick={() => voteHandler({ id: cand._id })}
                    >
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          ))}
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default VotingPage;
