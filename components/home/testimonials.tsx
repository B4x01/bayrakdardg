import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    content: "Bayrakdar Dijital Ajans ile çalışmak harika bir deneyimdi. Web sitemizin tasarımı ve SEO çalışmalarıyla trafiğimiz %70 arttı. İşten sonra ödeme modelleri de büyük bir güven verdi.",
    author: "Ahmet Yılmaz",
    role: "Pazarlama Müdürü, TechCo",
    avatar: "AY"
  },
  {
    content: "Sosyal medya yönetimimiz için birçok ajansla görüştük, ancak Bayrakdar'ın profesyonel yaklaşımı ve sonuç odaklı stratejileri bizi etkiledi. İşimize değer kattılar.",
    author: "Zeynep Kaya",
    role: "CEO, Moda Markası",
    avatar: "ZK"
  },
  {
    content: "E-ticaret sitemizin dönüşüm oranlarını artırmak için Bayrakdar ile çalıştık. Veriye dayalı yaklaşımları ve uzman ekipleriyle satışlarımız 3 ayda 2 katına çıktı.",
    author: "Murat Öztürk",
    role: "E-ticaret Yöneticisi",
    avatar: "MO"
  },
  {
    content: "Projemiz karmaşıktı, ancak Bayrakdar ekibi her aşamada profesyonel ve çözüm odaklı davrandı. Şeffaf süreçleri ve işten sonra ödeme modeli büyük artı.",
    author: "Elif Demir",
    role: "Kurucu, StartupX",
    avatar: "ED"
  }
]

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Müşterilerimiz Ne Diyor?</h2>
          <p className="text-muted-foreground text-lg">
            Yüzlerce mutlu müşteriden bazılarının yorumları. İşimizi en iyi müşterilerimizin deneyimleri anlatır.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-muted/30 border-muted">
              <CardContent className="p-6">
                <div className="mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="inline-block h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-foreground mb-4">"{testimonial.content}"</p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}