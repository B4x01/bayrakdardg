"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "TechCo Kurumsal Site",
    category: "Web Tasarım",
    description: "Modern ve kullanıcı dostu kurumsal web sitesi tasarımı ve geliştirmesi.",
    image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "#"
  },
  {
    title: "Moda Markası E-ticaret",
    category: "E-ticaret",
    description: "Kapsamlı e-ticaret platformu tasarımı ve geliştirmesi.",
    image: "https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "#"
  },
  {
    title: "Startup X Mobil Uygulama",
    category: "Mobil Uygulama",
    description: "Yenilikçi mobil uygulama tasarımı ve geliştirmesi.",
    image: "https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "#"
  },
  {
    title: "Restaurant Web Sitesi",
    category: "Web Tasarım",
    description: "Modern restaurant web sitesi tasarımı ve rezervasyon sistemi.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "#"
  },
  {
    title: "Fitness Uygulaması",
    category: "Mobil Uygulama",
    description: "Kişiselleştirilmiş fitness takip uygulaması.",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "#"
  },
  {
    title: "B2B E-ticaret Platformu",
    category: "E-ticaret",
    description: "Toptan satış yapan firmalar için B2B e-ticaret platformu.",
    image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "#"
  }
]

export default function ProjectsPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Projelerimiz</h1>
            <p className="text-xl text-muted-foreground">
              Müşterilerimiz için geliştirdiğimiz başarılı projelerden bazıları.
              Her proje, benzersiz ihtiyaçlara özel çözümler içerir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden">
                  <AspectRatio ratio={16/9}>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105 duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="secondary" size="sm" className="rounded-full">
                        Projeyi İncele <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </AspectRatio>
                </div>
                <div className="p-5">
                  <Badge variant="secondary" className="mb-2">{project.category}</Badge>
                  <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}