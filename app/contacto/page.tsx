import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import portfolioData from "@/data/portfolio.json"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"

export default function ContactPage() {
  const { profile } = portfolioData

  return (
    <main className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Hablemos</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¿Quieres colaborar? No dudes en contactarme. Respondo todos los mensajes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
              <div className="space-y-8">
                <a
                  href="/CV-Alexander-Arvelo .pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground shadow-xsbg-primary hover:bg-primary/90  px-6 py-3 mb-6"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16v-8m0 8l-4-4m4 4l4-4m-8 8h8a2 2 0 002-2V7a2 2 0 00-2-2h-8a2 2 0 00-2 2v9a2 2 0 002 2z" /></svg>
                  Descarga CV
                </a>
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Información de Contacto</h2>
                <div className="space-y-4">
                  <a
                    href={`mailto:${profile.email}`}
                    className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors group"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-secondary/10 transition-colors">
                      <Mail className="h-5 w-5 text-primary group-hover:text-secondary" />
                    </div>
                    <span>{profile.email}</span>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 text-foreground">Redes Sociales</h3>
                <div className="flex gap-4">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-secondary/10 transition-colors group"
                  >
                    <Github className="h-6 w-6 text-primary group-hover:text-secondary" />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-secondary/10 transition-colors group"
                  >
                    <Linkedin className="h-6 w-6 text-primary group-hover:text-secondary" />
                  </a>
                  <a
                    href={profile.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-primary/10 hover:bg-secondary/10 transition-colors group"
                  >
                    <Twitter className="h-6 w-6 text-primary group-hover:text-secondary" />
                  </a>
                </div>
              </div>

              <div className="p-6 bg-muted/50 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Tiempo de respuesta:</strong> Generalmente respondo en 24-48
                  horas. Si tu proyecto es urgente, por favor indícalo en el mensaje.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer profile={profile} />
    </main>
  )
}
