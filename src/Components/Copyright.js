import React from "react";

const Copyright = () => {
  const date = new Date();
  return (
    <div className="text-center bg-gray-800 text-white py-4 md:py-5 lg:py-6">
      <p>&copy; earlychildhoodcaries.com - {date.getFullYear()}</p>
    </div>
  );
};

export default Copyright;
