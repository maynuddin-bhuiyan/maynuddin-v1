"use client"

import Link from "next/link"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import { FaBriefcase, FaCode, FaExternalLinkAlt, FaGraduationCap } from "react-icons/fa"

// SectionHeader Component
const SectionHeader = memo(({ icon, title, index, isVisible }) => (
  <div className="flex items-center gap-4 mb-8" data-index={index}>
    <div
      className={`bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl transition-transform duration-700 hover:rotate-12 hover:scale-110 ${isVisible ? "scale-100 animate-bounce" : "scale-0"}`}
    >
      {icon}
    </div>
    <h2 className="font-serif font-bold text-2xl lg:text-4xl text-white bg-clip-text text-transparent">
      {title}
    </h2>
  </div>
))
SectionHeader.displayName = 'SectionHeader'

// EducationCard Component
const EducationCard = memo(({ item, index, isVisible }) => (
  <div
    className={`bg-gradient-to-br from-slate-800 to-slate-900 text-white border border-emerald-500/20 rounded-lg p-6 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/40 ${isVisible ? "translate-y-0 opacity-100 animate-fadeInUp" : "translate-y-8 opacity-0"}`}
    data-index={index}
  >
    <h3 className="font-serif font-bold text-lg lg:text-xl mb-2 hover:text-emerald-400 transition-colors">
      {item.institution}
    </h3>
    <p className="text-emerald-400 font-semibold mb-2 animate-pulse">{item.period}</p>
    <p className="text-slate-300">
      {item.degree}
      {item.status && <><br /><span className="font-semibold text-yellow-400">Status:</span> {item.status}</>}
      {item.grade && <><br /><span className="font-semibold text-yellow-400">Grade:</span> {item.grade}</>}
    </p>
  </div>
))
EducationCard.displayName = 'EducationCard'

