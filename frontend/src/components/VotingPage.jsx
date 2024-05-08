import React from "react";
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

const VotingPage = () => {
  const data = ["bjp", "avc", "abc", "def", "tgh"];

  function voteHandler() {
    console.log("Voted");
  }
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral-950 text-white">
      <h1 className=" font-bold text-2xl mb-8 ">List of Candidates</h1>
      <div className="relative z-10">
        {data.map((partyName, idx) => (
          <div key={idx} className="flex justify-between w-60 mb-4">
            <h1 className="text-lg uppercase">{partyName}</h1>
            <AlertDialog className="text-white bg-opacity-100">
              <AlertDialogTrigger className="border px-4 py-1">Vote</AlertDialogTrigger>
              <AlertDialogContent className="text-white rounded-lg">
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. You can not vote other candidate
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="rounded">Cancel</AlertDialogCancel>
                  <AlertDialogAction className="bg-white text-black rounded hover:bg-white/80" onClick={voteHandler}>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

            {/* <button
              onClick={voteHandler}
              className="border px-4 py-1 border-white rounded-md text-white hover:bg-gray-500"
            >
              Vote
            </button> */}
          </div>
        ))}
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default VotingPage;
