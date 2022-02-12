import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row items-center py-10 lg:pt-28 px-8 md:px-32 lg:px-38">
        <div className="w-full lg:w-1/2 mr-0 lg:mr-10">
          <p className="text-2xl lg:text-3xl">❤️✌️</p>
          <h2 className="w-full text-xl md:text-2xl lg:text-3xl font-bold py-2">
            Who We Are ?
          </h2>
          <h4 className="w-full text-md md:text-md lg:text-md font-medium py-2">
            We are here not for income, but for outcome
          </h4>
          <p className="w-full text-sm md:text-md lg:text-base  font-light text-slate-500 py-2">
            Lorem Aenean nec quam efficitur, volutpat felis quis, commodo lacus.
            Morbi feugiat orci vel urna semper, ac tempus nunc luctus. Etiam
            quis placerat purus. Nulla fringilla varius lacus, eget eleifend
            sapien malesuada eget. Phasellus porta magna diam, ut accumsan massa
            semper in. Aliquam elit lectus, tincidunt eget vulputate vel,
            faucibus vitae elit.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center pt-10 md:pt-0">
          <img
            src="https://media.istockphoto.com/photos/male-medical-professional-is-confident-in-studio-picture-id1201439096?k=20&m=1201439096&s=170667a&w=0&h=aYuJxV4SkvfMRjuacN_UeOn4t4aixa08wpPZxvBa82w="
            alt="about us"
            className="w-full py-0 md:mt-6 lg:mt-0"
          />
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row items-center py-10 lg:pt-28 px-8 md:px-32 lg:px-38 ">
        <div className="w-full lg:w-1/2 flex items-center justify-center pt-10 md:pt-0 order-2 lg:order-1">
          <img
            src="https://www.moorelands.ca/wp-content/uploads/2019/11/iStock-1128786757.jpg"
            alt="donate us"
            className="w-full py-0 md:py-4"
          />
        </div>
        <div className="w-full lg:w-1/2 ml-0 lg:ml-12 order-1 lg:order-2">
          <p className="text-2xl lg:text-4xl">🙌✨</p>
          <h2 className="w-full text-xl md:text-3xl font-bold py-2">
            Support our non-profit mission 👏
          </h2>
          <p className="w-full text-sm md:text-md lg:text-base  font-light text-slate-500 py-2">
            Lorem Aenean nec quam efficitur, volutpat felis quis, commodo lacus.
            Morbi feugiat orci vel urna semper, ac tempus nunc luctus. Etiam
            quis placerat purus. Nulla fringilla varius lacus, eget eleifend
            sapien malesuada eget. Phasellus porta magna diam, ut accumsan massa
            semper in. Aliquam elit lectus, tincidunt eget vulputate vel,
            faucibus vitae elit.
          </p>
          <div className="inline-block shadow mt-5 lg:mt-10   rounded-md">
            <Link to="/donate">
              <p
                href="/"
                className="inline-block py-3 px-4 bg-indigo-500 hover:bg-indigo-400 text-white font-medium border-none rounded-md"
              >
                Donate
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutContent;