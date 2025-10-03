"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

   if (res.ok) {
  toast({
    title: "¡Mensaje enviado! 🚀",
    description: "Gracias por contactarme. Te responderé pronto.",
  });
  setFormData({ name: "", email: "", subject: "", message: "" });
} else {
  const data = await res.json();
  toast({
    title: "Error ❌",
    description: data.error || "No se pudo enviar el mensaje. Intenta de nuevo.",
  });
}

    } catch {
      toast({
        title: "Error",
        description: "No se pudo enviar el mensaje. Intenta de nuevo.",
      });
    }
    setIsSubmitting(false);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" data-aos="fade-up">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
          className="bg-input"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
          className="bg-input"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Asunto</Label>
        <Input
          id="subject"
          name="subject"
          placeholder="¿De qué quieres hablar?"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-input"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Cuéntame sobre tu proyecto o consulta..."
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="bg-input resize-none"
        />
      </div>

      <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg" disabled={isSubmitting}>
        {isSubmitting ? (
          "Enviando..."
        ) : (
          <>
            <Send className="mr-2 h-5 w-5" />
            Enviar Mensaje
          </>
        )}
      </Button>
    </form>
  )
}
