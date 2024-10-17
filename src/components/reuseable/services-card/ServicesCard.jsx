"use client";
import Image from "next/image";
import React, { useState } from "react";
// Importing icons from react-icons (e.g., RiUserVoiceLine for the user voice icon)
import { RiUserVoiceLine } from "react-icons/ri";
import { FaPlus, FaMinus  } from "react-icons/fa";
import CustomButton from "../custom-button/CustomButton";


const WhatWeDo = () => {
  const [defaultActive, setDefaultActive] = useState(1);
  const [show, setShow] = useState(1);
  const data = [
    {
      id: 1,
      image: "/brand_development.jpg",
      title: "BRAND DEVELOPMENT",
      number: "01",
      text: "Give your brand life that will stand the test of time. Effective branding is more than just a pretty logo; it tells your story, proves your identity, and establishes your personality. If you find yourself still pushing for sales, perhaps it's time to push that orange button and request an appointment today.",
    },
    {
      id: 2,
      number: "02",
      image: "/business_consulting .jpg",
      title: "BUSINESS CONSULTING",
      text: "With the business world constantly changing, some are forced to either take action or face the reality of closing the doors to their business. We saw an opportunity that could potentially save jobs & families alike. Remember the excitement you had when you first started?",
    },
    {
      id: 3,
      number: "03",
      image: "/Videography.jpg",
      title: "VIDEOGRAPHY",
      text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first. A short film could tell a story and captivate the audience at the same time. The possibilities are endless but the availabilities are limited. Book your appointment today.",
    },
    {
      id: 4,
      number: "04",
      image: "/Videography.jpg",
      title: "VIDEOGRAPHY",
      text: "Motion creates emotion, and the key to selling any product is to get your audience emotionally bought in first. A short film could tell a story and captivate the audience at the same time. The possibilities are endless but the availabilities are limited. Book your appointment today.",
    },
  ];

  return (
    <div className="relative pt-5 pb-10 lg:pb-20">
      <h3 className="lg:text-2xl text-lg font-bold text-center text-white capitalize">What We Do</h3>
      <h1 className="lg:text-6xl text-2xl font-bold montserrat  text-center text-gradient lg:mt-4 mb-5 lg:mb-16 max-w-3xl mx-auto">
        In what area do you need assistance
      </h1>
      <div className="container mx-auto flex flex-wrap lg:flex-row flex-col-reverse">
        <div className="w-full lg:w-1/2 mb-8">
          <div className="relative">
            <div className="absolute lg:-top-8 -top-0 left-0 z-10">
              <Image
                src={"/Ellipse_line_shape.svg"}
                width="740"
                height="720"
                alt="Decorative Shape"
              />
            </div>
            <div className="z-20 flex justify-center">
              <Image
                src={data.find((item) => item?.id === show)?.image}
                width="600"
                height="580"
                alt="Main Content"
                className="rounded-2xl"
              />
            </div>
            <div className=" absolute left-1/2 transform -translate-x-1/2 lg:-bottom-5 -bottom-8 z-50">
            <CustomButton href="/contact" text="Book a Appointment" Icon={RiUserVoiceLine} />       
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="accordion">
            {data.map((item) => (
              <div key={item?.id} className="mb-8">
                <h2 className="lg:text-2xl text-lg font-medium mb-4">
                  <button
                    className={`w-full flex justify-between text-white items-center px-8 py-6 rounded-full border border-white transition-all ${
                      defaultActive === item.id ? "bg-white text-gradient font-bold " : "bg-transparent text-white"
                    }`}
                    onClick={() => {
                      setShow(item.id);
                      setDefaultActive(item.id);
                    }}
                  >
                    <p><span className="mr-1">{item?.number}</span> {item?.title}</p>
                    {defaultActive === item?.id ? <FaMinus className="inline mr-2" color="text-white" /> :
                    <FaPlus className="inline mr-2" color="#fff" />}
                  </button>
                </h2>
                <div className={`px-8 transition-all ${defaultActive === item.id ? "block" : "hidden"}`}>
                  <p className="text-lg leading-relaxed text-white">{item?.text}</p>
                  <a href="/contact" target="_blank" rel="noreferrer" className="text-purple-500 mt-4 block">
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
