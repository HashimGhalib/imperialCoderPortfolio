"use client";
import { motion, Variants } from "framer-motion"

export default function AboutMe() {
    const fadeIn: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" }
        })
    }

    return (
        <>
            <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Heading */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="lg:col-span-4"
                    >
                        <h2 className="text-4xl font-heading font-bold tracking-tight text-zinc-900 dark:text-white">
                            About <span className="text-blue-600">Me</span>
                        </h2>
                        <div className="h-1 w-12 bg-blue-600 mt-4 rounded-full" />
                    </motion.div>

                    {/* Right Column: Content */}
                    <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="lg:col-span-8 space-y-6"
                    >
                        <p className="font-body text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                            I am a <span className="font-bold text-blue-600">Software Engineer</span> and <span className="font-bold text-blue-600">Full-Stack Developer</span> focused on building scalable digital systems and high-performance user experiences.
                        </p>

                        <p className="font-body text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                            My work centers on developing robust web applications using Next.js and architecting efficient backend solutions. I thrive on solving complex technical challenges, from optimizing production-ready application trackers to designing secure, data-driven systems.
                        </p>

                        {/* Quick Skills/Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {/* Frontend Card */}
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <h4 className="font-heading font-bold text-blue-600">Frontend</h4>
                                <p className="font-body text-sm text-zinc-500">React, Next.js, Tailwind CSS, Framer Motion</p>
                            </div>

                            {/* Backend Card */}
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <h4 className="font-heading font-bold text-blue-600">Backend</h4>
                                <p className="font-body text-sm text-zinc-500">Node.js, PostgreSQL, REST APIs, Authentication</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </>
    )
}