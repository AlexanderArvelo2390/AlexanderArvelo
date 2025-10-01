import React from "react";

export function About() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">Sobre mí</h2>
        </div>
        <div className="prose prose-lg text-lg text-muted-foreground max-w-4xl mx-auto text-justify">
          <p>
            Soy Alexander Averlo, desarrollador full stack con más de 4 años de experiencia creando soluciones web modernas, funcionales y escalables. Me especializo en tecnologías como React, Next.js, Node.js y Tailwind CSS, y tengo un enfoque práctico y detallista tanto en frontend como en backend.
          </p>
          <br />
          <p>
            Actualmente estoy cursando una carrera técnica en Desarrollo de Software, lo que me permite seguir perfeccionando mis habilidades y mantenerme actualizado en un entorno que evoluciona constantemente.
          </p>
          <br />
          <p>
            Mi objetivo es construir aplicaciones que no solo funcionen bien, sino que resuelvan problemas reales, con interfaces limpias, datos bien estructurados y una experiencia de usuario cuidada. Me apasiona el trabajo en equipo, el análisis de datos y la mejora continua.
          </p>
          <br />
          <p>
            Si estás buscando a alguien que combine experiencia técnica, mentalidad analítica y compromiso, estás en el lugar correcto.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
