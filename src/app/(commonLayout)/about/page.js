import { FaBootstrap, FaReact, FaNodeJs, FaLayerGroup, FaDollarSign, FaCheck } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNextjsLine,
} from "react-icons/ri";
import { SiMui, SiTypescript } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";

import TechCard from "@/components/reuseable/tech-card/TechCard";
import { IoMdBriefcase } from "react-icons/io";
import ServiceCard from "@/components/reuseable/service-card/ServiceCard";
export default function AboutPage() {
  const techs = [
    {
      icon: <RiJavascriptFill className="text-4xl" />,
      name: "Javascript",
      experience: "2 Year Experience",
      color: "yellow-400",
    },
    {
      icon: <FaBootstrap className="text-4xl" />,
      name: "Bootstrap",
      experience: "3 Year Experience",
      color: "indigo-600",
    },
    {
      icon: <RiTailwindCssFill className="text-4xl" />,
      name: "Tailwind CSS",
      experience: "2 Year Experience",
      color: "blue-400",
    },

    {
      icon: <SiMui className="text-4xl" />,
      name: "Material UI",
      experience: "2 Year Experience",
      color: "indigo-600",
    },
    {
      icon: <RiNextjsLine className="text-4xl" />,
      name: "Next js",
      experience: "1 Year Experience",
      color: "red-500",
    },
    {
      icon: <FaReact className="text-4xl" />,
      name: "React",
      experience: "2 Year Experience",
      color: "blue-400",
    },
    {
      icon: <GrGraphQl className="text-4xl" />,
      name: "Graph Ql",
      experience: "8 Months Experience",
      color: "red-500",
    },
    {
      icon: <SiTypescript className="text-4xl" />,
      name: "TypeScript",
      experience: "8 Months Experience",
      color: "indigo-600",
    },

    {
      icon: <TbApi className="text-4xl" />,
      name: "Rest API",
      experience: "2 Year Experience",
      color: "red-400",
    },
    {
      icon: <FaNodeJs className="text-4xl" />,
      name: "Node.js",
      experience: "10 Months Experience",
      color: "green-500",
    },
  ];

  const services = [
    {
      icon: "/settings.png",
      title: "Web systems development",
      description:
        "Web systems development': involves designing and building the technical infrastructure that powers web applications and websites. It encompasses both front-end (user interface) and back-end (server-side) development, integrating databases, servers, and APIs to ensure seamless functionality. This process includes writing code, configuring servers, managing data flow, and ensuring security, scalability, and performance.",
      iconBg: "bg-orange-100",
    },
    {
      icon:"/ux.png",
      title: "Headless CMS with WordPress",
      description:
        "Headless CMS with WordPress': uses WordPress as a backend solely for content management, while the frontend is handled separately by frameworks like React, Vue, or Next.js. In this decoupled setup, content is delivered via WordPress's REST API or GraphQL to different frontends, enabling more flexible design, faster performance, and enhanced scalability.",
      iconBg: "bg-blue-100",
    },
    {
      icon: "/cms.png",
      title: "Frontend Specialist & Team Leader",
      description:
        "'Frontend architecture': refers to the structure and design of software or web applications that run on the user's device (browser or app) rather than the server. It involves managing how the user interface (UI), functionality, and data processing are handled on the client side. Technologies like HTML, CSS, JavaScript, and frameworks such as React, Vue, or Angular are used to build responsive, interactive experiences directly in the browser.",
      iconBg: "bg-green-100",
    },
    {
      icon: "/social-media.png",
      title: "Online platform creation",
      description:
        "'Online platform creation': refers to the development and launch of digital environments where users can interact, engage, or conduct activities such as e-commerce, social networking, learning, or content sharing. This process involves designing and building a user-friendly interface, backend infrastructure, and integrating features like user authentication, payment systems, and content management.",
      iconBg: "bg-green-100",
    },
  ];
  return (
    <>
      {/* <About /> */}
      <div className="container">
        <div className="flex mb-3 lg:mb-6 gap-3">
          <div className="bg-custom-gradient p-2 rounded-md">
            <IoMdBriefcase className="text-white text-xl" />
          </div>
          <h2 className="text-lg lg:text-xl font-bold text-white">
            Expertise:
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5 lg:mt-0">
          {techs.map((tech, index) => (
            <TechCard
              key={index}
              icon={tech.icon}
              name={tech.name}
              experience={tech.experience}
              color={tech?.color}
            />
          ))}
        </div>

        <div className="flex mb-3 lg:mb-6 gap-3 mt-10">
          <div className="bg-custom-gradient p-2 rounded-md">
            <IoMdBriefcase className="text-white text-xl" />
          </div>
          <h2 className="text-lg lg:text-xl font-bold text-white">
            Services:
          </h2>

          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5 lg:mt-0 mb-10 lg:mb-0">
        {services?.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            iconBg={service.iconBg}
          />
        ))}
      </div>
      </div>
    </>
  );
}
