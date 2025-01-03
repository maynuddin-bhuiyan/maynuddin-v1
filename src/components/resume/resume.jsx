import Link from "next/link";
import { FaBook, FaBookOpen  } from "react-icons/fa";
import { IoMdBriefcase } from "react-icons/io";


const Resume = () => {
  return (
    <div className="mt-5 text-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
        <section className="lg:mb-12">
          <div className="flex items-start gap-4">
            {/* Icon Section */}
            <div className="flex flex-col items-center relative">
              <div className="bg-custom-gradient lg:p-3 p-2 rounded-md">
                <FaBookOpen className="text-white lg:text-lg" />
              </div>
            </div>
            <div>
              <h2 className="text-lg lg:text-2xl font-bold mt-1 mb-3 lg:mb-6">Education</h2>
              <div className="space-y-4 lg:space-y-8">
                {/* Timeline Item */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      {/* Dot */}
                      <div className="w-4 h-4 bg-custom-gradient rounded-full"></div>
                      {/* Connecting Line */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-24 w-[2px] bg-custom-gradient"></div>
                    </div>
                    <div>
                      <h3 className="lg:text-xl font-semibold">Feni Government College</h3>
                      <p className="text-sm lg:text-base text-gray-300">Sep 2020 – Jan 2023</p>
                      <p className="text-sm lg:text-base !text-white">
                      Bachelor of Business Administration (BBA), 
                        <span className="font-bold"> Status:</span> Dropped Out.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      {/* Dot */}
                      <div className="w-4 h-4 bg-custom-gradient rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg lg:text-xl font-semibold">
                      Al Haj Noor Mia Collage, Comilla
                      </h3>
                      <p className="text-sm lg:text-base text-gray-300">Jun 2017 – Jul 2019</p>
                      <p className="text-sm lg:text-base !text-white">
                        Higher Secondary Certificate (HSC), Business. Grade: GPA 4.08.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4 mt-5 lg:mt-10">
            {/* Icon Section */}
            <div className="flex flex-col items-center relative">
              <div className="bg-custom-gradient p-2 lg:p-3 rounded-md">
                <FaBook className="text-white lg:text-lg" />
              </div>
            </div>
            <div>
              <h2 className="text-lg lg:text-2xl font-bold mt-1 mb-3 lg:mb-6">Online Courses</h2>
              <div className="space-y-3">
                {/* Timeline Item */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      {/* Dot */}
                      <div className="w-4 h-4 bg-custom-gradient rounded-full"></div>
                      {/* Connecting Line */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-20 w-[2px] bg-custom-gradient"></div>
                    </div>
                    <div>
                    <h3 className="lg:text-lg font-semibold">
                      Level 2 | <Link target="_blank" href={"https://web.programming-hero.com/"} className="text-sm text-purple-500">Programming Hero</Link>
                      </h3>
                      <p className="text-sm text-gray-400">Jan 2020 – Dec 2020</p>
                      <p className="text-sm">
                      learned ReactJS, Next.js, SCSS, Material-UI, Tailwind CSS, REST APIs, and GraphQL.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      {/* Dot */}
                      <div className="w-4 h-4 bg-custom-gradient rounded-full"></div>
                    </div>
                    <div>
                    <h3 className="lg:text-lg font-semibold">
                    Web Development, <Link target="_blank" href={"https://web.programming-hero.com/"} className="text-sm text-purple-500">Programming Hero</Link>
                      </h3>
                      
                      <p className="text-sm text-gray-400">Jun 2017 – Jul 2019</p>
                      <p className="text-sm">
                     I has acquired foundational knowledge in CSS, ReactJS, and JavaScript.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-5 lg:mt-0 mb-12">
          <div className="flex items-start gap-4">
            {/* Icon Section */}
            <div className="flex flex-col items-center relative">
              <div className="bg-custom-gradient p-2 rounded-md">
                <IoMdBriefcase className="text-white text-xl" />
              </div>
            </div>
            <div>
              <h2 className="text-lg lg:text-2xl font-bold mt-1 mb-3 lg:mb-6">Experience</h2>
              <div className="space-y-3 lg:space-y-8">
                {/* Timeline Item */}
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="relative mt-1">
                      {/* Dot */}
                      <div className="w-4 h-4 bg-custom-gradient rounded-full"></div>
                      {/* Connecting Line */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-56 lg:h-48 w-[2px] bg-custom-gradient"></div>
                    </div>
                    <div>
                      <h3 className="lg:text-xl font-semibold">Frontend Specialist & Team Leader</h3>
                      <p className="text-sm lg:text-base text-gray-300">May 2024 – Present</p> <Link target="_blank" href={"https://codethinker.io/"} className="text-sm lg:text-base !text-purple-500">CodeThinker</Link>
                      <p className="text-sm lg:text-base !text-white">
                     Oversaw the frontend development process, with an emphasis on the design, deployment, and optimization of user interfaces. Implemented contemporary tools and frameworks to enhance team efficiency. Created reusable components to ensure the delivery of high-quality products.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="relative pt-1">
                      {/* Dot */}
                      <div className="w-4 h-4 bg-custom-gradient rounded-full"></div>
                      {/* Connecting Line */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-52 lg:h-48 w-[2px] bg-custom-gradient"></div>
                    </div>
                    <div>
                      <h3 className="lg:text-xl font-semibold">
                      Frontend Developer, <Link target="_blank" href={"https://codethinker.io/"} className="text-sm lg:text-base !text-purple-500">CodeThinker</Link>
                      </h3>
                      <p className="text-sm lg:text-base text-gray-300">Jan 2024 – March 2024</p>
                      <p className="text-sm lg:text-base !text-white">
                      I am a skilled Frontend Specialist & Team Leader with expertise in ReactJS, Next.js, SCSS, Material-UI, Tailwind CSS, REST APIs, and GraphQL. I guide technical direction, mentor teams, and deliver scalable, high-quality solutions. I honed my skills at Codethinker, contributing to impactful projects and seamless collaboration.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <div className="relative pt-1"> 
                      {/* Dot */}
                      <div className="w-4 h-4 bg-custom-gradient rounded-full"></div>
                      
                    </div>
                    <div>
                      <h3 className="lg:text-xl font-semibold">
                      Frontend Developer,<Link target="_blank" href={"https://intelligentdive.com/"} className="text-base text-purple-500"> Intelligent Dive </Link>
                      </h3>
                      <p className="text-gray-400">Aug 2023 - Dec 2023</p>
                      <p className="text-sm lg:text-base !text-white">
                      Oversaw the frontend development process, with an emphasis on the design, deployment, and optimization of user interfaces. Implemented contemporary tools and frameworks to enhance team efficiency. Created reusable components to ensure the delivery of high-quality products.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>        
      </div>
    </div>
  );
};

export default Resume;
