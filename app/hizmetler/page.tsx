"use client"

import Link from "next/link"
import { ArrowRight, Globe, TrendingUp, Search, PenTool, Users, Code, Database, BarChart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    id: "web-tasarim",
    title: "Web Tasarım & Geliştirme",
    description: "Kullanıcı dostu, modern ve mobil uyumlu web siteleri tasarlıyor ve geliştiriyoruz.",
    icon: Globe,
    subServices: [
      "E-ticaret platformu geliştirme",
      "İçerik yönetim sistemleri (CMS)",
      "API entegrasyonları",
      "Web uygulaması geliştirme"
    ]
  },
  {
    id: "dijital-pazarlama",
    title: "Dijital Pazarlama",
    description: "Markanızı doğru hedef kitleye ulaştıracak dijital pazarlama stratejileri oluşturuyoruz.",
    icon: TrendingUp,
    subServices: [
      "Google Ads yönetimi",
      "Sosyal medya reklamları",
      "İçerik pazarlaması",
      "E-posta pazarlaması"
    ]
  },
  {
    id: "seo",
    title: "SEO Optimizasyonu",
    description: "Arama motorlarında üst sıralarda yer almanızı sağlayacak SEO çalışmaları yapıyoruz.",
    icon: Search,
    subServices: [
      "Teknik SEO optimizasyonu",
      "İçerik optimizasyonu",
      "Anahtar kelime analizi",
      "Yerel SEO"
    ]
  },
  {
    id: "grafik-tasarim",
    title: "Grafik Tasarım",
    description: "Markanızı yansıtan logo, kurumsal kimlik ve diğer grafik tasarım hizmetleri sunuyoruz.",
    icon: PenTool,
    subServices: [
      "Logo ve kurumsal kimlik",
      "UI/UX tasarımı",
      "Sosyal medya görselleri",
      "Baskı materyalleri"
    ]
  },
  {
    id: "sosyal-medya",
    title: "Sosyal Medya Yönetimi",
    description: "Sosyal medya platformlarında markanızı etkin bir şekilde temsil ediyoruz.",
    icon: Users,
    subServices: [
      "Strateji geliştirme",
      "İçerik yönetimi",
      "Topluluk yönetimi",
      "Performans analizi"
    ]
  },
  {
    id: "yazilim",
    title: "Özel Yazılım Çözümleri",
    description: "İhtiyaçlarınıza özel web ve mobil yazılım çözümleri geliştiriyoruz.",
    icon: Code,
    subServices: [
      "Web uygulamaları",
      "Mobil uygulamalar",
      "API geliştirme",
      "Veritabanı yönetimi"
    ]
  },
  {
    id: "crm",
    title: "CRM Yönetim Sistemleri",
    description: "Müşteri ilişkilerinizi geliştirmenize yardımcı olacak CRM çözümleri sunuyoruz.",
    icon: Database,
    subServices: [
      "CRM danışmanlığı",
      "Sistem kurulumu",
      "Entegrasyonlar",
      "Kullanıcı eğitimi"
    ]
  },
  {
    id: "analiz",
    title: "Veri Analizi ve Raporlama",
    description: "Web sitenizden ve dijital kanallardan elde edilen verileri analiz ederek anlamlı içgörüler sunuyoruz.",
    icon: BarChart,
    subServices: [
      "Web analizi",
      "Sosyal medya analizi",
      "Kampanya analizi",
      "Özel raporlama"
    ]
  }
]

export default function ServicesPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hizmetlerimiz</h1>
            <p className="text-xl text-muted-foreground">
              İşletmenizin dijital varlığını güçlendirmek için ihtiyacınız olan tüm hizmetleri sunuyoruz.
              Her ihtiyaca özel profesyonel çözümler.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className="group hover:shadow-md transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">{service.title}</h2>
                  </div>

                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  <div className="space-y-4">
                    <h3 className="font-medium">Hizmetler:</h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {service.subServices.map((subService, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="h-5 w-5 text-primary mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{subService}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <Button asChild className="group-hover:translate-x-1 transition-transform">
                      <Link href={`/hizmetler/${service.id}`}>
                        Detaylı Bilgi <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Özel Bir Projeniz mi Var?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              İhtiyaçlarınıza özel çözümler için bizimle iletişime geçin.
              Size en uygun hizmeti birlikte belirleyelim.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/iletisim">
                Bizimle İletişime Geçin <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}