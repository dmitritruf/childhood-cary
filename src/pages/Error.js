import React from "react";

// react router
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full">
      <img
        src="https://cdn3d.iconscout.com/3d/premium/thumb/404-3025721-2526919.png"
        alt="404 error"
        className="w-1/2 h-1/2 object-contain"
      />
      <h2 className="text-4xl font-bold my-2 text-indigo-500">Oh no!!</h2>
      <h4 className="pb-2">You landed on a page that doesn't exist</h4>
      <p className="bg-yellow-400 px-4 py-2 rounded-md text-white">
        <Link to="/"> Go back to Home</Link>
      </p>
    </div>
  );
};

export default Error;
