'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  CheckCircle2,
  Wrench, // Teknik SEO için ikon
  FileText, // İçerik Optimizasyonu için ikon
  KeyRound, // Anahtar Kelime Analizi için ikon
  MapPin, // Yerel SEO için ikon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const seoServices = [
  {
    title: 'Teknik SEO Optimizasyonu',
    icon: Wrench,
    description:
      'Web sitenizin teknik altyapısını arama motorları için optimize ediyoruz.',
    features: [
      'Site hızı optimizasyonu',
      'Mobil uyumluluk denetimi',
      'URL yapısı düzenlemesi',
      'Site haritası oluşturma ve gönderme',
    ],
  },
  {
    title: 'İçerik Optimizasyonu',
    icon: FileText,
    description:
      'Mevcut içeriklerinizi SEO uyumlu hale getiriyor, yeni içerikler üretiyoruz.',
    features: [
      'Başlık ve meta açıklamaları optimizasyonu',
      'İçerik kalitesi ve okunabilirlik artırma',
      'Görsel optimizasyonu',
      'İç linkleme stratejisi',
    ],
  },
  {
    title: 'Anahtar Kelime Analizi',
    icon: KeyRound,
    description:
      'Hedef kitlenizin aradığı doğru anahtar kelimeleri belirliyoruz.',
    features: [
      'Rakip analizi',
      'Arama hacmi ve zorluk derecesi belirleme',
      'Uzun kuyruklu anahtar kelime tespiti',
      'Stratejik anahtar kelime planlaması',
    ],
  },
  {
    title: 'Yerel SEO',
    icon: MapPin,
    description: 'İşletmenizin yerel aramalarda görünürlüğünü artırıyoruz.',
    features: [
      'Google My Business optimizasyonu',
      'Yerel anahtar kelime hedefleme',
      'Yerel backlink oluşturma',
      'Müşteri yorumları yönetimi',
    ],
  },
];

export default function SeoOptimizationPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: '',
    agreement: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string, name: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, agreement: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Form başarıyla gönderildi',
        description: 'En kısa sürede sizinle iletişime geçeceğiz.',
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: '',
        agreement: false,
      });
    }, 1500);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              SEO Optimizasyonu
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Arama motorlarında üst sıralarda yer almanızı sağlayacak
              profesyonel SEO çalışmaları yapıyoruz. Organik trafiğinizi artırın
              ve hedef kitlenize ulaşın.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Organik Trafik Artışı',
                'Yüksek Sıralamalar',
                'Detaylı Raporlama',
                'Sürekli Optimizasyon',
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center bg-background rounded-full px-4 py-2 border"
                >
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
            <h2 className="text-3xl font-bold mb-4">SEO Hizmetlerimiz</h2>
            <p className="text-lg text-muted-foreground">
              Web sitenizin arama motoru performansını iyileştirmek için
              sunduğumuz kapsamlı SEO hizmetleri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
              <Card
                key={index}
                className="fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mr-4">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
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
                SEO hizmetlerimiz hakkında detaylı bilgi ve projenize özel fiyat
                teklifi almak için formu doldurun.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-8 bg-background p-8 rounded-xl"
            >
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
                  required // SEO için web sitesi genellikle gereklidir
                />
              </div>

              <div className="space-y-2">
                <Label>İlgilendiğiniz Hizmet *</Label>
                <RadioGroup
                  value={formData.projectType}
                  onValueChange={(value) =>
                    handleRadioChange(value, 'projectType')
                  }
                  required
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {seoServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={service.title
                            .toLowerCase()
                            .replace(/ /g, '-')
                            .replace(/ı/g, 'i')
                            .replace(/ö/g, 'o')
                            .replace(/ü/g, 'u')
                            .replace(/ş/g, 's')
                            .replace(/ç/g, 'c')
                            .replace(/ğ/g, 'g')}
                          id={`project-type-${index}`}
                        />
                        <Label
                          htmlFor={`project-type-${index}`}
                          className="cursor-pointer"
                        >
                          {service.title}
                        </Label>
                      </div>
                    ))}
                    <div key="hepsi" className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="tum-hizmetler"
                        id="project-type-all"
                      />
                      <Label
                        htmlFor="project-type-all"
                        className="cursor-pointer"
                      >
                        Tüm Hizmetler / Danışmanlık
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Aylık Tahmini Bütçe</Label>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => handleRadioChange(value, 'budget')}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3000-alti" id="3000-alti" />
                      <Label htmlFor="3000-alti" className="cursor-pointer">
                        3.000 TL altı
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="3000-7000" id="3000-7000" />
                      <Label htmlFor="3000-7000" className="cursor-pointer">
                        3.000 - 7.000 TL
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="7000-15000" id="7000-15000" />
                      <Label htmlFor="7000-15000" className="cursor-pointer">
                        7.000 - 15.000 TL
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="15000-30000" id="15000-30000" />
                      <Label htmlFor="15000-30000" className="cursor-pointer">
                        15.000 - 30.000 TL
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30000-ustu" id="30000-ustu" />
                      <Label htmlFor="30000-ustu" className="cursor-pointer">
                        30.000 TL üstü
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="belirsiz" id="belirsiz" />
                      <Label htmlFor="belirsiz" className="cursor-pointer">
                        Henüz belirlemedim
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Zaman çizelgesi SEO için genellikle sürekli olduğundan kaldırılabilir veya farklı seçenekler sunulabilir. Şimdilik aynı bırakıyorum. */}
              <div className="space-y-2">
                <Label>Başlangıç Zamanı</Label>
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleRadioChange(value, 'timeline')
                  }
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="hemen" id="hemen" />
                      <Label htmlFor="hemen" className="cursor-pointer">
                        Mümkün olan en kısa sürede
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-ay" id="1-ay" />
                      <Label htmlFor="1-ay" className="cursor-pointer">
                        1 ay içinde
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="1-3-ay" id="1-3-ay" />
                      <Label htmlFor="1-3-ay" className="cursor-pointer">
                        1-3 ay içinde
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        value="belirsiz-zaman"
                        id="belirsiz-zaman"
                      />
                      <Label
                        htmlFor="belirsiz-zaman"
                        className="cursor-pointer"
                      >
                        Zamanlama esnek
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Ek Bilgiler / Hedefler *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="SEO hedeflerinizi, önceliklerinizi veya sormak istediklerinizi buraya yazabilirsiniz."
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
                    Kişisel verilerimin işlenmesine izin veriyorum ve{' '}
                    <Link
                      href="/gizlilik-politikasi" // Bu linki kendi gizlilik politikası sayfanızla güncelleyin
                      className="text-primary hover:underline"
                      target="_blank" // Yeni sekmede açmak iyi olabilir
                    >
                      Gizlilik Politikası
                    </Link>
                    'nı okudum, kabul ediyorum.
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  'Gönderiliyor...'
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
  );
}
