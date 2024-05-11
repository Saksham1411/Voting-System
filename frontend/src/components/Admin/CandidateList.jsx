import axios from "axios";
import React, { useEffect, useState } from "react";

const CandidateList = () => {
  const [candidate, setCandidate] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await axios.get("/candidate");
      const data = res.data;
      setCandidate(data);
    }

    getData();
  }, []);

  const editCandidate = async()=>{};
  const deleteCandidate = async()=>{};
  
  return (
    <div className="flex flex-col gap-8 my-20">
      {/* <h1 className="">List of candidate</h1> */}
      {candidate.length > 0 &&
        candidate.map((cand) => (
          <div className="flex gap-12 items-center" key={cand._id}>
            <div className="flex gap-6">
              <img
                src={cand.partyLogo}
                className=" h-16 w-16 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p className="text-xl font-bold">Party Name</p>
                <p className="text-lg">{cand.partyName}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-xl font-bold">Candidate Name</p>
                <p className="text-lg">{cand.name}</p>
              </div>
            </div>
            <div className="flex gap-6 text-lg">
              <button onClick={editCandidate}>
                <i className="fa-solid fa-pencil"></i>
              </button>
              <button onClick={deleteCandidate}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CandidateList;
