import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <main className="bg-indigo-600">
      <div className="flex flex-col md:flex-row items-center py-8 md:py-24 lg:py-28 px-8 md:px-6 lg:px-4 ">
        <div className="w-full lg:w-1/2 text-white flex flex-col items-center">
          <div className="w-full lg:w-3/4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold">
              Be the change you want to see in this world
            </h2>
            <h4 className="text-md md:text-lg lg:text-2xl font-medium py-3">
              Ready to dive in?
            </h4>
            <p className="text-sm md:text-sm lg:text-base py-1">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="/donate">
              <p className="inline-block py-2 lg:py-3 px-3 lg:px-4 bg-yellow-500 hover:bg-yellow-400 text-white font-medium text-sm lg:text-base border border-transparent rounded-md mt-5">
                Donate
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2 mt-8 lg:mt-0 ml-0 md:ml-5 lg:ml-0">
          <img
            src="https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=170667a&w=0&h=p8oRJ0sxoggv0ky00N6rhpJM8ld0j-1b0IuipQrTctA="
            alt="child smiling"
            className="p-0 md:p-4 lg:p-0 rounded-md"
          />
        </div>
      </div>
    </main>
  );
};

export default Main;
