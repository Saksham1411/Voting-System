import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CandidateForm = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [partyName, setPartyName] = useState("");
  const [partyLogo, setPartyLogo] = useState("");
  const navigate = useNavigate();

  const uploadPhoto = async (e) => {
    const files = e.target.files;
    console.log(files);
    const reqBody = new FormData();
    reqBody.append("logo", files[0]);

    const { data } = await axios.post("/uploadImage", reqBody, {
      headers: { "Content-type": "multipart/form-data" },
    });
    setPartyLogo(data);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/candidate", {
        name,
        partyName,
        date,
        partyLogo,
      });
      console.log(res);
      navigate('/admin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full w-full flex flex-col gap-4 items-center justify-center relative z-20">
      <h1 className="text-2xl font-roboto">Add Candidate</h1>
      <form
        className="flex flex-col gap-4 w-1/4 border p-12 rounded-xl bg-black/30"
        onSubmit={submitHandler}
      >
        <label>Candidate Name</label>
        <input
          type="text"
          placeholder="Candidate name"
          className="px-4 py-1 text-lg rounded bg-black/60"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Date of birth</label>
        <input
          type="date"
          placeholder="hihi"
          className="px-4 py-1 text-lg rounded bg-black/60"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <label>Party Name</label>
        <input
          type="text"
          placeholder="hihi"
          className="px-4 py-1 text-lg rounded bg-black/60"
          value={partyName}
          onChange={(e) => setPartyName(e.target.value)}
        />
        <label>Party logo</label>
        <input type="file" onChange={uploadPhoto} />
        <button
          type="submit"
          className="px-4 py-1 text-lg rounded bg-white/90 text-black"
        >
          Add Candidate
        </button>
      </form>
    </div>
  );
};

export default CandidateForm;
