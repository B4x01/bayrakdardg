import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div className="absolute inset-0 bg-grid-foreground/5 [mask-image:linear-gradient(to_bottom,transparent,black)]" />
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Dijitalde <span className="text-primary">Etkileyici</span> Varlık Yaratıyoruz
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Web sitesi tasarımı, sosyal medya yönetimi ve dijital pazarlama ile markanızı bir üst seviyeye taşıyoruz. <span className="font-medium">Ödemeyi iş bittikten sonra yapın.</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/demo-istegi">
                Demo İsteği <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/hizmetler">Hizmetlerimiz</Link>
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center text-muted-foreground">
              <div className="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>100+ Mutlu Müşteri</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <div className="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>500+ Tamamlanan Proje</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <div className="mr-3 h-10 w-10 flex items-center justify-center rounded-full bg-primary/10">
                <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Ödemeyi İşten Sonra Yapın</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}