// CourseCard Component
const CourseCard = memo(({ item, index, isVisible }) => (
  <div
    className={`bg-gradient-to-br from-slate-800 to-slate-900 border border-purple-500/20 rounded-lg p-6 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:border-purple-500/40 ${isVisible ? "translate-y-0 opacity-100 animate-fadeInUp" : "translate-y-8 opacity-0"}`}
    data-index={index}
  >
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <h3 className="font-serif text-white font-bold text-lg lg:text-xl hover:text-purple-400 transition-colors">
        {item.title}
      </h3>
      <Link
        target="_blank"
        href={item.link}
        className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
      >
        {item.provider}
      </Link>
    </div>
    <p className="text-purple-400 font-semibold mb-3 animate-pulse">{item.period}</p>
    <div className="flex flex-wrap gap-2 text-white/90">
      {item.skills.map((skill, skillIndex) => (
        <span
          key={skill}
          className={`bg-gradient-to-r from-slate-700 to-slate-600 px-3 py-1 rounded-full text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
          style={{ animationDelay: `${skillIndex * 0.1}s` }}
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
))
CourseCard.displayName = 'CourseCard'

// ExperienceCard Component
const ExperienceCard = memo(({ item, index, isVisible }) => (
  <div
    className={`grid md:grid-cols-3 bg-gradient-to-r from-yellow-50 to-orange-50 gap-6 p-6 rounded-lg shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 border border-blue-500/20 hover:border-blue-500/40 ${isVisible ? "translate-y-0 opacity-100 animate-fadeInUp" : "translate-y-8 opacity-0"}`}
    data-index={index}
  >
    <div className="md:col-span-1">
      <h3 className="font-bold text-lg lg:text-xl mb-2 hover:text-blue-600 transition-colors">{item.title}</h3>
      <p className="font-semibold mb-2 text-blue-600 animate-pulse">{item.period}</p>
      <Link
        target="_blank"
        href={item.link}
        className="text-blue-700 inline-flex items-center gap-2 transition-all duration-300 font-semibold hover:text-blue-800 hover:scale-105"
      >
        {item.company}
        <FaExternalLinkAlt className="text-xs animate-bounce" />
      </Link>
    </div>
    <div className="md:col-span-2">
      <p className="leading-relaxed hover:text-gray-700 transition-colors">{item.description}</p>
    </div>
  </div>
))
ExperienceCard.displayName = 'ExperienceCard'

const Resume = () => {
  const [visibleItems, setVisibleItems] = useState(new Set())
  const [typewriterText, setTypewriterText] = useState("")
  const observerRef = useRef(null)

  const handleIntersection = useCallback((entries) => {
    setVisibleItems((prev) => {
      const newVisible = new Set(prev)
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number.parseInt(entry.target.getAttribute("data-index") || "0")
          newVisible.add(index)
        }
      })
      return newVisible
    })
  }, [])

  useEffect(() => {
    const text = "Professional Resume"
    let index = 0
    const timer = setInterval(() => {
      if (index <= text.length) {
        setTypewriterText(text.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    observerRef.current = new IntersectionObserver(handleIntersection, { threshold: 0.1 })
    const elements = document.querySelectorAll("[data-index]")
    elements.forEach((el) => observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [handleIntersection])

  const educationData = [
    {
      institution: "Feni Government College",
      period: "Sep 2020 – Jan 2023",
      degree: "Bachelor of Business Administration (BBA)",
      status: "Dropped Out",
    },
    {
      institution: "Al Haj Noor Mia College, Comilla",
      period: "Jun 2017 – Jul 2019",
      degree: "Higher Secondary Certificate (HSC), Business",
      grade: "GPA 4.08",
    },
  ]

  const courseData = [
    {
      title: "Level 2 Programming",
      period: "Jan 2020 – Dec 2020",
      provider: "Programming Hero",
      link: "https://web.programming-hero.com/",
      skills: ["ReactJS", "Next.js", "SCSS", "Material-UI", "Tailwind CSS", "REST APIs", "GraphQL"],
    },
    {
      title: "Web Development",
      period: "Jun 2017 – Jul 2019",
      provider: "Programming Hero",
      link: "https://web.programming-hero.com/",
      skills: ["CSS", "ReactJS", "JavaScript"],
    },
  ]

  const experienceData = [
    {
      title: "Frontend Specialist & Team Leader",
      period: "May 2024 – Present",
      company: "CodeThinker",
      link: "https://codethinker.io/",
      description:
        "Oversaw the frontend development process, with an emphasis on the design, deployment, and optimization of user interfaces. Implemented contemporary tools and frameworks to enhance team efficiency. Created reusable components to ensure the delivery of high-quality products.",
    },
    {
      title: "Frontend Developer",
      period: "Jan 2024 – March 2024",
      company: "CodeThinker",
      link: "https://codethinker.io/",
      description:
        "Skilled Frontend Specialist with expertise in ReactJS, Next.js, SCSS, Material-UI, Tailwind CSS, REST APIs, and GraphQL. Guided technical direction, mentored teams, and delivered scalable, high-quality solutions.",
    },
    {
      title: "Frontend Developer",
      period: "Aug 2023 - Dec 2023",
      company: "Intelligent Dive",
      link: "https://intelligentdive.com/",
      description:
        "Focused on frontend development with emphasis on design, deployment, and optimization of user interfaces. Implemented modern tools and frameworks to enhance team efficiency.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-20"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-emerald-400 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-400 rounded-full animate-ping opacity-25"></div>
      </div>
      <div className="relative z-10 py-10 lg:py-20">
        <div className="container">
          <header className="text-center mb-16">
            <h1 className="text-3xl lg:text-6xl font-bold text-white mb-4" aria-label="Professional Resume">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto animate-pulse"></div>
          </header>

          <section className="mb-16" aria-labelledby="education-heading">
            <SectionHeader
              icon={<FaGraduationCap className="text-white text-2xl animate-pulse" />}
              title="Education"
              index={1}
              isVisible={visibleItems.has(1)}
            />
            <div className="grid md:grid-cols-2 gap-6">
              {educationData.map((item, index) => (
                <EducationCard
                  key={item.institution}
                  item={item}
                  index={2 + index}
                  isVisible={visibleItems.has(2 + index)}
                />
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="courses-heading">
            <SectionHeader
              icon={<FaCode className="text-white text-2xl animate-spin-slow" />}
              title="Online Courses"
              index={4}
              isVisible={visibleItems.has(4)}
            />
            <div className="space-y-6">
              {courseData.map((item, index) => (
                <CourseCard
                  key={item.title}
                  item={item}
                  index={5 + index}
                  isVisible={visibleItems.has(5 + index)}
                />
              ))}
            </div>
          </section>

          <section className="mb-16" aria-labelledby="experience-heading">
            <SectionHeader
              icon={<FaBriefcase className="text-white text-2xl animate-pulse" />}
              title="Experience"
              index={7}
              isVisible={visibleItems.has(7)}
            />
            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <ExperienceCard
                  key={item.title + item.period}
                  item={item}
                  index={8 + index}
                  isVisible={visibleItems.has(8 + index)}
                />
              ))}
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        [data-index="1"] .bg-gradient-to-r {
          --tw-gradient-from: #10b981;
          --tw-gradient-to: #14b8a6;
        }

        [data-index="4"] .bg-gradient-to-r {
          --tw-gradient-from: #9333ea;
          --tw-gradient-to: #ec4899;
        }

        [data-index="7"] .bg-gradient-to-r {
          --tw-gradient-from: #2563eb;
          --tw-gradient-to: #22d3ee;
        }
      `}</style>
    </div>
  )
}

export default Resume