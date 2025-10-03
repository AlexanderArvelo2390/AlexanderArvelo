"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";


const frontendSkills = [
  { src: "/assets/react-svgrepo-com.svg", alt: "React" },
  { src: "/assets/next-16-svgrepo-com.svg", alt: "Next.js" },
  { src: "/assets/vue-9-logo-svgrepo-com.svg", alt: "Vue.js" },
  { src: "/assets/typescript-svgrepo-com.svg", alt: "TypeScript" },
  { src: "/assets/javascript-svgrepo-com.svg", alt: "JavaScript" },
  { src: "/assets/tailwindcss-svgrepo-com.svg", alt: "TailwindCSS" },
   {src:"astro-logo-dark.svg", alt:"astro"},
  // Agrega más logos si tienes
];

const backendSkills = [
  { src: "/node-js-svgrepo-com.svg", alt: "Node.js" },
  { src: "/node-svgrepo-com.svg", alt: "Express" },
  { src: "/postgresql-logo-svgrepo-com.svg", alt: "PostgreSQL" },
  { src: "/php-svgrepo-com.svg", alt: "PHP" },
  { src: "/firebase-svgrepo-com.svg", alt: "Firebase" },
  { src: "/strapi-svgrepo-com.svg", alt: "strapi" },
  { src: "/node-js-svgrepo-com.svg", alt: "Node.js" },
  { src: "/node-svgrepo-com.svg", alt: "Express" },
  { src: "/postgresql-logo-svgrepo-com.svg", alt: "PostgreSQL" },
  { src: "/php-svgrepo-com.svg", alt: "PHP" },
  { src: "/firebase-svgrepo-com.svg", alt: "Firebase" },
  { src: "/strapi-svgrepo-com.svg", alt: "strapi" },
 
  // Agrega más logos si tienes
];

function SkillSwiper({ skills, title, reverse = false }) {
  return (
    <div className="mb-10">
      <h3 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4 text-center mb-10">
        {title}
      </h3>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        loop
        autoplay={{
          delay: 2000,
          reverseDirection: reverse,
        }}
        speed={4000}
        className="py-4"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {skills.map((skill, idx) => (
          <SwiperSlide key={idx} className="flex justify-center items-center">
            {skill.alt === "Next.js" ? (
              <Image
                src={skill.src}
                alt={skill.alt}
                width={64}
                height={64}
                className="object-contain "
                priority={idx === 0}
              />
            ) : (
              <img
                src={skill.src}
                alt={skill.alt}
                className="h-16 w-16 object-contain "
                loading={idx === 0 ? "eager" : "lazy"}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

function SkillsCarousel() {
  return (
    <section className="container py-12">
     
      <SkillSwiper skills={frontendSkills} title="Frontend" reverse={false} />
      <SkillSwiper skills={backendSkills} title="Backend" reverse={true} />
    </section>
  );
}

export default SkillsCarousel;
