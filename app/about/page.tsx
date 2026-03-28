"use client"
import Footer from "@/components/Footer"
import { motion, Variants } from "framer-motion"

export default function About() {
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
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Heading */}
                    <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="md:col-span-4"
                    >
                        <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
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
                        className="md:col-span-8 space-y-6"
                    >
                        <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
                            I am a <span className="font-bold text-blue-600">Computer Engineering</span> student and <span className="font-bold text-blue-600">software practitioner</span> focused on the intersection of hardware and scalable digital systems.
                        </p>

                        <p className="text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                            My work spans from developing high-performance web applications using Next.js to designing robust Embedded Systems and IoT solutions. I thrive on solving complex technical challenges, whether it's debugging a production-ready application tracker or architecting biometric attendance systems.
                        </p>

                        {/* Quick Skills/Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <h4 className="font-bold text-blue-600">Engineering</h4>
                                <p className="text-sm text-zinc-500">Embedded Systems, VHDL, IoT</p>
                            </div>
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                                <h4 className="font-bold text-blue-600">Software</h4>
                                <p className="text-sm text-zinc-500">React, Next.js, Full-stack Dev</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </>
    )
}