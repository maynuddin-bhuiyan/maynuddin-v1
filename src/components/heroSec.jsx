"use client";
import Image from "next/image";
import CustomButton from "./reuseable/custom-button/CustomButton";
import CustomOutline from "./reuseable/custom-outline/CustomOutline";
import { RiMessage3Line } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function HeroSection() {
  const staticText = "I'm "; // Text that remains static
const texts = [
  "Maynuddin Bhuiyan,",
  "a Frontend Developer,",
  "an expert in React.js and Next.js,",
  "skilled in Bootstrap, MaterialUI, and Tailwind CSS,",
  "experienced with tools like Git, Webpack, Chrome DevTools, and VS Code.",
];

  const [displayedText, setDisplayedText] = useState(""); // Current animated text
  const [currentIndex, setCurrentIndex] = useState(0); // Current sentence index
  const [charIndex, setCharIndex] = useState(0); // Current character index
  const [animationComplete, setAnimationComplete] = useState(false); // Tracks if animation is complete

  useEffect(() => {
    if (currentIndex < texts.length && !animationComplete) {
      const sentence = texts[currentIndex];
      const interval = setInterval(() => {
        if (charIndex < sentence.length) {
          setDisplayedText((prev) => prev + sentence[charIndex]); // Add next character
          setCharIndex((prev) => prev + 1);
        } else {
          clearInterval(interval);
          setTimeout(() => {
            if (currentIndex < texts.length - 1) {
              setDisplayedText(""); // Clear animated text
              setCharIndex(0); // Reset character index
              setCurrentIndex((prev) => prev + 1); // Move to next sentence
            } else {
              setAnimationComplete(true); // Mark animation as complete
            }
          }, 2000); // Pause before the next sentence
        }
      }, 100); // Character delay
      return () => clearInterval(interval);
    }
  }, [currentIndex, charIndex, animationComplete]);

  return (
    <div className="h-max relative lg:pt-14 pb-40">
      <div className="absolute bottom-5 left-0 bounce-fade">
        <Image src={"/tailwind.svg"} alt="img" width={150} height={100} />
      </div>
      <div className="absolute xl:-top-10 xl:-left-5 lg:left-0 zoom lg:block hidden">
        <Image src={"/js.svg"} alt="img" width={150} height={100} />
      </div>

      <div className="absolute xl:-top-7 lg:-top-0 xl:right-0 lg:right-0 -top-14 -right-5 spin-slow ">
        <Image src={"/react.svg"} alt="img" width={150} height={100} />
      </div>
      <div className="absolute lg:bottom-10 xl:right-0 lg:right-0 lg:block hidden up-down">
        <Image src={"/html.svg"} alt="img" width={100} height={100} />
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center ">
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <Image
              src="/about-01.jpg"
              alt="Image 1"
              className="rounded-md"
              width={350}
              height={300}
            />
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="mb-6 lg:mb-2 lg:w-full w-[300px]">
              <span className="text-gradient text-lg lg:text-3xl space-grotesk">
                {staticText}
              </span>

              <span className="font-semibold lg:text-lg text-white">
                {displayedText}
              </span>
            </h1>
            <p className="!text-[#ffffff] font-normal mb-1 lg:mb-2 text-sm lg:text-base">
              I’m a passionate front-end developer specializing in Next.js and
              Tailwind CSS, creating user-friendly websites and applications.
              I’ve built my own site using HTML, CSS, JavaScript, Next.js, SCSS,
              and Redux, showcasing my skills for seamless web experiences.
            </p>

            <p className="!text-[#ffffff] font-normal mb-3 lg:mb-5 text-sm lg:text-base">
              I am dedicated to creating applications that are both functional
              and impactful, consistently delivering clean, efficient, and
              user-focused solutions. From designing sleek UIs to optimizing
              performance, I tackle every project with unwavering confidence and
              determination.
            </p>
            <div className="mb-10 lg:mb-0">
             
              <Link href={"/"} className="theme-btn capitalize lg:text-sm bg-custom-gradient text-white montserrat font-semibold">
              download cv
              </Link>
              
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center flex-col gap-5 h-full lg:space-y-5">
        {/* <h1 className="text-gradient text-2xl space-grotesk lg:text-7xl lg:!leading-[90px] lg:w-[900px] md:w-[600px] m-auto !font-extralight text-center">
        Building Websites that Bring Brands to Life

        </h1> */}
      </div>
    </div>
  );
}
