"use client"
import { motion } from "framer-motion"

const skillCategories = [
    {
        title: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "Backend & DB",
        items: ["Node.js", "Express", "MongoDB", "Firebase", "PostgreSQL"],
    },
    {
        title: "DevOps & Tools",
        items: ["Git", "GitHub", "Docker", "Vercel", "Postman"],
    },
]

export default function Skills() {
    return (
        <section id="skills" className="py-24 px-6 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    Technical <span className="text-blue-600">Stack</span>
                </h2>
                <p className="mt-4 text-zinc-500 dark:text-zinc-400">
                    A broad overview of the technologies I use to build scalable software.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillCategories.map((category, idx) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 backdrop-blur-sm"
                    >
                        <h3 className="text-lg font-bold mb-6 text-blue-600 dark:text-blue-400">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {category.items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 text-sm font-medium rounded-lg 
                             bg-white dark:bg-zinc-800 
                             text-zinc-700 dark:text-zinc-300 
                             border border-zinc-200 dark:border-zinc-700 
                             hover:border-blue-500 dark:hover:border-blue-500 
                             transition-all duration-300 shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}