"use client"

import * as React from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon, Menu, X } from "lucide-react"

// Example nav item type; replace/populate from props or context
type NavItem = {
  id: string
  label: string
  icon?: React.ReactNode
  href?: string
}

interface HeaderProps {
  navItems: NavItem[]
  activeSection: string
  scrollToSection: (id: string) => void
  theme: "light" | "dark"
  setTheme: (t: "light" | "dark") => void
  mounted: boolean
}

const Header: React.FC<HeaderProps> = ({
  navItems,
  activeSection,
  scrollToSection,
  theme,
  setTheme,
  mounted,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const toggleMenu = () => setMobileMenuOpen((o) => !o)

  // close on outside click
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest("[data-header]")) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <header
      data-header
      className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg transition-colors duration-300"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center flex-shrink-0"
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

        {/* Desktop Nav + Theme */}
        <div className="hidden md:flex items-center space-x-4">
          <nav className="flex items-center space-x-2">
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  setMobileMenuOpen(false)
                }}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07, duration: 0.3 }}
                whileHover={{ scale: 1.03 }}
                className={`relative flex items-center space-x-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }`}
              >
                {item.icon && <span className="mr-1">{item.icon}</span>}
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </motion.button>
            ))}
          </nav>

          {mounted && (
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="ml-3 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                {theme === "light" ? (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          )}
        </div>

        {/* Mobile controls */}
        <div className="flex items-center md:hidden space-x-2">
          {mounted && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
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
            <AnimatePresence mode="wait" initial={false}>
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

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-inner"
          >
            <div className="max-w-[1280px] mx-auto px-4 py-4">
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.08 } },
                }}
                className="flex flex-col gap-2"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id)
                      setMobileMenuOpen(false)
                    }}
                    variants={{
                      hidden: { opacity: 0, y: 8 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.02 }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition ${
                      activeSection === item.id
                        ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                    }`}
                  >
                    {item.icon && <span>{item.icon}</span>}
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </motion.nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
