import { Github, Linkedin, Twitter, Mail } from "lucide-react"

interface FooterProps {
  profile: {
    name: string
    email: string
    github: string
    linkedin: string
    twitter: string
  }
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">{"<Dev />"}</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Desarrollador apasionado por crear experiencias web excepcionales.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="/#proyectos" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="/contacto" className="text-primary-foreground/80 hover:text-secondary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Conecta Conmigo</h4>
            <div className="flex gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-secondary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-secondary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-secondary/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-secondary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/70 text-sm">
            © {new Date().getFullYear()} {profile.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
