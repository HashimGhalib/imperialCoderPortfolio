"use client"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Github, Linkedin, Send, CheckCircle2, XCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // States for status and loading
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({
        type: null,
        message: ""
    });

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://formspree.io/f/xyknayrp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({ name: "", email: "", message: "" });
                setStatus({ type: 'success', message: 'Message sent successfully!' });
            } else {
                setStatus({ type: 'error', message: 'Something went wrong. Try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Failed to connect. Check your internet.' });
        } finally {
            setIsSubmitting(false);
            // Hide popup after 4 seconds
            setTimeout(() => setStatus({ type: null, message: "" }), 4000);
        }
    };

    return (
        <>
            {/* Success/Error Popup */}
            <AnimatePresence>
                {status.type && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                        className="fixed bottom-10 right-6 md:right-10 z-[100] flex items-center gap-3 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl shadow-blue-500/10 min-w-[280px]"
                    >
                        <div className={`p-2 rounded-full ${status.type === 'success' ? 'bg-green-100 dark:bg-green-900/30 text-green-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
                            {status.type === 'success' ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                        </div>
                        <div>
                            <p className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                                {status.type === 'success' ? 'Success!' : 'Error'}
                            </p>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400">{status.message}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

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
                                Have a project in mind or looking to discuss software engineering opportunities? Drop me a message.
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
                                <span className="break-all">hashimghalib02@gmail.com</span>
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
                                required
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
                                required
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
                                required
                                value={formData.message}
                                onChange={handleChange}
                                name="message"
                                rows={4}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                            />
                        </motion.div>
                        <motion.button
                            disabled={isSubmitting}
                            type="submit"
                            variants={itemVariants}
                            whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <>Processing <Loader2 size={18} className="animate-spin" /></>
                            ) : (
                                <>Send Message <Send size={18} /></>
                            )}
                        </motion.button>
                    </form>
                </motion.div>
            </section>

            <Footer />
        </>
    )
}