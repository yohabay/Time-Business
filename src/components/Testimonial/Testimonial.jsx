// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Yohannis Abay - Entrepreneur, Addis Ababa",
    text: "The training I received from TimePlc was a turning point for my business. Their comprehensive courses on financing strategies have helped me manage my funds more effectively.",
    img: "src/assets/image.png",
  },
  {
    id: 2,
    name: "Marta Alemayehu - Small Business Owner, Bahirdar",
    text: "Thanks to TimePlc's consulting services, I gained access to invaluable resources and training. Their support in the health sector has empowered my business to thrive during challenging times.",
    img: "src/assets/smallbusiness.jpeg",
  },
  {
    id: 3,
    name: "Kedir Ibrahim - Community Leader, Mekelle",
    text: "TimePlc's training programs have equipped me with the skills to lead community health initiatives effectively. Their insights into financing have also opened up new opportunities for our projects.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div className="py-10">
        <div className="container">
          {/* testimonial section */}
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 max-w-screen-xl mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    {/* card */}
                    <div className="flex flex-col sm:flex-row gap-5 md:gap-14 p-4 mx-4 rounded-xl dark:bg-gray-800 relative">
                      <img
                        src={img}
                        alt=""
                        className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover"
                      />
                      <div className="space-y-4">
                        <p className="text-gray-500 text-black/80 dark:text-white/80 xl:pr-40">
                          “{text}”
                        </p>
                        <h1 className="text-xl font-bold">{name}</h1>
                      </div>
                      <p className="text-black/10 text-[12rem] font-serif absolute bottom-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
