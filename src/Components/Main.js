import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-indigo-600">
      <div className="lg:grid lg:grid-cols-2 md:py-8">
        <div className="pt-12 pb-8 md:py-20 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl  tracking-tight font-extrabold text-gray-100 ">
            <span className="block">
              Be the change you want to see in this world.
            </span>
            <span className="block mt-2 text-xl md:text-2xl lg:text-3xl">
              Ready to dive in?
            </span>
          </h2>
          <p className="text-gray-300 mt-5 lg:mt-7">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <div className="inline-block shadow mt-5 lg:mt-10">
            <Link to="/donate">
              <p
                href="/"
                className="inline-block py-3 px-4 bg-yellow-500 hover:bg-yellow-400 text-white font-medium border border-transparent rounded-md"
              >
                Donate
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:relative sm:mt-0 lg:mt-16 flex items-center justify-center">
          <img
            className="lg:absolute lg:inset-0 h-56 w-full lg:w-3/4 lg:h-full object-contain md:object-cover  object-center lg:rounded-tl-md  py-6 max-w-lg xl:max-w-xlg"
            src="https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=170667a&w=0&h=p8oRJ0sxoggv0ky00N6rhpJM8ld0j-1b0IuipQrTctA="
            alt="Child smiling"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
