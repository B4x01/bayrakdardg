"use client"

import { CheckCircle2, Users, Trophy, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakkımızda</h1>
            <p className="text-xl text-muted-foreground">
              2015'ten beri dijital dünyada işletmelere değer katıyor, 
              başarı hikayeleri yazıyoruz.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold mb-6">
                Dijital Dünyada Güvenilir Çözüm Ortağınız
              </h2>
              <p className="text-muted-foreground mb-6">
                Bayrakdar Dijital olarak, işletmelerin dijital dönüşüm süreçlerinde
                yanlarında oluyor, modern ve etkili çözümler sunuyoruz. Deneyimli
                ekibimiz ve yenilikçi yaklaşımımızla, müşterilerimizin online
                başarısı için çalışıyoruz.
              </p>
              <ul className="space-y-4">
                {[
                  "500+ Tamamlanan Proje",
                  "100+ Mutlu Müşteri",
                  "8+ Yıl Sektör Deneyimi",
                  "Uzman Ekip"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-6 fade-in-up animate-delay-200">
              {[
                {
                  icon: Users,
                  title: "Müşteri Odaklı",
                  description: "Her projeye özel yaklaşım ve çözümler"
                },
                {
                  icon: Trophy,
                  title: "Kaliteli Hizmet",
                  description: "Yüksek standartlarda iş teslimatı"
                },
                {
                  icon: Target,
                  title: "Sonuç Odaklı",
                  description: "Ölçülebilir başarı ve sürekli gelişim"
                },
                {
                  icon: CheckCircle2,
                  title: "Güvenilir",
                  description: "Şeffaf süreçler ve güvenilir iş ortaklığı"
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-muted/30 rounded-lg">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-medium text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Vizyonumuz & Misyonumuz</h2>
            <p className="text-muted-foreground mb-12">
              Dijital dünyada işletmelerin başarısı için çalışıyor, 
              yenilikçi çözümler üretiyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg shadow-sm fade-in-up animate-delay-100">
              <h3 className="text-xl font-semibold mb-4">Vizyonumuz</h3>
              <p className="text-muted-foreground">
                Dijital dönüşümde öncü, yenilikçi çözümleriyle tercih edilen ve
                güvenilen bir teknoloji partneri olmak. İşletmelerin dijital
                başarı hikayelerinde vazgeçilmez bir rol oynamak.
              </p>
            </div>

            <div className="bg-background p-8 rounded-lg shadow-sm fade-in-up animate-delay-200">
              <h3 className="text-xl font-semibold mb-4">Misyonumuz</h3>
              <p className="text-muted-foreground">
                İşletmelerin dijital varlıklarını güçlendirmek, modern teknolojiler
                ve yaratıcı çözümlerle müşterilerimizin online başarısına katkıda
                bulunmak. Kaliteli hizmet ve müşteri memnuniyetini her zaman ön
                planda tutmak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}