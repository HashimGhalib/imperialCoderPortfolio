"use client"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Delay between each child element
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Animated Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="text-center px-6 max-w-4xl"
            >
                <motion.p
                    variants={itemVariants}
                    className="text-blue-500 font-medium tracking-widest uppercase text-sm mb-4"
                >
                    Software Developer
                </motion.p>

                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400"
                >
                    Designing Seamless Digital Experiences from Concept to Interface
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
                >
                    I craft responsive, user-centered frontends with modern frameworks, delivering fast, accessible, and visually engaging web applications.
                </motion.p>

                <motion.div variants={itemVariants} className="flex gap-4 justify-center">
                    <a
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25"
                    >
                        View Projects
                    </a>
                    <button className="px-8 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all">
                        <Link href="/contact">
                            Contact Me
                        </Link>
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}