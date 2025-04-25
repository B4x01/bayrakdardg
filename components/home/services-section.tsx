import { ArrowRight, Globe, PenTool, TrendingUp, MonitorSmartphone } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Web Tasarım & Geliştirme",
    description: "Mobil uyumlu, hızlı ve modern web siteleri tasarlıyor ve geliştiriyoruz. İhtiyaçlarınıza özel çözümler sunuyoruz.",
    icon: Globe,
    link: "/hizmetler/web-tasarim"
  },
  {
    title: "Dijital Pazarlama",
    description: "Hedef kitlenize ulaşmanızı sağlayan SEO, Google Ads ve içerik stratejileri ile dijital varlığınızı güçlendiriyoruz.",
    icon: TrendingUp,
    link: "/hizmetler/dijital-pazarlama"
  },
  {
    title: "Sosyal Medya Yönetimi",
    description: "Markanızı sosyal medyada etkin bir şekilde yönetiyor, topluluk oluşturuyor ve etkileşim sağlıyoruz.",
    icon: MonitorSmartphone,
    link: "/hizmetler/sosyal-medya"
  },
  {
    title: "Grafik & Marka Tasarımı",
    description: "Logo, kurumsal kimlik ve dijital varlıklar için profesyonel tasarım hizmetleri sunuyoruz.",
    icon: PenTool,
    link: "/hizmetler/grafik-tasarim"
  }
]

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hizmetlerimiz</h2>
          <p className="text-muted-foreground text-lg">
            İşinizi büyütmenize yardımcı olacak dijital çözümler sunuyoruz. Her ihtiyaca özel profesyonel hizmetler.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-muted bg-card/50 hover:bg-card/80 transition-colors overflow-hidden group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground min-h-[100px]">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button asChild variant="link" className="p-0 group-hover:text-primary transition-colors">
                  <Link href={service.link}>
                    Detaylı Bilgi <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href="/hizmetler">Tüm Hizmetlerimiz</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}