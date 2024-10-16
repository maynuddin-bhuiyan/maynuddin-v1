import CustomButton from "./reuseable/custom-button/CustomButton";
import CustomOutline from "./reuseable/custom-outline/CustomOutline";


export default function HeroSection() {
  return (
    <div className="lg:py-20 py-10">
      <div className="flex items-center flex-col gap-5 h-full lg:space-y-5">
        
        <h1 className="text-gradient text-2xl space-grotesk lg:text-6xl lg:w-[900px] m-auto font-bold text-center">
        Building the future for brands 
                  and entertainers 
Unlocking your value potential
        </h1>
        <p className="text-[#ffffff] font-normal text-center lg:w-[500px] m-auto">
        Greetings! I&apos;m a dedicated front-end web developer with NextJs and Tailwind CSS. I specialize in website and web application development.
        </p>
        <div className="lg:flex items-center lg:gap-10 gap-3">
          {/* <button className="btn uppercase text-white lg:px-10 px-5 text-xl py-3 rounded-full lg:mb-0 mb-5">
          Discuss a project with Us
          </button> */}
          <CustomButton text={"Discuss a project with Us"}  />
          <CustomOutline text={"Hire me"} />
        </div>
      </div>
    </div>
  );
}