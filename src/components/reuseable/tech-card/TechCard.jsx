const TechCard = ({ icon, name, experience, color }) => {
  return (
    <div className="flex w-[300px] m-auto lg:w-full items-center group justify-start smooth p-4 rounded-sm bg-white hover:bg-custom-gradient hover:text-white hover:shadow-lg">
      <div
        className="mb-3 w-12 group-hover:!text-white"
        style={{ color: color }}
      >
        {icon}
      </div>
      <div>
        <h3
          className="text-lg font-semibold group-hover:!text-white"
          style={{ color: color }}
        >
          {name}
        </h3>
        <p className="text-sm text-gray-600 smooth group-hover:text-white">
          {experience}
        </p>
      </div>
    </div>
  );
};

export default TechCard;
