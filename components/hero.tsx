import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

interface HeroProps {
  profile: {
    name: string
    title: string
    tagline: string
    description: string
  }
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video with overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/presentacion_gt_mej_ca0b60a479 - copia.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{ opacity: 0.45 }}
        />
       
  <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/50 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white text-balance">{profile.tagline}</h1>
          <p className="text-xl md:text-2xl text-white/90 text-pretty max-w-2xl mx-auto">{profile.description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white font-semibold text-lg px-8">
              <Link href="#proyectos">Ver mi trabajo</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm text-lg border-white/30 text-white hover:bg-white/20 font-semibold px-8"
            >
              <Link href="/contacto">Contactar</Link>
            </Button>
                
                <Button
                   
              size="lg"
             
                  className="bg-white/10 backdrop-blur-sm flex text-lg  border-white/30 items-center border  text-white hover:bg-white/20 font-semibold px-8"
                >
                 <Link href="/CV-Alexander-Arvelo .pdf">Ver CV</Link>
                  
                </Button>
            
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  )
}
