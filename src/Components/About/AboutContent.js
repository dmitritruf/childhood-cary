import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row items-center py-10 lg:py-24 px-8 md:px-32 lg:px-38 bg-white text-gray-800">
        <div className="w-full lg:w-1/2 mr-0 lg:mr-10">
          {/* <p className="text-2xl lg:text-3xl">❤️✌️</p> */}
          <h2 className="w-full text-xl md:text-3xl lg:text-4xl font-bold py-2 ">
            Who we are ?
          </h2>
          <h4 className="w-full text-sm md:text-md lg:text-lg  font-medium py-2 ">
            We are here not for income, but for outcome
          </h4>
          <p className="w-full text-sm md:text-md lg:text-lg   font-light text-slate-500 py-2 ">
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
            src="https://media.istockphoto.com/photos/3d-render-doctor-cartoon-character-with-stethoscope-wears-blue-latex-picture-id1321519614?k=20&m=1321519614&s=612x612&w=0&h=ivyInmMisxT23eEvIrEsUqG_acIX-fNFvG8NJjoyjFw="
            alt="about us"
            className="w-full py-0 md:mt-6 lg:mt-0 rounded-md"
          />
        </div>
      </section>

      <section className="w-full flex flex-col lg:flex-row items-center py-10 lg:py-18 px-8 md:px-32 lg:px-38 bg-white text-gray-800 mb-5 ">
        <div className="w-full lg:w-1/2 flex items-center justify-center pt-10 md:pt-0 order-2 lg:order-1 rounded-md">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/charity-giving-and-donation-3077528-2591080.png"
            alt="donate us"
            className="w-full py-0 rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 ml-0 lg:ml-12 order-1 lg:order-2">
          {/* <p className="text-2xl lg:text-4xl">🙌✨</p> */}
          <h2 className="w-full text-xl md:text-3xl lg:text-4xl font-bold py-2">
            <span className="text-indigo-500">Support</span> our non-profit
            mission 👏
          </h2>
          <p className="w-full text-sm md:text-md lg:text-lg  font-light text-slate-500 py-2">
            Lorem Aenean nec quam efficitur, volutpat felis quis, commodo lacus.
            Morbi feugiat orci vel urna semper, ac tempus nunc luctus. Etiam
            quis placerat purus. Nulla fringilla varius lacus, eget eleifend
            sapien malesuada eget. Phasellus porta magna diam, ut accumsan massa
            semper in. Aliquam elit lectus, tincidunt eget vulputate vel,
            faucibus vitae elit.
          </p>
          <div className="inline-block shadow mt-5 lg:mt-6   rounded-md">
            <Link to="/donate">
              <p className="inline-block py-3 px-4 bg-yellow-400 hover:bg-yellow-300  font-medium border-none rounded-md text-white">
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
