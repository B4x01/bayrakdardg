"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Target, BarChart, Mail, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Card, CardContent } from "@/components/ui/card"

const subServices = [
  {
    title: "Google Ads Yönetimi",
    icon: Target,
    description: "Hedefli reklam kampanyaları ile potansiyel müşterilerinize ulaşın.",
    features: [
      "Anahtar kelime analizi",
      "Reklam metni optimizasyonu",
      "Bütçe yönetimi",
      "Performans takibi"
    ]
  },
  {
    title: "Sosyal Medya Reklamları",
    icon: Users,
    description: "Facebook, Instagram ve LinkedIn reklamları ile hedef kitlenize ulaşın.",
    features: [
      "Hedef kitle analizi",
      "Görsel içerik tasarımı",
      "A/B testleri",
      "Dönüşüm optimizasyonu"
    ]
  },
  {
    title: "İçerik Pazarlaması",
    icon: BarChart,
    description: "Etkileyici içeriklerle markanızın değerini artırın.",
    features: [
      "İçerik stratejisi",
      "Blog yazıları",
      "İnfografikler",
      "Video içerikler"
    ]
  },
  {
    title: "E-posta Pazarlaması",
    icon: Mail,
    description: "Etkili e-posta kampanyaları ile müşterilerinizle iletişimde kalın.",
    features: [
      "Newsletter tasarımı",
      "Otomatik e-postalar",
      "Segment analizi",
      "A/B testleri"
    ]
  }
]

export default function DigitalMarketingPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    serviceType: "",
    budget: "",
    timeline: "",
    description: "",
    agreement: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string, name: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, agreement: checked }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Form başarıyla gönderildi",
        description: "En kısa sürede sizinle iletişime geçeceğiz.",
      })
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        serviceType: "",
        budget: "",
        timeline: "",
        description: "",
        agreement: false
      })
    }, 1500)
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dijital Pazarlama</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Markanızı doğru hedef kitleye ulaştıracak dijital pazarlama stratejileri oluşturuyoruz.
              Veriye dayalı yaklaşımımızla online başarınızı artırın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Hedefli Reklamlar", "İçerik Stratejisi", "Performans Analizi", "ROI Odaklı"].map((feature, index) => (
                <div key={index} className="flex items-center bg-background rounded-full px-4 py-2 border">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-muted-foreground">
              Dijital pazarlama alanında sunduğumuz kapsamlı çözümler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((service, index) => (
              <Card key={index} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Teklif Alın</h2>
              <p className="text-lg text-muted-foreground">
                Dijital pazarlama hizmetlerimiz hakkında detaylı bilgi ve fiyat teklifi almak için formu doldurun.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-background p-8 rounded-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Adınız Soyadınız *</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta Adresiniz *</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Telefon Numaranız *</Label>
                  <Input 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Şirket Adı</Label>
                  <Input 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Web Siteniz *</Label>
                <Input 
                  id="website" 
                  name="website" 
                  value={formData.website}
                  onChange={handleChange}
                  required
                  placeholder="https://"
                />
              </div>

              <div className="space-y-2">
                <Label>İlgilendiğiniz Hizmet *</Label>
                <RadioGroup 
                  value={formData.serviceType} 
                  onValueChange={(value) => handleRadioChange(value, "serviceType")}
                  required
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem value={service.title.toLowerCase().replace(/\s+/g, '-')} id={`service-type-${index}`} />
                        <Label htmlFor={`service-type-${index}`} className="cursor-pointer">{service.title}</Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Aylık Reklam Bütçesi</Label>
                <RadioGroup 
                  value={formData.budget} 
                  onValueChange={(value) => handleRadioChange(value, "budget")}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1000-altı" id="1000-altı" />
                      <Label htmlFor="1000-altı" className="cursor-pointer">1.000 TL altı</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1000-5000" id="1000-5000" />
                      <Label htmlFor="1000-5000" className="cursor-pointer">1.000 - 5.000 TL</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="5000-10000" id="5000-10000" />
                      <Label htmlFor="5000-10000" className="cursor-pointer">5.000 - 10.000 TL</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="10000-25000" id="10000-25000" />
                      <Label htmlFor="10000-25000" className="cursor-pointer">10.000 - 25.000 TL</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="25000-ustu" id="25000-ustu" />
                      <Label htmlFor="25000-ustu" className="cursor-pointer">25.000 TL üstü</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="belirsiz" id="belirsiz" />
                      <Label htmlFor="belirsiz" className="cursor-pointer">Henüz belirlemedim</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Başlangıç Zamanı</Label>
                <RadioGroup 
                  value={formData.timeline} 
                  onValueChange={(value) => handleRadioChange(value, "timeline")}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hemen" id="hemen" />
                      <Label htmlFor="hemen" className="cursor-pointer">Hemen başlamalıyız</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-hafta" id="1-hafta" />
                      <Label htmlFor="1-hafta" className="cursor-pointer">1 hafta içinde</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="2-hafta" id="2-hafta" />
                      <Label htmlFor="2-hafta" className="cursor-pointer">2 hafta içinde</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-ay" id="1-ay" />
                      <Label htmlFor="1-ay" className="cursor-pointer">1 ay sonra</Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Hedefleriniz ve Beklentileriniz *</Label>
                <Textarea 
                  id="description" 
                  name="description" 
                  value={formData.description}
                  onChange={handleChange}
                  required 
                  placeholder="Pazarlama hedefleriniz, hedef kitleniz ve beklentileriniz hakkında bilgi verin" 
                  rows={6} 
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="agreement" 
                  checked={formData.agreement}
                  onCheckedChange={handleCheckboxChange}
                  required
                />
                <div className="grid gap-1.5 leading-none">
                  <Label
                    htmlFor="agreement"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Kişisel verilerimin işlenmesine izin veriyorum ve <Link href="/gizlilik-politikasi" className="text-primary hover:underline">Gizlilik Politikası</Link>'nı okudum, kabul ediyorum.
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Gönderiliyor..."
                ) : (
                  <>
                    Teklif İsteyin <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}