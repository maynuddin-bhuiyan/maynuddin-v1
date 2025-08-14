"use client"
import { ArrowRight, Briefcase, Download, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const staticText = "I'm "
  const texts = [
    "Maynuddin Bhuiyan",
    "a Frontend Developer",
    "React.js & Next.js Expert",
    "UI/UX Enthusiast",
    "Problem Solver",
  ]

  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const sentence = texts[currentIndex]
    const typingSpeed = isDeleting ? 50 : 120
    const pauseTime = isDeleting ? 500 : 2000

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < sentence.length) {
        setDisplayedText(sentence.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(sentence.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === sentence.length) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentIndex, texts])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="absolute bottom-5 left-0 bounce-fade">
        <Image src={"/tailwind.svg"} alt="img" width={200} height={100} />
      </div>
      <div className="absolute xl:-top-10 xl:-left-5 lg:left-0 zoom lg:block hidden">
        <Image src={"/js.svg"} alt="img" width={200} height={100} />
      </div>

      <div className="absolute xl:-top-7 lg:-top-0 xl:right-0 lg:right-0 -top-14 -right-5 spin-slow lg:block hidden ">
        <Image src={"/react.svg"} alt="img" width={200} height={100} />
      </div>
      <div className="absolute lg:bottom-10 xl:right-0 lg:right-0 lg:block hidden up-down">
        <Image src={"/html.svg"} alt="img" width={200} height={100} />
      </div>

      <div className="container">
        <div className="mt-5 lg:mt-10 mb-10 lg:mb-20">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-300 text-sm font-medium">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Available for opportunities
          </div>
          {/* Main Heading */}
          <div className="mt-5">
            <h1 className="text-3xl lg:text-7xl font-bold text-white leading-tight">
              <span className="text-slate-300">{staticText}</span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
                {displayedText}
              </span>
              <span className="animate-pulse text-blue-400">|</span>
            </h1>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-10">
          {/* Content Section */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Description */}
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed max-w-2xl">
              <p>
                Passionate frontend developer specializing in{" "}
                <span className="text-blue-400 font-semibold">React.js</span> and{" "}
                <span className="text-purple-400 font-semibold">Next.js</span>, crafting exceptional digital experiences
                with modern technologies.
              </p>
              <p>
                I transform ideas into pixel-perfect, performant applications that users love. From sleek UIs to
                seamless interactions, I deliver solutions that make an impact.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-slate-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-slate-400 text-sm">Client Satisfaction</div>
              </div>
            </div>

            {/* Location & Work Status */}
            <div className="flex flex-wrap gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Open to relocation</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span>Remote & On-site</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col lg:justify-start items-center sm:flex-row gap-4 pt-4 pb-10 lg:pb-0">
              <Link
                href="https://drive.google.com/file/d/1LHHA46qJgYyxBT39tlRbj__I5ShqcBSS/view?usp=sharing"
                target="_blank"
                className="w-max group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <Download className="w-5 h-5" />
                Download CV
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button className="w-max inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300">
                View Projects
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative z-10">
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-1 backdrop-blur-sm border border-white/20">
                  <div className="relative overflow-hidden rounded-2xl">
                    <Image
                      src="/about-01.jpg"
                      alt="Maynuddin Bhuiyan"
                      className="w-full h-auto object-cover"
                      width={400}
                      height={500}
                      priority
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-12 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl rotate-12 opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full opacity-60 animate-pulse delay-1000"></div>

              {/* Floating Cards */}
              <div className="absolute -right-28 -top-10 hidden xl:block animate-float">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-blue-400">5.0</div>
                  <div className="text-sm text-slate-300">Client Rating</div>
                </div>
              </div>

              <div className="absolute -left-20 -bottom-8 hidden xl:block animate-float-delayed">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-white">
                  <div className="text-2xl font-bold text-emerald-400">24/7</div>
                  <div className="text-sm text-slate-300">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
