import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary/90 p-8 md:p-12 lg:p-16">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Dijital Başarı İçin İlk Adımı Atın
            </h2>
            <p className="text-primary-foreground/90 text-lg md:text-xl mb-8">
              Markanızı dijitalde güçlendirmek, satışlarınızı artırmak ve online varlığınızı optimize etmek için bizimle çalışın. Ücretsiz danışmanlık için hemen iletişime geçin.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/demo-istegi">
                  Ücretsiz Demo İsteyin <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 rounded-full">
                <Link href="/iletisim">
                  Bize Ulaşın
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-primary-foreground/10 blur-3xl" />
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-primary-foreground/10 blur-2xl" />
        </div>
      </div>
    </section>
  )
}