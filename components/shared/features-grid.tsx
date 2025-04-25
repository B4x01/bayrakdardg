import { Monitor, Smartphone, Globe, TrendingUp, Target, Users, Clock, Shield } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "Modern Web Tasarımı",
    description: "Responsive ve kullanıcı dostu web siteleri tasarlıyoruz."
  },
  {
    icon: TrendingUp,
    title: "SEO Optimizasyonu",
    description: "Arama motorlarında üst sıralarda yer almanızı sağlıyoruz."
  },
  {
    icon: Target,
    title: "Google & Sosyal Medya Reklamları",
    description: "Hedefli reklam kampanyaları ile dönüşümlerinizi artırıyoruz."
  },
  {
    icon: Smartphone,
    title: "Mobil Uyumluluk",
    description: "Tüm cihazlarda mükemmel görünen siteler geliştiriyoruz."
  },
  {
    icon: Globe,
    title: "E-ticaret Çözümleri",
    description: "Online satışları artıracak e-ticaret siteleri kuruyoruz."
  },
  {
    icon: Users,
    title: "Sosyal Medya Yönetimi",
    description: "Markanızın sosyal medyada etkin bir varlık oluşturmasını sağlıyoruz."
  },
  {
    icon: Clock,
    title: "Hızlı Teslimat",
    description: "Projelerinizi hızlı ve zamanında teslim ediyoruz."
  },
  {
    icon: Shield,
    title: "Teknik Destek",
    description: "Proje sonrası teknik destek ve bakım hizmetleri sunuyoruz."
  }
]

export default function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, index) => (
        <div key={index} className="border rounded-lg p-6 bg-card/50 hover:bg-card/80 transition-colors">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <feature.icon className="h-6 w-6 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}