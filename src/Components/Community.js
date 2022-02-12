import React from "react";

const Community = () => {
  return (
    <div className="md:py-12 py-12 ">
      <div className="flex items-center justify-center">
        <div className="xl:w-1/2 w-11/12 text-center sm:py-10 ">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:leading-10 leading-0 text-center text-gray-800">
            Touching hundreds of lives
          </h1>
          <h2
            role="contentinfo"
            className="text-sm md:text-md lg:text-lg leading-normal text-center text-gray-600 mt-5"
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            Lorem Ipsum is simply dummy text of the printing
          </h2>
        </div>
      </div>
      <div className="2xl:px-20 lg:px-12 px-4 lg:flex lg:flex-wrap items-start mt-4 justify-center hidden ">
        <div className="mt-24">
          <div className="flex items-end">
            <img
              src="https://t4.ftcdn.net/jpg/02/51/31/59/360_F_251315912_Sy8fch17ntOYndtKYRco9q2RZR6dOh2g.jpg"
              alt="girl with blue background"
              className="w-20 h-20 rounded-lg mr-6 object-cover"
            />
            <img
              src="https://t3.ftcdn.net/jpg/04/70/73/92/360_F_470739284_cWmgg2GRyltUDNuD2XBP2dY5JNvmwJn4.jpg"
              alt="guy winking"
              className="w-48 h-36 rounded-lg"
            />
          </div>
          <div className="flex items-center justify-end my-6">
            <img
              src="data:image/jpeg;base64,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"
              alt="guy smiling"
            />
          </div>
          <div className="flex items-start">
            <img
              src="https://t4.ftcdn.net/jpg/04/51/82/05/360_F_451820501_5eimhFdLxYvly8Cz7JNg8um5ZvLjz1yu.jpg"
              alt="girl with purple background"
              className="w-48 h-48 rounded-lg object-cover"
            />
            <img
              src="https://t4.ftcdn.net/jpg/04/57/81/77/360_F_457817741_SliMDStJ61zBRZTp34coR3bfMCOWIkLu.jpg"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 flex-shrink-0 object-cover object-fit"
            />
          </div>
        </div>
        <div className="ml-6 mt-32">
          <img
            src="https://media.istockphoto.com/photos/smiling-boy-wearing-glasses-in-studio-picture-id1285993435?b=1&k=20&m=1285993435&s=170667a&w=0&h=qBmxbDpIyyXobCnNncdB3jfxTszG4dEZjMzqWPr0dyw="
            className="w-72 h-80 rounded-lg object-cover"
            alt="guy with sunglasses"
          />
          <div className="flex items-start mt-6">
            <img
              src="https://t4.ftcdn.net/jpg/03/12/40/95/360_F_312409540_yAunH5TJw9KOufrvUSN16TVt6SXVkbaZ.jpg"
              alt="girl  laughing"
              className="w-48 h-48 rounded-lg object-cover"
            />
            <img
              src="https://t3.ftcdn.net/jpg/02/88/01/98/360_F_288019837_M5b7qGaXpmMfWOSgso53PWQu9rIdg5et.jpg"
              alt="guy with glasses"
              className="w-20 h-20 rounded-lg ml-6 object-cover object-fit"
            />
          </div>
        </div>
        <div className="mt-14 ml-6">
          <div className="lg:flex">
            <div>
              <img
                src="https://thumbs.dreamstime.com/b/happy-asian-little-child-girl-showing-his-muscle-looking-camera-isolated-yellow-background-copy-space-strong-kid-174730396.jpg"
                alt="group of friends"
                className="w-96 h-72 rounded-lg object-center object-cover"
              />
            </div>
            <div>
              <div className="flex ml-6">
                <img
                  src="https://thumbs.dreamstime.com/b/happy-little-asian-girl-shaking-fists-making-winner-gesture-yes-standing-studio-isolated-over-pastel-purple-wall-185092407.jpg"
                  className="w-20 h-20 rounded-lg mt-14 object-cover"
                  alt="man"
                />
                <img
                  src="https://thumbs.dreamstime.com/b/happy-little-asian-girl-raising-fists-making-winner-gesture-yes-happy-little-asian-girl-raising-fists-up-standing-studio-185928282.jpg"
                  className="w-20 h-24 rounded-lg ml-6 object-cover"
                  alt="woman"
                />
              </div>
              <img
                src="https://thumbs.dreamstime.com/b/happy-winner-little-girl-making-winning-gesture-yellow-background-cheerful-small-child-smiling-fashion-look-adorable-kid-157426088.jpg"
                alt="boy with blonde hair"
                className="ml-6 mt-6 w-48 h-32 rounded-lg"
              />
            </div>
          </div>
          <div className="mt-6 flex">
            <img
              className="w-48 h-48 rounded-lg object-cover"
              src="https://thumbs.dreamstime.com/b/happy-winner-successful-kid-achieve-success-cheerful-celebrate-victory-girl-cute-child-long-curly-hair-smiling-achievement-134638409.jpghttps://thumbs.dreamstime.com/b/happy-winner-successful-kid-achieve-success-cheerful-celebrate-victory-girl-cute-child-long-curly-hair-smiling-achievement-134638409.jpg"
              alt="young girl with red hair"
            />
            <img
              className="w-72 h-56 rounded-lg ml-6"
              src="https://i.ibb.co/VBcgkVL/Rectangle-11.png"
              alt="young girl with red hair"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
