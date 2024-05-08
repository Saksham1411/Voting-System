import React from "react";

const CandidateForm = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-center relative z-20">
      <h1 className="text-2xl font-roboto">Add Candidate</h1>
      <form className="flex flex-col gap-4 w-1/4 border p-12 rounded-xl bg-black/30">
        <label>Candidate Name</label>
        <input type="text" placeholder="Candidate name" className="px-4 py-1 text-lg rounded bg-black/60"/>
        <label>Date of birth</label>
        <input type="date" placeholder="hihi" className="px-4 py-1 text-lg rounded bg-black/60"/>
        <label>Party Name</label>
        <input type="text" placeholder="hihi" className="px-4 py-1 text-lg rounded bg-black/60"/>
        <label>Party logo</label>
        <input type="file" />
        <button type="submit" className="px-4 py-1 text-lg rounded bg-white/90 text-black">Add Candidate</button>
      </form>
    </div>
  );
};

export default CandidateForm;
