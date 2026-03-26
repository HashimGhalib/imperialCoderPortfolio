"use client"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

interface contactFormDataProps {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.1, duration: 0.6 }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0 }
    }

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://formspree.io/f/xyknayrp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: "", email: "", message: "" }); // Clear form
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <section className="py-24 px-6 max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-50 dark:bg-zinc-900/50 p-8 md:p-12 rounded-3xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-sm"
                >
                    {/* Left Side: Text & Socials */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
                                Let's <span className="text-blue-600">Connect</span>
                            </h2>
                            <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-lg">
                                Have a project in mind or looking to discuss engineering opportunities? Drop me a message.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <motion.a
                                variants={itemVariants}
                                href="mailto:hashighalib02@gmail.com"
                                className="flex items-center gap-4 text-zinc-600 dark:text-zinc-300 hover:text-blue-600 transition-colors"
                            >
                                <div className="p-3 rounded-lg bg-white dark:bg-zinc-800 shadow-sm">
                                    <Mail size={20} />
                                </div>
                                <span>hashimghalib02@gmail.com</span>
                            </motion.a>

                            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
                                <Link
                                    href="https://github.com/HashimGhalib"
                                    target="_blank"
                                    className="p-3 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-black hover:scale-110 transition-transform"
                                >
                                    <Github size={20} />
                                </Link>
                                <Link
                                    href="https://www.linkedin.com/in/ghalib-hashim-3a2679248/"
                                    target="_blank"
                                    className="p-3 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform"
                                >
                                    <Linkedin size={20} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <motion.div variants={itemVariants}>
                            <input
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <input
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <textarea
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                rows={4}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                            />
                        </motion.div>
                        <motion.button
                            type="submit"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
                        >
                            Send Message <Send size={18} />
                        </motion.button>
                    </form>
                </motion.div>
            </section>

            <Footer />
        </>
    )
}