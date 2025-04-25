import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

const projects = [
  {
    title: 'Aura Smile Studio',
    category: 'Web Tasarım',
    image:
      'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1600',
    logo: '',
    link: '#',
  },
  {
    title: 'Moda Markası E-ticaret',
    category: 'E-ticaret',
    image:
      'https://raw.githubusercontent.com/B4x01/bayrakdara/refs/heads/main/logo-light.png',
    logo: '',
    link: '#',
  },
  {
    title: 'Moda Markası E-ticaret',
    category: 'E-ticaret',
    image:
      'https://raw.githubusercontent.com/B4x01/bayrakdara/refs/heads/main/logo-light.png',
    logo: '/project-logos/fashion.png',
    link: '#',
  },
  {
    title: 'Moda Markası E-ticaret',
    category: 'E-ticaret',
    image:
      'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600',
    logo: '/project-logos/fashion.png',
    link: '#',
  },
  {
    title: 'Moda Markası E-ticaret',
    category: 'E-ticaret',
    image:
      'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1600',
    logo: '/project-logos/fashion.png',
    link: '#',
  },
  {
    title: 'Startup X Mobil Uygulama',
    category: 'Mobil Uygulama',
    image:
      'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?auto=compress&cs=tinysrgb&w=1600',
    logo: '/project-logos/startup.png',
    link: '#',
  },
];

// ... üst kısımlar değişmedi

export default function ProjectsPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div className="fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Son Projelerimiz
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              Başarıyla tamamladığımız projelerimizden bazıları. Her bir
              projemiz, müşterilerimizin ihtiyaçlarına özel çözümler içerir.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md fade-in-up animate-delay-100"
            >
              <div className="overflow-hidden">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-full"
                    >
                      Projeyi İncele <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </AspectRatio>
              </div>
              <div className="p-5">
                <Badge variant="secondary" className="mb-2">
                  {project.category}
                </Badge>
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
            </a>
          ))}
        </div>

        {/* 👇 Bu kısmı ekledim */}
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/projeler">Tüm Projeleri Gör</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
