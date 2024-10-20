import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="md:flex justify-center items-center lg:gap-10">
        <div>
          <Image
            src={"/not-found.png"}
            alt={"not-found-img"}
            width={230}
            height={230}
          />
        </div>
        <div>
          <h2 className="lg:text-4xl text-2xl font-bold text-gradient text-center mb-2">
            404 Page Not Found
          </h2>
          <p className="!text-[#DBDBDB] mt-2 md:w-[300px] w-[200px] lg:m-0 m-auto mb-5 lg:text-left text-center md:text-base text-sm">
            We Could not find the page you were looking for.
          </p>
          <div className="flex lg:justify-start justify-center lg:mt-5">
            <Link
              href="/"
              className="theme-btn lg:text-sm bg-custom-gradient w-max text-white montserrat font-semibold"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;