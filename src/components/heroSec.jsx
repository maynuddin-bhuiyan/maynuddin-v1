import Image from "next/image";
import CustomButton from "./reuseable/custom-button/CustomButton";
import CustomOutline from "./reuseable/custom-outline/CustomOutline";


export default function HeroSection() {
  return (
    <div className="lg:py-20 py-16 relative">
      <div className="absolute xl:top-0 xl:left-20 lg:left-0 lg:-top-16 -bottom-20 -left-10 bounce-fade">
        <Image src={"/tailwind.svg"} alt="img" width={250} height={100} />
      </div>
      <div className="absolute bottom-10 xl:left-40 lg:left-0 zoom lg:block hidden">
        <Image src={"/js.svg"} alt="img" width={250} height={100} />
      </div>

      <div className="absolute xl:top-5 lg:-top-16 xl:right-32 lg:right-0 -top-16 right-0 spin-slow ">
        <Image src={"/react.svg"} alt="img" width={200} height={100} />
      </div>
      <div className="absolute lg:bottom-10 xl:right-48 lg:right-0 lg:block hidden up-down">
        <Image src={"/html.svg"} alt="img" width={240} height={100} />
      </div>
      <div className="flex items-center flex-col gap-5 h-full lg:space-y-5">
        <h1 className="text-gradient text-2xl space-grotesk lg:text-6xl lg:w-[900px] md:w-[600px] m-auto font-bold text-center">
          Building the future for brands
          and entertainers
          Unlocking your value potential
        </h1>
        <p className="text-[#ffffff] font-normal text-center lg:w-[500px] md:w-[400px] m-auto">
          Greetings! I&apos;m a dedicated front-end web developer with NextJs and Tailwind CSS. I specialize in website and web application development.
        </p>
        <div className="lg:flex items-center lg:gap-10 gap-3">
          <CustomButton text={"Discuss a project with Us"} />
          <CustomOutline text={"Hire me"} />
        </div>
      </div>
    </div>
  );
}