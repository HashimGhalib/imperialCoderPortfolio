"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Footer from "@/components/Footer"

export default function ProjectPage() {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setLoading(true)
                const response = await fetch(
                    "https://api.github.com/users/HashimGhalib/repos?sort=updated&per_page=16"
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

    if (error) return <div className="text-center py-20 text-red-500">Failed to load projects.</div>

    return (
        <>
            <section className="py-20 max-w-5xl mx-auto px-4">
                <h2 className="py-10 text-4xl text-center font-bold mb-10 tracking-tight">Featured Engineering <span className="text-blue-600">Projects</span></h2>

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
                                <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400">{repo.name}</h3>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2 line-clamp-2">
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
                                        className="text-sm font-medium hover:underline text-zinc-900 dark:text-white"
                                    >
                                        Source <ArrowRight size={16} className="inline-block ml-1" />
                                    </a>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </section>

            <Footer />
        </>
    )
}