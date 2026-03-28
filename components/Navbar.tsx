"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const navLinks = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
    ]

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-bold text-xl tracking-tight cursor-pointer z-50"
                >
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        ImperialCoder
                    </Link>
                </motion.span>

                {/* Desktop Navigation & Theme Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-8 items-center mr-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 transition-all overflow-hidden"
                        aria-label="Toggle Theme"
                    >
                        <div className="relative w-5 h-5 flex items-center justify-center">
                            {mounted && (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={theme}
                                        initial={{ y: 10, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -10, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                                    </motion.div>
                                </AnimatePresence>
                            )}
                        </div>
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-zinc-600 dark:text-zinc-400"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-zinc-600 dark:text-zinc-400 px-2 py-1"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}