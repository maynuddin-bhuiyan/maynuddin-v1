"use client";
import { useState, useEffect } from "react";
import CustomButton from "../custom-button/CustomButton";
import Image from "next/image";
import { FcCalendar } from "react-icons/fc";
import { FaPlus } from "react-icons/fa";

const WhatWeDo = () => {
  const [defaultActive, setDefaultActive] = useState(1);
  const [show, setShow] = useState(1);
  const [imageFade, setImageFade] = useState(false);

  const data = [
    {
      id: 1,
      image: "/web.webp",
      title: "Web systems development",
      number: "01",
      text: "'Web systems development': involves designing and building the technical infrastructure that powers web applications and websites. It encompasses both front-end (user interface) and back-end (server-side) development, integrating databases, servers, and APIs to ensure seamless functionality. This process includes writing code, configuring servers, managing data flow, and ensuring security, scalability, and performance.",
    },
    {
      id: 2,
      number: "02",
      image: "/headless.webp",
      title: "Headless CMS with WordPress",
      text: "'Headless CMS with WordPress': uses WordPress as a backend solely for content management, while the frontend is handled separately by frameworks like React, Vue, or Next.js. In this decoupled setup, content is delivered via WordPress's REST API or GraphQL to different frontends, enabling more flexible design, faster performance, and enhanced scalability.",
    },
    {
      id: 3,
      number: "03",
      image: "/frontend.webp",
      title: "Frontend architecture",
      text: "'Frontend architecture': refers to the structure and design of software or web applications that run on the user's device (browser or app) rather than the server. It involves managing how the user interface (UI), functionality, and data processing are handled on the client side. Technologies like HTML, CSS, JavaScript, and frameworks such as React, Vue, or Angular are used to build responsive, interactive experiences directly in the browser.",
    },
    {
      id: 4,
      number: "04",
      image: "/online.webp",
      title: "Online platform creation",
      text: "'Online platform creation': refers to the development and launch of digital environments where users can interact, engage, or conduct activities such as e-commerce, social networking, learning, or content sharing. This process involves designing and building a user-friendly interface, backend infrastructure, and integrating features like user authentication, payment systems, and content management.",
    },
  ];

  const handleImageChange = (id) => {
    setImageFade(false); // Reset the animation
    setTimeout(() => {
      setShow(id); // Change image
      setImageFade(true); // Trigger the fade-in effect
    }, 100); // Delay to ensure fade-out happens before the new image
  };

  return (
    <div className="relative pt-5 pb-10 lg:pb-32 xl:h-[1100px]">
      <h3 className="lg:text-2xl text-lg font-bold text-center text-white capitalize">My Capabilities</h3>
      <h1 className="lg:text-6xl text-2xl font-bold montserrat text-center text-gradient lg:mt-4 mb-5 lg:mb-16 max-w-3xl mx-auto">
        In what area do you need assistance
      </h1>
      <div className="container mx-auto flex flex-wrap lg:flex-row flex-col-reverse lg:gap-7">
        <div className="w-full lg:w-[48%] mb-8 ">
          <div className="relative">
            <div className="absolute lg:-top-8 -top-0 left-0 z-10">
              <Image
                src={"/Ellipse_line_shape.svg"}
                width="740"
                height="720"
                alt="Decorative Shape"
              />
            </div>
            <div className={`z-20 flex justify-center ${imageFade ? "fade-in" : ""}`}>
              <Image
                src={data.find((item) => item?.id === show)?.image}
                width="600"
                height="580"
                alt="Main Content"
                className="rounded-2xl"
              />
            </div>
            <div className={`absolute left-1/2 transform -translate-x-1/2 lg:-bottom-5 -bottom-8 z-50`}>
              <CustomButton href="https://calendly.com/maynuddinbhu14grm/30min" text="Let's explore a project" Icon={FcCalendar} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="accordion">
            {data.map((item) => (
              <div key={item?.id} className="mb-8">
                <h2 className="lg:text-2xl font-medium mb-4">
                  <button
                    className={`w-full flex justify-between text-white items-center px-5 lg:px-8 py-3 lg:py-6 rounded-full border border-white transition-all ${
                      defaultActive === item.id ? "bg-white text-gradient font-bold " : "bg-transparent text-white"
                    }`}
                    onClick={() => {
                      handleImageChange(item.id);
                      setDefaultActive(item.id);
                    }}
                  >
                    <p>
                      <span className="mr-1">{item?.number}</span> {item?.title}
                    </p>
                    {defaultActive === item?.id ? "" : <FaPlus className="inline lg:mr-2" color="#fff" />}
                  </button>
                </h2>
                <div className={`lg:px-8 px-3 transition-all ${imageFade ? "fade-in" : ""} ${defaultActive === item.id ? "block" : "hidden"}`}>
                  <p className="text-sm lg:text-base !text-[#c2c0c0]">{item?.text}</p>
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

