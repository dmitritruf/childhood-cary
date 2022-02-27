import React from "react";
import Marquee from "react-fast-marquee";

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

const Ad = () => {
  return (
    <section className="bg-white py-2">
      <div>
        <Marquee speed={40} gradient={false}>
          {photos.map((photo) => (
            <div key={photo.id} className="mx-5">
              <img
                src={photo.url}
                alt="marquee"
                className=" h-24 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Ad;
