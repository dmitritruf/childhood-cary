import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const photos = [
  {
    id: 1,
    url: "https://reading.pk/wp-content/uploads/2019/03/MCPS-in-Pakistan.png",
  },
  {
    id: 2,
    url: "https://laparoscopictraining.in/images/about-banner.png",
  },
  {
    id: 3,
    url: "https://reading.pk/wp-content/uploads/2019/03/MCPS-in-Pakistan.png",
  },
  {
    id: 4,
    url: "https://laparoscopictraining.in/images/about-banner.png",
  },
];

const Ads = () => {
  return (
    <div>
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
                style={{ height: "150px" }}
                className="w-full object-cover md:object-contain"
              />
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default Ads;
