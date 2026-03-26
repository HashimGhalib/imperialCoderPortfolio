"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"


export default function Navbar() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    // Avoid hydration mismatch by only rendering the toggle after mount
    useEffect(() => {
        setMounted(true)
    }, [])

    return (
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
            <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-bold text-xl tracking-tight cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <Link href="/">
                        ImperialCoder
                    </Link>
                </motion.span>

                <div className="flex gap-8 items-center">
                    <Link
                        href="/about"
                        className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                        Projects
                    </Link>


                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="relative p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700 transition-all overflow-hidden"
                        aria-label="Toggle Theme"
                    >
                        <div className="relative w-5 h-5">
                            {!mounted ? (
                                // Skeleton/Placeholder to prevent layout shift
                                <div className="w-5 h-5" />
                            ) : (
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={theme}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute inset-0 flex items-center justify-center"
                                    >
                                        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                                    </motion.div>
                                </AnimatePresence>
                            )}
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}