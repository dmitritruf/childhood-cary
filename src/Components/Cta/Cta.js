import React from "react";
// react router
import { Link } from "react-router-dom";
// react icons
import { GrContact } from "react-icons/gr";

const Cta = () => {
  return (
    <section className="w-full mx-auto flex flex-col text-center">
      <div className=" py-6 md:py-8" style={{ backgroundColor: "#fcf04e" }}>
        <h2 className="text-2xl md:text-4xl lg:text-4xl tracking-tight font-extrabold text-gray-800">
          Contact us
        </h2>
        <div className="flex justify-center items-center py-4">
          <GrContact className=" text-4xl my-2" />
        </div>
        <p className="text-base leading-normal font-medium text-gray-800 px-4">
          Call{" "}
          <a href="tel:9940595094">
            <strong className="px-3 hover:text-gray-600 underline decoration-1">
              +91-9940595094
            </strong>{" "}
          </a>{" "}
          or{" "}
          <Link to="/contact">
            <button className="text-base leading-normal font-semibold text-gray-800 px-3 hover:text-gray-600 underline decoration-1">
              send us a message
            </button>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Cta;
