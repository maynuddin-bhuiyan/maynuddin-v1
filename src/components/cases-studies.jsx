"use client";
import { ArrowUpRight, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

const projects = [
  {
    id: 1,
    title: "Tigger II",
    subtitle: "Clean Design & Responsive Applications",
    category: "Web Design",
    image: "/product-2.png",
    tags: ["UI/UX", "Responsive", "Modern"],
    year: "2024",
  },
  {
    id: 2,
    title: "Fashion Store",
    subtitle: "E-commerce Platform",
    category: "E-commerce",
    image: "/service-2.png",
    tags: ["React", "Commerce", "Mobile"],
    year: "2024",
  },
  {
    id: 3,
    title: "Job Portal",
    subtitle: "Career Discovery Platform",
    category: "Platform",
    image: "/hover-5.png",
    tags: ["Next.js", "Database", "Analytics"],
    year: "2023",
  },
  {
    id: 4,
    title: "Job Portal",
    subtitle: "Career Discovery Platform",
    category: "Platform",
    image: "/service-6.png",
    tags: ["Next.js", "Database", "Analytics"],
    year: "2023",
  },
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState(null);
  const [animationPhase, setAnimationPhase] = useState("idle");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const nextProject = () => {
    if (isTransitioning) return;
    setSlideDirection("left");
    setAnimationPhase("exit");
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
      setAnimationPhase("enter");
    }, 400);

    setTimeout(() => {
      setAnimationPhase("idle");
      setIsTransitioning(false);
      setSlideDirection(null);
    }, 800);
  };

  const prevProject = () => {
    if (isTransitioning) return;
    setSlideDirection("right");
    setAnimationPhase("exit");
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
      setAnimationPhase("enter");
    }, 400);

    setTimeout(() => {
      setAnimationPhase("idle");
      setIsTransitioning(false);
      setSlideDirection(null);
    }, 800);
  };

  const goToProject = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setSlideDirection(index > currentIndex ? "left" : "right");
    setAnimationPhase("exit");
    setIsTransitioning(true);

    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationPhase("enter");
    }, 400);

    setTimeout(() => {
      setAnimationPhase("idle");
      setIsTransitioning(false);
      setSlideDirection(null);
    }, 800);
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <section className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5" />
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-bounce"
          style={{ animationDuration: "6s" }}
        />

        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full transition-all duration-1000 ${isTransitioning ? "animate-ping scale-150 opacity-100" : "animate-pulse scale-100 opacity-50"
                }`}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
                animationDelay: `${i * 200}ms`,
                transform: isTransitioning
                  ? `translate(${slideDirection === "left" ? "-50px" : "50px"}, -20px) rotate(${i * 60}deg)`
                  : "translate(0, 0) rotate(0deg)",
              }}
            />
          ))}
        </div>

        <div className="relative py-10">
          <div className="container">
            {/* Header */}
            <div
              className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 hover:bg-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">
                  Featured Work
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-4 hover:bg-gradient-to-r hover:from-blue-300 hover:via-purple-300 hover:to-cyan-300 transition-all duration-500">
                Case Studies
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Exploring innovative solutions through thoughtful design and cutting-edge technology
              </p>
            </div>

            {/* Projects Grid */}
            <div
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              style={{ transitionDelay: "200ms" }}
            >
              {/* Main Featured Project */}
              <div className="lg:col-span-8">
                <div
                  className={`group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm h-[500px] cursor-pointer transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-500/30 rounded-lg ${animationPhase === "exit"
                    ? `scale-95 opacity-60 ${slideDirection === "left" ? "-translate-x-8 rotate-2" : "translate-x-8 -rotate-2"} blur-sm`
                    : animationPhase === "enter"
                      ? `scale-105 opacity-80 ${slideDirection === "left" ? "translate-x-4" : "-translate-x-4"}`
                      : "scale-100 opacity-100 translate-x-0 rotate-0 blur-0"
                    }`}
                  onMouseEnter={() => setHoveredProject(projects[currentIndex].id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent z-10" />
                  <img
                    src={projects[currentIndex].image || "/placeholder.svg"}
                    alt={projects[currentIndex].title}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${animationPhase === "exit"
                      ? `scale-110 ${slideDirection === "left" ? "-translate-x-12" : "translate-x-12"} blur-md`
                      : animationPhase === "enter"
                        ? `scale-105 ${slideDirection === "left" ? "translate-x-6" : "-translate-x-6"} blur-sm`
                        : "scale-100 translate-x-0 blur-0"
                      }`}
                  />

                  {/* Project Info Overlay */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 p-8 z-20 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2 ${animationPhase === "exit"
                      ? `opacity-0 ${slideDirection === "left" ? "-translate-x-8" : "translate-x-8"} translate-y-8`
                      : animationPhase === "enter"
                        ? `opacity-70 ${slideDirection === "left" ? "translate-x-4" : "-translate-x-4"} translate-y-4`
                        : "opacity-100 translate-x-0 translate-y-2"
                      }`}
                  >
                    <div className="flex items-center gap-3 mb-4 transform transition-all duration-300 group-hover:translate-x-2">
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium hover:bg-blue-500/30 hover:scale-105 transition-all duration-300">
                        {projects[currentIndex].category}
                      </span>
                      <span className="text-gray-400 text-sm">{projects[currentIndex].year}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-all duration-300 transform group-hover:translate-x-1">
                      {projects[currentIndex].title}
                    </h3>
                    <p
                      className="text-gray-300 text-lg mb-4 transform transition-all duration-300 group-hover:translate-x-1"
                      style={{ transitionDelay: "50ms" }}
                    >
                      {projects[currentIndex].subtitle}
                    </p>
                    <div
                      className="flex items-center justify-between transform transition-all duration-300 group-hover:translate-x-1"
                      style={{ transitionDelay: "100ms" }}
                    >
                      <div className="flex gap-2">
                        {projects[currentIndex].tags.map((tag, index) => (
                          <span
                            key={index}
                            className={`px-2 py-1 bg-slate-700/50 rounded text-gray-300 text-xs hover:bg-slate-600/50 hover:scale-105 transition-all duration-300 ${animationPhase === "enter" ? "animate-bounce" : ""
                              }`}
                            style={{
                              transitionDelay: `${index * 50}ms`,
                              animationDelay: `${index * 100}ms`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="inline-flex items-center px-4 py-2 text-white hover:text-blue-300 hover:bg-blue-500/10 transition-all duration-300 group/btn hover:scale-105 rounded-md">
                        View Project
                        <ArrowUpRight
                          className="w-4 h-4 ml-1 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 group-hover/btn:rotate-12"
                        />
                      </button>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-all duration-500 ${hoveredProject === projects[currentIndex].id ? "opacity-100" : ""
                      }`}
                  />
                  <div
                    className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 rounded-lg opacity-0 transition-opacity duration-500 ${hoveredProject === projects[currentIndex].id ? "opacity-100" : ""
                      }`}
                    style={{
                      mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                      maskComposite: "xor",
                    }}
                  />
                </div>
              </div>

              {/* Side Projects */}
              <div className="lg:col-span-4 space-y-6">
                {projects
                  .filter((_, index) => index !== currentIndex)
                  .slice(0, 2)
                  .map((project, index) => (
                    <div
                      key={project.id}
                      className={`group relative overflow-hidden bg-gradient-to-br from-slate-800/30 to-slate-900/30 border border-slate-700/30 backdrop-blur-sm h-[235px] cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30 rounded-lg ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                        } ${isTransitioning
                          ? `${slideDirection === "left" ? "translate-x-4 rotate-1" : "-translate-x-4 -rotate-1"} scale-95 opacity-70`
                          : "translate-x-0 rotate-0 scale-100 opacity-100"
                        }`}
                      style={{ transitionDelay: `${400 + index * 100}ms` }}
                      onMouseEnter={() => setHoveredProject(project.id)}
                      onMouseLeave={() => setHoveredProject(null)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1 ${isTransitioning ? "scale-105 blur-sm" : "scale-100 blur-0"
                          }`}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-all duration-300 group-hover:translate-y-0 translate-y-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded text-purple-300 text-xs hover:bg-purple-500/30 hover:scale-105 transition-all duration-300">
                            {project.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-purple-300 transition-all duration-300 transform group-hover:translate-x-1">
                          {project.title}
                        </h4>
                        <p
                          className="text-gray-400 text-sm transform transition-all duration-300 group-hover:translate-x-1"
                          style={{ transitionDelay: "50ms" }}
                        >
                          {project.subtitle}
                        </p>
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 transition-opacity duration-500 ${hoveredProject === project.id ? "opacity-100" : ""
                          }`}
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div
              className={`flex items-center justify-between transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="flex items-center gap-4">
                <button
                  onClick={prevProject}
                  disabled={isTransitioning}
                  className={`inline-flex items-center justify-center w-10 h-10 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 text-white transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-md ${isTransitioning && slideDirection === "right"
                    ? "scale-125 rotate-180 bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/25"
                    : "hover:rotate-12"
                    }`}
                >
                  <ChevronLeft
                    className={`w-4 h-4 transition-transform duration-300 ${isTransitioning && slideDirection === "right" ? "scale-125 -translate-x-1" : "hover:-translate-x-0.5"
                      }`}
                  />
                </button>
                <button
                  onClick={nextProject}
                  disabled={isTransitioning}
                  className={`inline-flex items-center justify-center w-10 h-10 bg-slate-800/50 border border-slate-700 hover:bg-slate-700 hover:border-slate-600 text-white transition-all duration-300 hover:scale-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed rounded-md ${isTransitioning && slideDirection === "left"
                    ? "scale-125 rotate-180 bg-blue-500/20 border-blue-500/50 shadow-lg shadow-blue-500/25"
                    : "hover:-rotate-12"
                    }`}
                >
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${isTransitioning && slideDirection === "left" ? "scale-125 translate-x-1" : "hover:translate-x-0.5"
                      }`}
                  />
                </button>
                <div className="flex gap-2 ml-4">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToProject(index)}
                      disabled={isTransitioning}
                      className={`h-2 rounded-full transition-all duration-500 hover:scale-125 disabled:cursor-not-allowed ${index === currentIndex
                        ? `bg-gradient-to-r from-blue-400 to-purple-400 w-8 shadow-lg shadow-blue-400/50 ${isTransitioning ? "animate-pulse scale-150" : ""
                        }`
                        : `bg-slate-600 hover:bg-slate-500 w-2 ${isTransitioning ? "animate-pulse opacity-50" : "opacity-100"}`
                        }`}
                    />
                  ))}
                </div>
              </div>
              <button
                className={`inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group active:scale-95 hover:rotate-1 ${isTransitioning ? "animate-pulse scale-105 shadow-lg shadow-purple-500/25" : ""
                  }`}
              >
                <ExternalLink
                  className={`w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110 ${isTransitioning ? "animate-spin" : ""
                    }`}
                />
                View All Projects
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}