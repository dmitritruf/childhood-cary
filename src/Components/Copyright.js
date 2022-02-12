import React from "react";

const Copyright = () => {
  const date = new Date();
  return (
    <div className="text-center bg-gray-800 text-white py-4 md:py-7 lg:py-9">
      <p>&copy; earlychildhoodcaries.com - {date.getFullYear()}</p>
    </div>
  );
};

export default Copyright;
