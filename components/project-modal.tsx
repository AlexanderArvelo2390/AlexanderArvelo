"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, CheckCircle2 } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl: string
  detailedDescription: string
  features: string[]
}

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-3xl text-primary">{project.title}</DialogTitle>
          <DialogDescription className="text-base">{project.description}</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2 text-foreground">Descripción Detallada</h3>
            <p className="text-muted-foreground leading-relaxed">{project.detailedDescription}</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 text-foreground">Características Principales</h3>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3 text-foreground">Tecnologías Utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="bg-secondary/10 text-secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <Button asChild className="w-full bg-primary hover:bg-primary/90" size="lg">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Visitar Proyecto en Vivo
            </a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
