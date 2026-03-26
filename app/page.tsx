import Hero from "@/components/Hero"
import GithubProjects from "@/components/GithubProjects"
import Skills from "@/components/Skills"
import Footer from "@/components/Footer"
import AboutMe from "@/components/AboutMe"


export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black selection:bg-blue-500/30">
      <Hero />
      <AboutMe />
      <GithubProjects />
      <Skills />

      <Footer />
    </main>
  )
}