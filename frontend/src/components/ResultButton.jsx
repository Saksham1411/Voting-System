import React from "react";
import { Link } from "react-router-dom";

const ResultButton = () => {
  return (
    <Link
      to={"/result"}
      className="absolute z-40 text-white border border-white py-2 px-4 -right-1/2 top-0 rounded hover:bg-white hover:text-black font-semibold "
    >
      See Result
    </Link>
  );
};

export default ResultButton;
