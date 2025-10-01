import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Footer } from "@/components/footer"
import portfolioData from "@/data/portfolio.json"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero profile={portfolioData.profile} />
      <Projects projects={portfolioData.projects} />
      <Skills skills={portfolioData.skills} />
      <Footer profile={portfolioData.profile} />
    </main>
  )
}
