import { Badge } from "@/components/ui/badge"
import SkillsCarousel from "./SkillsCarousel"

interface SkillsProps {
  skills: string[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Habilidades</h2>
          <p className="text-lg text-muted-foreground">Tecnologías y herramientas con las que trabajo</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
     <SkillsCarousel />
        </div>
      </div>
    </section>
  )
}
