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
    <div className="h-full relative lg:pt-14 pb-40">
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
        <div className="grid lg:grid-cols-2 items-center h-full xl:mt-10">
          <div className="order-2 lg:order-1 flex items-center justify-center">
            <div className="relative">
              {/* Shapes */}
              <div className="absolute -top-20 -left-28">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 113 113"
                  fill="none"
                  className="bounce-fade"
                >
                  <path
                    d="M112.5 110C112.5 111.657 111.157 113.004 109.5 112.96C95.7491 112.593 82.1728 109.707 69.4481 104.436C55.799 98.7828 43.3971 90.4961 32.9505 80.0495C22.5039 69.6029 14.2172 57.201 8.56357 43.5519C3.29284 30.8272 0.40678 17.2509 0.0400038 3.49972C-0.00417051 1.84345 1.34315 0.50001 3.00001 0.50001L109.5 0.499997C111.157 0.499997 112.5 1.84314 112.5 3.5L112.5 110Z"
                    fill="#EF1E5D"
                  />
                </svg>
              </div>

              <Image
                src="/about-01.jpg"
                alt="Image 1"
                className="rounded-md"
                width={350}
                height={300}
              />
              <div className="absolute  -bottom-20 -right-20">
                <svg
                  className="bounce-fade"
                  xmlns="http://www.w3.org/2000/svg"
                  width="80"
                  height="80"
                  viewBox="0 0 72 72"
                  fill="none"
                >
                  <path
                    d="M-7.76053e-06 69C-7.68811e-06 70.6568 1.34378 72.0065 2.99919 71.9375C11.4305 71.586 19.7425 69.7546 27.5532 66.5193C36.2886 62.901 44.2259 57.5975 50.9117 50.9117C57.5975 44.2259 62.901 36.2886 66.5193 27.5532C69.7546 19.7425 71.586 11.4305 71.9375 2.99919C72.0065 1.34378 70.6569 -6.23573e-06 69 -6.16331e-06L3 -3.27835e-06C1.34314 -3.20593e-06 -3.08851e-06 1.34314 -3.01609e-06 3L-7.76053e-06 69Z"
                    fill="#1B38DF"
                  />
                </svg>
              </div>
            </div>
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

            <p className="!text-[#ffffff] font-normal mb-1 lg:mb-2 text-sm lg:text-base">
              I am dedicated to creating applications that are both functional
              and impactful, consistently delivering clean, efficient, and
              user-focused solutions. From designing sleek UIs to optimizing
              performance, I tackle every project with unwavering confidence and
              determination.
            </p>
            <p className="!text-[#ffffff] font-normal mb-1 lg:mb-2 text-sm lg:text-base">
              {"I'm"} happy to help with your projects, whether {"it's"} a
              large-scale project or just some minor website modifications that
              you need help with, Let me know what you need, and we can work
              together on a schedule that works for you.
            </p>
            <p className="!text-[#ffffff] font-normal mb-3 lg:mb-5 text-sm lg:text-base">
              💼 I am actively pursuing opportunities for both remote and
              on-site work, and I am open to relocation as well.
            </p>

            <div className="mb-10 lg:mb-0">
              <Link target="_blank"
                href={"https://drive.google.com/file/d/1WqIVuShqUjqD2_8y9zd_N7_jJB1CbF1J/view?usp=sharing"}
                className="theme-btn capitalize lg:text-sm bg-custom-gradient text-white montserrat font-semibold"
              >
                download cv
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
