import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BusinessModel() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-primary">Ödemeyi İş Bittikten Sonra</span> Yapın
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Bayrakdar Dijital Ajans olarak, size önce işinizi teslim ediyor, 
              sonra ödeme alıyoruz. Bu, kalitemize ve müşteri memnuniyetine olan 
              güvenimizin bir göstergesidir.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Önce projenizi tamamlarız, siz memnun kaldıktan sonra ödeme yaparsınız",
                "Değişiklik isteklerinizi ekstra ücret almadan karşılarız",
                "Proje sürecinde tam şeffaflık sağlarız",
                "İşinizden %100 memnun kalmanızı sağlarız"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <Button asChild size="lg" className="rounded-full">
              <Link href="/iletisim">
                Bizimle İletişime Geçin <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="absolute -z-10 inset-0 bg-gradient-radial from-primary/20 to-transparent rounded-full blur-2xl" />
            <div className="bg-card border rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Nasıl Çalışır?</h3>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">1</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Görüşme & Planlama</h4>
                    <p className="text-muted-foreground">İhtiyaçlarınızı anlamak için sizinle görüşür ve detaylı bir proje planı oluştururuz.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">2</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Tasarım & Geliştirme</h4>
                    <p className="text-muted-foreground">Projeniz için tasarım ve geliştirme sürecini başlatır, düzenli geri bildirim alırız.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">3</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Teslim & Onay</h4>
                    <p className="text-muted-foreground">Projenizi tamamlar ve onayınız için size sunarız. İstediğiniz revizyonları yaparız.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">4</div>
                  </div>
                  <div>
                    <h4 className="font-medium text-lg mb-2">Ödeme & Destek</h4>
                    <p className="text-muted-foreground">Projeyi onayladıktan sonra ödeme yaparsınız. Sürekli teknik destek sağlarız.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}