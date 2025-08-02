/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useScroll, useTransform, type Variants } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ExternalLink,
  User,
  Code,
  MessageSquare,
  Rocket,
  Zap,
  Globe,
  Smartphone,
  Database,
  Palette,
  CheckCircle,
  Star,
  ArrowRight,
  Send,
  Phone,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react"
import { JSX } from "react/jsx-dev-runtime"

interface FormData {
  name: string
  email: string
  message: string
  service: string
}

interface NavItem {
  id: string
  label: string
  icon: JSX.Element
}

interface Service {
  icon: JSX.Element
  title: string
  description: string
  features: string[]
}

interface Project {
  title: string
  description: string
  image?: string
  video?: string
  github: string
  demo: string
  tags: string[]
  category: string
}

interface Skill {
  name: string
  level: number
  icon: string
}

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}

interface Stat {
  number: string
  label: string
  icon: JSX.Element
}

function App() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"
    }
    return "light"
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    service: "web-development",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState("")

  const { scrollYProgress } = useScroll()
  const yRange = useTransform(scrollYProgress, [0, 1], [0, 100])

  // Refs for each section
  const sectionRefs = {
    hero: useRef<HTMLElement>(null),
    about: useRef<HTMLElement>(null),
    services: useRef<HTMLElement>(null),
    projects: useRef<HTMLElement>(null),
    skills: useRef<HTMLElement>(null),
    testimonials: useRef<HTMLElement>(null),
    contact: useRef<HTMLElement>(null),
  }

  // Ensure theme component doesn't render until mounted on client
  useEffect(() => {
    setMounted(true)
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  // Handle intersection observer for sections
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-80px 0px -80px 0px",
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        observer.observe(ref.current)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [mounted])

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const section = sectionRefs[sectionId as keyof typeof sectionRefs]?.current
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual email service
    try {
      // You can integrate with EmailJS, Formspree, or your backend here
      console.log("Form submitted:", formData)
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", message: "", service: "web-development" })
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(""), 3000)
    }
  }

  const navItems: NavItem[] = [
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "services", label: "Services", icon: <Rocket size={18} /> },
    { id: "projects", label: "Projects", icon: <Code size={18} /> },
    { id: "skills", label: "Skills", icon: <Zap size={18} /> },
    { id: "testimonials", label: "Testimonials", icon: <Star size={18} /> },
    { id: "contact", label: "Contact", icon: <MessageSquare size={18} /> },
  ]

  const services: Service[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description:
        "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile-First Design",
      description: "Mobile-responsive designs that look perfect on all devices and screen sizes.",
      features: ["Cross-Platform", "Touch Optimized", "Progressive Web Apps", "Native Feel"],
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Full-Stack Solutions",
      description: "Complete end-to-end solutions including backend development, databases, and API integration.",
      features: ["Database Design", "API Development", "Cloud Deployment", "Security"],
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that provide exceptional user experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Brand Identity"],
    },
  ]

  const projects: Project[] = [
    {
      title: "School Management System",
      description:
        "A comprehensive school management platform with student tracking, grade management, and parent communication features.",
      image: "https://via.placeholder.com/400x250",
      video: "",
      github: "https://github.com/AtulmishraIT/school-management",
      demo: "https://school-management-atulmishra.vercel.app",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      category: "Full-Stack",
    },
    {
      title: "Restaurant Management Platform",
      description: "Modern restaurant website with online ordering, menu management, and customer reviews system.",
      image: "https://via.placeholder.com/400x250",
      video: "https://www.youtube.com/embed/5xlAztfMaTg",
      github: "https://github.com/AtulmishraIT/user-restaurant",
      demo: "#",
      tags: ["React", "Node.js", "MongoDB", "Express.js", "Stripe API"],
      category: "E-commerce",
    },
    {
      title: "Interactive Snake Game",
      description:
        "Classic snake game with modern UI, high scores, and smooth animations built with vanilla JavaScript.",
      image: "https://via.placeholder.com/400x250",
      video: "https://www.youtube.com/embed/g_LdkhWYs0k",
      github: "https://github.com/AtulmishraIT/SnakeGame",
      demo: "https://snakegame-atulmishra.netlify.app/",
      tags: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      category: "Game",
    },
    {
      title: "Currency Converter App",
      description: "Real-time currency converter with live exchange rates and historical data visualization.",
      video: "https://www.youtube.com/embed/iFdsrdmazAk",
      image: "https://via.placeholder.com/400x250",
      github: "https://github.com/AtulmishraIT/Currency-Converter",
      demo: "https://currency-converter-atulmishra.netlify.app/",
      tags: ["JavaScript", "API Integration", "Chart.js", "Responsive Design"],
      category: "Utility",
    },
  ]

  const skills: Skill[] = [
    { name: "JavaScript", level: 95, icon: "🟨" },
    { name: "React.js", level: 90, icon: "⚛️" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "HTML/CSS", level: 98, icon: "🎨" },
    { name: "Tailwind CSS", level: 88, icon: "💨" },
    { name: "Next.js", level: 85, icon: "▲" },
    { name: "MongoDB", level: 80, icon: "🍃" },
    { name: "Express.js", level: 82, icon: "🚀" },
  ]

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Atul delivered an exceptional website that exceeded our expectations. His attention to detail and technical expertise is outstanding.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Michael Chen",
      role: "Founder, Digital Solutions",
      content:
        "Working with Atul was a game-changer for our business. The website he built increased our conversions by 40%.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      content:
        "Professional, reliable, and incredibly talented. Atul transformed our vision into a beautiful, functional website.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const stats: Stat[] = [
    { number: "10+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "3+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "1+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "99%", label: "Client Satisfaction", icon: <TrendingUp className="w-6 h-6" /> },
  ]

  // Animation variants with proper TypeScript types
  const fadeInUp: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const scaleIn: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const slideInLeft: Variants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  const slideInRight: Variants = {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }

  return (
    <div className={`${theme === "dark" ? "dark" : ""} min-h-screen transition-colors duration-300`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg transition-colors duration-300">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <div className="relative">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    WebCraft Studio
                  </h1>
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex items-center space-x-8"
              >
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/30"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute inset-0 bg-blue-50 dark:bg-blue-900/30 rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                ))}

                {/* Theme Toggle */}
                {mounted && (
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
                    aria-label="Toggle theme"
                  >
                    <AnimatePresence mode="wait">
                      {theme === "light" ? (
                        <motion.div
                          key="moon"
                          initial={{ rotate: -90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: 90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Moon size={20} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="sun"
                          initial={{ rotate: 90, opacity: 0 }}
                          animate={{ rotate: 0, opacity: 1 }}
                          exit={{ rotate: -90, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Sun size={20} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                )}
              </motion.nav>

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden space-x-4">
                {mounted && (
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="p-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                    aria-label="Toggle theme"
                  >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                  </motion.button>
                )}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300"
                  aria-label="Toggle menu"
                >
                  <AnimatePresence mode="wait">
                    {mobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X size={24} />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu size={24} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
              >
                <div className="container mx-auto px-4 py-4">
                  <motion.nav
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col space-y-2"
                  >
                    {navItems.map((item) => (
                      <motion.button
                        key={item.id}
                        variants={fadeInUp}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </motion.button>
                    ))}
                  </motion.nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="pt-20">
          {/* Hero Section */}
          <section
            ref={sectionRefs.hero}
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
              <motion.div
                className="absolute inset-0 opacity-30"
                animate={{
                  background: [
                    "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)",
                    "radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
              />

              {/* Floating Elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            <div className="container mx-auto px-4 z-10">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="text-center lg:text-left"
                  >
                    <motion.div
                      variants={fadeInUp}
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 mb-6"
                    >
                      <Rocket className="w-4 h-4 mr-2" />
                      Welcome to WebCraft Studio
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                      <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                        Crafting Digital
                      </span>
                      <br />
                      <span className="text-gray-900 dark:text-white">Experiences</span>
                    </motion.h1>

                    <motion.p
                      variants={fadeInUp}
                      className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
                    >
                      I build modern, responsive websites and web applications that drive business growth and deliver
                      exceptional user experiences.
                    </motion.p>

                    <motion.div
                      variants={fadeInUp}
                      className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection("contact")}
                        className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center"
                      >
                        Start Your Project
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection("projects")}
                        className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600"
                      >
                        View My Work
                      </motion.button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div variants={fadeInUp} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                      {stats.map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          variants={scaleIn}
                          whileHover={{ scale: 1.05 }}
                          className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl backdrop-blur-sm"
                        >
                          <div className="flex justify-center mb-2 text-blue-600 dark:text-blue-400">{stat.icon}</div>
                          <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>

                  {/* Right Content - Profile Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative flex justify-center lg:justify-end"
                  >
                    <div className="relative">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 p-1"
                      >
                        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900" />
                      </motion.div>

                      <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                        <img src="/Webcraft-logo.jpg" alt="Atul Mishra - Web Developer" className="w-full h-full object-cover" />
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0.1 }}
                          className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"
                        />
                      </div>

                      {/* Floating Tech Icons */}
                      {[
                        { icon: "⚛️", delay: 0, position: { top: "10%", right: "-10%" } },
                        { icon: "🟨", delay: 0.5, position: { bottom: "20%", left: "-15%" } },
                        { icon: "🟢", delay: 1, position: { top: "30%", left: "-10%" } },
                        { icon: "💨", delay: 1.5, position: { bottom: "10%", right: "-5%" } },
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: item.delay, duration: 0.5 }}
                          className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-2xl"
                          style={item.position}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                        >
                          {item.icon}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                className="cursor-pointer"
                onClick={() => scrollToSection("about")}
              >
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
                  />
                </div>
              </motion.div>
            </motion.div>
          </section>

          {/* About Section */}
          <motion.section
            ref={sectionRefs.about}
            id="about"
            className="py-20 bg-white dark:bg-gray-900"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-6xl mx-auto">
                <motion.div variants={fadeInUp} className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      About WebCraft Studio
                    </span>
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Transforming ideas into powerful digital solutions that drive business success
                  </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <motion.div
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Building the Future of Web Development
                    </h3>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      As the founder of WebCraft Studio, I specialize in creating cutting-edge web solutions that help
                      businesses thrive in the digital landscape. With expertise in the MERN stack and modern
                      development practices, I deliver websites and applications that are not just visually stunning,
                      but also highly functional and scalable.
                    </p>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      My approach combines technical excellence with business strategy, ensuring every project delivers
                      measurable results. From startups to established enterprises, I help clients achieve their digital
                      goals through innovative web solutions.
                    </p>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      {[
                        { label: "Custom Development", icon: <Code className="w-5 h-5" /> },
                        { label: "Responsive Design", icon: <Smartphone className="w-5 h-5" /> },
                        { label: "SEO Optimization", icon: <TrendingUp className="w-5 h-5" /> },
                        { label: "Fast Delivery", icon: <Clock className="w-5 h-5" /> },
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          variants={scaleIn}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-blue-600 dark:text-blue-400"
                        >
                          {item.icon}
                          <span className="font-medium">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  <motion.div
                    variants={slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
                      <div className="grid grid-cols-2 gap-6">
                        {[
                          { title: "Years of Experience", value: "2+", icon: <Award className="w-8 h-8" /> },
                          { title: "Projects Completed", value: "50+", icon: <CheckCircle className="w-8 h-8" /> },
                          { title: "Happy Clients", value: "30+", icon: <Users className="w-8 h-8" /> },
                          { title: "Success Rate", value: "99%", icon: <TrendingUp className="w-8 h-8" /> },
                        ].map((stat, index) => (
                          <motion.div
                            key={stat.title}
                            variants={scaleIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
                          >
                            <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">{stat.icon}</div>
                            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.title}</div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Services Section */}
          <motion.section
            ref={sectionRefs.services}
            id="services"
            className="py-20 bg-gray-50 dark:bg-gray-800"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Comprehensive web development solutions tailored to your business needs
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service.title}
                    variants={scaleIn}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                  >
                    <div className="relative mb-6">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl shadow-lg group-hover:shadow-xl transition-all"
                      >
                        {service.icon}
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.title}</h3>

                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIndex * 0.1 }}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Projects Section */}
          <motion.section
            ref={sectionRefs.projects}
            id="projects"
            className="py-20 bg-white dark:bg-gray-900"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Featured Projects
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Showcasing innovative solutions that drive business growth and user engagement
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-2 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={scaleIn}
                    whileHover={{ y: -5 }}
                    className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="relative h-64 overflow-hidden">
                      {project.video ? (
                        <iframe
                          src={project.video}
                          title={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <img
                          src={project.image || "/placeholder.svg?height=250&width=400"}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      )}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>

                      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center">
                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <Github size={18} className="mr-2" />
                          Code
                        </motion.a>

                        <motion.a
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                        >
                          <ExternalLink size={18} className="mr-2" />
                          Live Demo
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            ref={sectionRefs.skills}
            id="skills"
            className="py-20 bg-gray-50 dark:bg-gray-800"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Technical Expertise
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Mastering cutting-edge technologies to deliver exceptional results
                </p>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="grid md:grid-cols-2 gap-8"
                >
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeInUp}
                      className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{skill.icon}</span>
                          <span className="font-semibold text-lg text-gray-800 dark:text-gray-200">{skill.name}</span>
                        </div>
                        <span className="text-blue-600 dark:text-blue-400 font-bold">{skill.level}%</span>
                      </div>

                      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 relative"
                        >
                          <motion.div
                            animate={{ x: [-10, 10, -10] }}
                            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                            className="absolute inset-0 bg-white/20 rounded-full"
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Testimonials Section */}
          <motion.section
            ref={sectionRefs.testimonials}
            id="testimonials"
            className="py-20 bg-white dark:bg-gray-900"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Client Success Stories
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Hear what our clients say about working with WebCraft Studio
                </p>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid md:grid-cols-3 gap-8"
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    variants={scaleIn}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4 border-2 border-blue-200 dark:border-blue-800"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            ref={sectionRefs.contact}
            id="contact"
            className="py-20 bg-gray-50 dark:bg-gray-800"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Let&apos;s Build Something Amazing
                  </span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                  Ready to transform your digital presence? Let&apos;s discuss your project and bring your vision to
                  life.
                </p>
              </motion.div>

              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Contact Info */}
                  <motion.div
                    variants={slideInLeft}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="space-y-8"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                      <p className="mb-8 opacity-90 leading-relaxed">
                        Ready to start your next project? I&apos;m here to help you create something extraordinary.
                        Let&apos;s discuss how we can bring your vision to life with cutting-edge web solutions.
                      </p>

                      <div className="space-y-6">
                        <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-4">
                          <div className="bg-white/10 p-3 rounded-lg">
                            <Mail className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-medium">Email</p>
                            <p className="opacity-90">theatulmishra7@gmail.com</p>
                          </div>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-4">
                          <div className="bg-white/10 p-3 rounded-lg">
                            <Phone className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-medium">Phone</p>
                            <p className="opacity-90">+91 7756054570</p>
                          </div>
                        </motion.div>

                        <motion.div whileHover={{ x: 5 }} className="flex items-center space-x-4">
                          <div className="bg-white/10 p-3 rounded-lg">
                            <MapPin className="w-6 h-6" />
                          </div>
                          <div>
                            <p className="font-medium">Location</p>
                            <p className="opacity-90">Mumbai, India</p>
                          </div>
                        </motion.div>
                      </div>

                      <div className="flex space-x-4 mt-8">
                        {[
                          { icon: <Github size={20} />, href: "https://github.com/AtulMishraIT" },
                          { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/atul-mishra-b05668308/" },
                          { icon: <Twitter size={20} />, href: "https://twitter.com" },
                          { icon: <Instagram size={20} />, href: "https://instagram.com/atulmish.co" },
                        ].map((social, index) => (
                          <motion.a
                            key={index}
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors"
                          >
                            {social.icon}
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Contact Form */}
                  <motion.div
                    variants={slideInRight}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                            placeholder="Your full name"
                          />
                        </motion.div>

                        <motion.div variants={fadeInUp} className="space-y-2">
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                            placeholder="your@email.com"
                          />
                        </motion.div>
                      </div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all"
                        >
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </motion.div>

                      <motion.div variants={fadeInUp} className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                          Project Details *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all resize-none"
                          placeholder="Tell me about your project, timeline, and any specific requirements..."
                        />
                      </motion.div>

                      <motion.button
                        variants={fadeInUp}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                          />
                        ) : (
                          <Send className="w-5 h-5 mr-2" />
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </motion.button>

                      <AnimatePresence>
                        {submitStatus && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className={`text-center p-4 rounded-lg ${
                              submitStatus === "success"
                                ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400"
                                : "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400"
                            }`}
                          >
                            {submitStatus === "success"
                              ? "Thank you! Your message has been sent successfully. I'll get back to you soon!"
                              : "Sorry, there was an error sending your message. Please try again."}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mb-4"
                >
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    WebCraft Studio
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Transforming ideas into powerful digital solutions. Specializing in modern web development,
                    responsive design, and user-centric experiences that drive business growth.
                  </p>
                </motion.div>
                <div className="flex space-x-4">
                  {[
                    { icon: <Github size={20} />, href: "https://github.com/AtulMishraIT" },
                    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/atul-mishra-b05668308/" },
                    { icon: <Twitter size={20} />, href: "https://twitter.com" },
                    { icon: <Instagram size={20} />, href: "https://instagram.com/atulmish.com" },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Services</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Web Development
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Mobile Apps
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      UI/UX Design
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Consultation
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("projects")}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Projects
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("skills")}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Skills
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0"
                >
                  © {new Date().getFullYear()} WebCraft Studio. All rights reserved. Built with ❤️ by Atul Mishra
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex space-x-6 text-sm text-gray-600 dark:text-gray-400"
                >
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    Terms of Service
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
