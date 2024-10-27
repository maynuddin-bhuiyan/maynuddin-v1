"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CaseStudies = () => {
  const CaseStudiesSlider = useRef(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const gotoNext = () => {
    CaseStudiesSlider.current.slickNext();
  };

  const gotoPrev = () => {
    CaseStudiesSlider.current.slickPrev();
  };

  const [show, setShow] = useState(null);

  const data = [
    {
      id: 1,
      hoverImage: '/hover-1.png',
      image: '/gallery-3.png',
      butText: 'View Case Study',
      url: '/',
    },
    {
        id: 8,
        hoverImage: '/case-1.png',
        image: '/case-2.jpg',
        butText: 'View Case Study',
        url: '/',
      },
      {
        id: 9,
        hoverImage: '/case-1.png',
        image: '/case-2.jpg',
        butText: 'View Case Study',
        url: '/',
      },
      {
        id: 7,
        hoverImage: '/case-1.png',
        image: '/case-2.jpg',
        butText: 'View Case Study',
        url: '/',
      },
      {
        id: 2,
        hoverImage: '/case-1.png',
        image: '/case-2.jpg',
        butText: 'View Case Study',
        url: '/',
      },
      {
        id: 5,
        hoverImage: '/case-1.png',
        image: '/case-2.jpg',
        butText: 'View Case Study',
        url: '/',
      },
      {
        id: 3,
        hoverImage: '/case-1.png',
        image: '/case-2.jpg',
        butText: 'View Case Study',
        url: '/',
      },
    // More case studies...
  ];

  return (
    <div className="py-12 relative">
      <div className="container">
        <div className="flex justify-between items-center mb-5 lg:mb-10">
            <div className='flex flex-col justify-end items-center lg:w-full'>
            <h3 className="lg:text-lg font-medium text-indigo-500 lg:mb-2">PAST PROJECTS</h3>
            <h1 className="lg:text-4xl text-lg font-bold text-gradient">Case Studies</h1>
            </div>
          
          <div className="flex space-x-4 ">
            <button onClick={gotoPrev} className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">
              <FaArrowLeft />
            </button>
            <button onClick={gotoNext} className="w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition">
              <FaArrowRight />
            </button>
          </div>
        </div>
        </div>
        <Slider {...settings} className="slickSlider 2xl:ml-20 xl:ml-14 lg:ml-10 md:ml-5 ml-1" ref={CaseStudiesSlider}>
          {data.map((item) => (
            <div key={item.id} className="p-1">
              <div
                className="relative w-[550px] cursor-pointer overflow-hidden h-[350px]"
                onMouseEnter={() => setShow(item.id)}
                onMouseLeave={() => setShow(null)}
              >
                <Image
                  width={560}
                  height={385}
                  src={item.id === show ? item.hoverImage : item.image}
                  alt="Case Study"
                  className={`rounded ${item.hoverImage && item.id === show ? "fade-in" : ""}`}
                />
                {item.id === show && (
                    <div className="w-full h-full bg-slate-700 bg-opacity-70 absolute top-0 left-1/2 transform -translate-x-1/2">
                        <div className='flex flex-col justify-center items-center gap-5'>
                          <h2 className="text-3xl text-black font-bold capitalize mt-20">maynuddin</h2>
                        <button className="theme-btn lg:text-sm bg-custom-gradient text-white montserrat font-semibold">{"Vîsït"}</button>
                        {/* <button className="theme-btn lg:text-sm bg-custom-gradient text-white montserrat font-semibold">{"Code"}</button> */}
                        </div>
                    {/* <CustomButton href="/contact" text={item.butText} Icon={FaArrowRight} />        */}
                    </div>
                  
                )}
              </div>
            </div>
          ))}
        </Slider>
      
    </div>
  );
};

export default CaseStudies;
