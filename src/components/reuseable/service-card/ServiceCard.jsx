import Image from "next/image";

const ServiceCard = ({ icon, title, description, iconBg }) => {
    return (
      <div className="relative cursor-default group p-5 bg-white rounded-lg shadow-md transition-shadow duration-300 overflow-hidden">
        {/* Gradient Hover Background */}
       {/* Left Hover Background */}
      <div className="absolute top-0 left-0 h-full w-1/2 bg-[#ec3ba8] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-5" />
      {/* Right Hover Background */}
      <div className="absolute top-0 right-0 h-full w-1/2 bg-[#5300eebf] translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-5" />
        
        {/* Card Content */}
        <div className="relative z-10">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-lg mb-2 ${iconBg}`}
          >
            <Image src={icon} alt="icon" width={40} height={40} />
          </div>
          <h3 className="font-semibold text-gray-800 group-hover:text-white">{title}</h3>
          <p className="text-sm text-gray-600 group-hover:text-white">{description}</p>
        </div>
      </div>
    );
  };
  
  export default ServiceCard;
  