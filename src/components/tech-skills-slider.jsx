"use client"

import { memo, useRef } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"

// Data for technologies and skills
const technologies = [
  {
    name: "React",
    category: "Frontend Framework",
    level: "Advanced",
    color: "bg-blue-500",
    icon: "⚛️",
  },
  {
    name: "Next.js",
    category: "Full-Stack Framework",
    level: "Advanced",
    color: "bg-black",
    icon: "▲",
  },
  {
    name: "TypeScript",
    category: "Programming Language",
    level: "Advanced",
    color: "bg-blue-600",
    icon: "TS",
  },
  {
    name: "Tailwind CSS",
    category: "CSS Framework",
    level: "Advanced",
    color: "bg-cyan-500",
    icon: "🎨",
  },
  {
    name: "Node.js",
    category: "Backend Runtime",
    level: "Intermediate",
    color: "bg-green-600",
    icon: "🟢",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Intermediate",
    color: "bg-green-500",
    icon: "🍃",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "Intermediate",
    color: "bg-blue-700",
    icon: "🐘",
  },
  {
    name: "Git",
    category: "Version Control",
    level: "Advanced",
    color: "bg-orange-500",
    icon: "📝",
  },
  {
    name: "Docker",
    category: "DevOps",
    level: "Intermediate",
    color: "bg-blue-400",
    icon: "🐳",
  },
  {
    name: "AWS",
    category: "Cloud Platform",
    level: "Intermediate",
    color: "bg-orange-400",
    icon: "☁️",
  },
]

const skills = [
  {
    name: "Responsive Design",
    category: "UI/UX",
    level: "Advanced",
    description: "Creating websites that work on all devices and screen sizes",
    color: "bg-purple-500",
    icon: "📱",
  },
  {
    name: "API Development",
    category: "Backend",
    level: "Advanced",
    description: "Building RESTful and GraphQL APIs",
    color: "bg-indigo-500",
    icon: "🔌",
  },
  {
    name: "Performance Optimization",
    category: "Optimization",
    level: "Intermediate",
    description: "Improving website speed and user experience",
    color: "bg-yellow-500",
    icon: "⚡",
  },
  {
    name: "Testing",
    category: "Quality Assurance",
    level: "Intermediate",
    description: "Unit, integration, and end-to-end testing",
    color: "bg-red-500",
    icon: "🧪",
  },
  {
    name: "Security",
    category: "Security",
    level: "Intermediate",
    description: "Implementing secure coding practices and authentication",
    color: "bg-gray-600",
    icon: "🔒",
  },
  {
    name: "Agile Development",
    category: "Methodology",
    level: "Advanced",
    description: "Working in agile teams with scrum methodology",
    color: "bg-teal-500",
    icon: "🔄",
  },
]

// Reusable Tech/Skill Card component
const TechSkillCard = memo(({ item }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case "Advanced":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Beginner":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="px-2">
      <div className="h-[260px] px-4 flex flex-col items-center justify-center bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:border-primary/20 text-center space-y-4">
        <div
          className={`w-16 h-16 ${item?.color} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto`}
          aria-hidden="true"
        >
          {item?.icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{item?.name}</h3>
        <div className="flex gap-2 items-center justify-center"><span className="inline-block bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 text-xs px-2 py-1 rounded-full">
          {item?.category}
        </span>
          <span className={`inline-block px-2 py-1 rounded-full text-xs ${getLevelColor(item?.level)}`}>
            {item?.level}
          </span></div>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item?.description}</p>
      </div>
    </div>
  )
})

export default function TechSkillsSlider() {
  const techSwiperRef = useRef(null)
  const skillsSwiperRef = useRef(null)

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  }

  const techSliderSettings = {
    ...sliderSettings,
    slidesToShow: 4,
    autoplaySpeed: 3000,
  }

  const skillsSliderSettings = {
    ...sliderSettings,
    slidesToShow: 3,
    autoplaySpeed: 3500,
  }

  return (
    <div className="container">
      {/* Technologies Section */}
      <section aria-labelledby="technologies-heading">
        <h2 id="technologies-heading" className="text-xl lg:text-4xl text-gradient font-semibold text-center mb-4 lg:mb-8">
          Technologies & Frameworks
        </h2>
        <div className="relative">
          <Slider ref={techSwiperRef} {...techSliderSettings} className="tech-slider">
            {technologies.map((tech) => (
              <TechSkillCard key={tech.name} item={tech} />
            ))}
          </Slider>
        </div>
      </section>

      {/* Skills Section */}
      <section aria-labelledby="skills-heading" className="my-10">
        <h2 id="skills-heading" className="text-xl lg:text-4xl text-gradient font-semibold text-center mb-4 lg:mb-8">
          Core Skills & Competencies
        </h2>
        <div className="relative">
          <Slider ref={skillsSwiperRef} {...skillsSliderSettings} className="skills-slider">
            {skills.map((skill) => (
              <TechSkillCard key={skill.name} item={skill} />
            ))}
          </Slider>
        </div>
      </section>

      <style jsx global>{`
        .tech-slider .slick-dots,
        .skills-slider .slick-dots {
          bottom: -40px;
          padding-bottom: 1rem;
        }

        .tech-slider .slick-arrow,
        .skills-slider .slick-arrow {
          z-index: 1;
          width: 30px;
          height: 30px;
        }

        .tech-slider .slick-prev,
        .skills-slider .slick-prev {
          left: -40px;
        }

        .tech-slider .slick-next,
        .skills-slider .slick-next {
          right: -40px;
        }

        .tech-slider .slick-dots li button:before,
        .skills-slider .slick-dots li button:before {
          color: hsl(var(--primary));
          font-size: 12px;
        }

        .tech-slider .slick-arrow:before,
        .skills-slider .slick-arrow:before {
          color: hsl(var(--primary));
          font-size: 20px;
        }
      `}</style>
    </div>
  )
}