"use client"
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';
import { MdOutlineVisibility } from "react-icons/md";

import { RiMessage3Line } from 'react-icons/ri';
import CustomButton from '../reuseable/custom-button/CustomButton';

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
          slidesToShow: 1,
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
      hoverImage: '/product-1.png',
      image: '/product-2.png',
      title: 'AddItion (E-Commerce Frontend)',
      url: 'https://additionbhu.vercel.app/',
    },
    {
      id: 2,
      hoverImage: '/hover-1.png',
      image: '/gallery-3.png',
      title: 'Career Props',
      url: 'https://career-props.vercel.app/',
    },
    {
        id: 3,
        hoverImage: '/hover-2.png',
        image: '/service-1.png',
        title: 'brangerine',
        url: 'https://brangerine-ukcf.vercel.app/',
      },
      {
        id: 4,
        hoverImage: '/hover-3.png',
        image: '/service-2.png',
        title: 'Tax Case Study',
        url: 'https://tax-5.vercel.app/',
      },
      {
        id: 5,
        hoverImage: '/hover-4.png',
        image: '/service-3.png',
        title: 'Pos Props',
        url: 'https://pos-props.vercel.app/',
      },
      {
        id: 6,
        hoverImage: '/service-4.png',
        image: '/hover-5.png',
        title: 'Restaurants Website',
        url: 'https://aladdinshut.com/',
      },
      {
        id: 7,
        hoverImage: '/hover-6.png',
        image: '/service-5.png',
        title: 'Tiger new energy',
        url: 'https://tigernewenergy.com/',
      },
      {
        id: 8,
        hoverImage: '/hover-7.png',
        image: '/service-6.png',
        title: 'Tiggzy It',
        url: 'https://tiggzyit.com/',
      },
   
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
            <div key={item.id} className="p-1 ">
              <div
                className="relative xl:w-[550px] cursor-pointer overflow-hidden xl:h-[350px] lg:h-[300px] h-[280px]"
                onMouseEnter={() => setShow(item.id)}
                onMouseLeave={() => setShow(null)}
              >
                <Image
                  width={560}
                  height={385}
                  src={item.id === show ? item.hoverImage : item.image}
                  alt="Case Study"
                  className={`rounded border ${item.hoverImage && item.id === show ? "fade-in" : ""}`}
                />
                {item.id === show && (
                    <div className="w-full h-full bg-slate-700 bg-opacity-70 absolute top-0 left-1/2 transform -translate-x-1/2">
                        <div className='flex flex-col justify-center items-center gap-5'>
                          <h2 className="text-3xl text-white font-bold capitalize mt-20">{item?.title}</h2>
                        <Link target='_blank' href={item?.url}  className="theme-btn lg:text-sm bg-custom-gradient text-white montserrat font-semibold">{"Vîsït"}</Link>
                        </div>                    
                    </div>                  
                )}
              </div>
            </div>
          ))}
        </Slider>

        <div className="container">
         <div className="flex justify-center lg:my-10 my-5">
          <CustomButton href="https://docs.google.com/document/d/1rADskxGCWAM4tTQmoOosOWTk81lhxdfM/edit?usp=sharing&ouid=116522643235246232376&rtpof=true&sd=true" text="Check Out All Projects!" Icon={MdOutlineVisibility} />        
                    </div>
        </div>
      
    </div>
  );
};

export default CaseStudies;
