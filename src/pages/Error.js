import React from "react";

// react router
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <h2 className="text-6xl font-bold my-2 text-indigo-500">404 Error</h2>
      <p className="bg-yellow-400 px-4 py-2 rounded-md text-white">
        <Link to="/"> Go back to Home</Link>
      </p>
    </div>
  );
};

export default Error;
