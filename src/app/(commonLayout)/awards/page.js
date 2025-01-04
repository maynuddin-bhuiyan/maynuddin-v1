import { IoMdBriefcase } from "react-icons/io";

export default function AwardsPage() {
  return (
    <>
      <div className="container">
        <div className="flex mb-3 lg:mb-6 gap-1 lg:gap-3 mt-5">
          <div className="bg-custom-gradient p-2 rounded-md">
            <IoMdBriefcase className="text-white text-xl" />
          </div>
          <h2 className="text-lg lg:text-xl font-bold text-white">
            Certificate:
          </h2>
        </div>
      </div>
    </>
  );
}
