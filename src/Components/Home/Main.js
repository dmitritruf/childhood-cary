import React from "react";
// react router
import { Link } from "react-router-dom";
// swiper js
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const photos = [
  {
    id: 1,
    url: "https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=170667a&w=0&h=p8oRJ0sxoggv0ky00N6rhpJM8ld0j-1b0IuipQrTctA=",
  },
  {
    id: 2,
    url: "https://t4.ftcdn.net/jpg/03/12/40/95/360_F_312409540_yAunH5TJw9KOufrvUSN16TVt6SXVkbaZ.jpg",
  },
  {
    id: 3,
    url: "https://t3.ftcdn.net/jpg/04/70/73/92/360_F_470739284_cWmgg2GRyltUDNuD2XBP2dY5JNvmwJn4.jpg",
  },
  {
    id: 4,
    url: "https://media.istockphoto.com/photos/yellow-girl-picture-id1298983796?k=20&m=1298983796&s=612x612&w=0&h=qyH3nloHKN5spkUp1-dTCHtp7lJQ9jBFA2fJvXtID8U=",
  },
];

const Main = () => {
  return (
    <main className="bg-gradient-to-b from-indigo-600 via-indigo-600 to-indigo-500">
      <div className="flex flex-col md:flex-row items-center py-8 md:py-24 lg:py-28 px-8 md:px-6 lg:px-4 ">
        <div className="w-full lg:w-1/2 text-white flex flex-col items-center">
          <div className="w-full lg:w-3/4">
            <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold">
              Be the <span className="text-yellow-300">change</span> you want to
              see in this world
            </h2>
            {/* <h4 className="text-md md:text-2lg lg:text-3xl font-medium py-3">
              Ready to dive in?
            </h4> */}
            <p className="text-sm md:text-sm lg:text-base py-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="/donate">
              <p className="inline-block py-2 lg:py-3 px-3 lg:px-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-400 hover:to-yellow-400 text-white font-medium text-sm lg:text-base border border-transparent rounded-md mt-5">
                Donate
              </p>
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-1/2 lg:w-2/5 mt-8 lg:mt-0 ml-0 md:ml-5 lg:ml-8 max-w-lg lg:max-w-none">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {photos.map((photo, index) => (
              <div key={index}>
                <SwiperSlide>
                  <img
                    src={photo.url}
                    alt="slider"
                    className="p-0 md:p-4 lg:p-0 rounded-md w-full object-contain"
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Main;
