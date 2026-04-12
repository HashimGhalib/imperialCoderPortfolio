"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function GithubProjects() {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true)
                const response = await fetch(
                    "https://api.github.com/users/HashimGhalib/repos?sort=updated&per_page=6"
                )

                if (!response.ok) {
                    throw new Error(`GitHub API error: ${response.status}`)
                }



                const data = await response.json()
                setRepos(data)
            } catch (err: any) {
                console.error("Failed to fetch projects:", err)
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchRepos()
    }, [])

    if (error) return <div className="font-body text-center py-10 text-red-500">Failed to load projects.</div>

    return (
        <section id="projects" className="py-20 max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-heading font-bold mb-10 tracking-tight">Featured Engineering <span className="text-blue-600">Projects</span></h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {loading ? (
                    // Simple Loading Skeletons
                    [...Array(6)].map((_, i) => (
                        <div key={i} className="h-40 rounded-xl bg-zinc-100 dark:bg-zinc-900 animate-pulse" />
                    ))
                ) : (
                    repos.map((repo: any) => (
                        <motion.div
                            key={repo.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:shadow-xl transition-all"
                        >
                            <h3 className="font-body font-bold text-lg text-blue-600 dark:text-blue-400">{repo.name}</h3>
                            <p className="text-sm font-body text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-2">
                                {repo.description || "No description provided."}
                            </p>

                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xs font-mono px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300">
                                    {repo.language || "Code"}
                                </span>
                                <a
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-body font-medium hover:underline text-zinc-900 dark:text-white"
                                >
                                    Source <ArrowRight size={16} className="inline-block ml-1" />
                                </a>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>


            <div className="mt-16 flex justify-center">
                <motion.a
                    href="/projects"
                    whileHover="hover"
                    className="group relative flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black font-body font-semibold transition-all shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-black/20"
                >
                    <span>View All Projects</span>

                    {/* Animated Arrow */}
                    <motion.div
                        variants={{
                            hover: { x: 5 }
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <ArrowRight size={20} />
                    </motion.div>

                    {/* Subtle Shine Effect */}
                    {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" /> */}
                </motion.a>
            </div>
        </section>
    )
}

