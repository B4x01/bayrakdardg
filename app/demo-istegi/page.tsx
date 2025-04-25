'use client';

import { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

export default function DemoRequestPage() {
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
        title: 'Demo isteğiniz alındı',
        description:
          'Size özel demo hazırlamak için en kısa sürede iletişime geçeceğiz.',
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
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Demo İsteği</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Size özel hazırlayacağımız demo için aşağıdaki formu doldurun.
              İhtiyaçlarınızı anlamak için kısa bir görüşme yapacağız.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Web Tasarım & Geliştirme',
                'Dijital Pazarlama',
                'SEO Optimizasyonu',
                'E-ticaret',
                'Grafik Tasarım',
                'Sosyal Medya Yönetimi',
                'Özel Yazılım Çözümleri',
                'CRM Yönetim Sistemleri',
                'Veri Analizi ve Raporlama',
              ].map((service, index) => (
                <div
                  key={index}
                  className="flex items-center bg-background rounded-full px-4 py-2 border"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="bg-muted/30 p-6 rounded-lg space-y-6">
                <h2 className="text-xl font-semibold">Kişisel Bilgiler</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Adınız Soyadınız *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Adınız Soyadınız"
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
                      placeholder="ornek@email.com"
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
                      placeholder="0 (___) ___ __ __"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Şirket Adı</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Şirketinizin adı"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Mevcut Web Siteniz (varsa)</Label>
                  <Input
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg space-y-6">
                <h2 className="text-xl font-semibold">Proje Detayları</h2>

                <div className="space-y-2">
                  <Label>İlgilendiğiniz Hizmet Türü *</Label>
                  <RadioGroup
                    value={formData.projectType}
                    onValueChange={(value) =>
                      handleRadioChange(value, 'projectType')
                    }
                    required
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="web-tasarim" id="web-tasarim" />
                        <Label htmlFor="web-tasarim" className="cursor-pointer">
                          Web Tasarım & Geliştirme
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="dijital-pazarlama"
                          id="dijital-pazarlama"
                        />
                        <Label
                          htmlFor="dijital-pazarlama"
                          className="cursor-pointer"
                        >
                          Dijital Pazarlama
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="sosyal-medya"
                          id="sosyal-medya"
                        />
                        <Label
                          htmlFor="sosyal-medya"
                          className="cursor-pointer"
                        >
                          Sosyal Medya Yönetimi
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="grafik-tasarim"
                          id="grafik-tasarim"
                        />
                        <Label
                          htmlFor="grafik-tasarim"
                          className="cursor-pointer"
                        >
                          Grafik & Marka Tasarımı
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="reklamcilik" id="reklamcilik" />
                        <Label htmlFor="reklamcilik" className="cursor-pointer">
                          Reklamcılık Hizmetleri
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="e-ticaret" id="e-ticaret" />
                        <Label htmlFor="e-ticaret" className="cursor-pointer">
                          E-ticaret Çözümleri
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label>Tahmini Bütçe</Label>
                  <RadioGroup
                    value={formData.budget}
                    onValueChange={(value) =>
                      handleRadioChange(value, 'budget')
                    }
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5000-altı" id="5000-altı" />
                        <Label htmlFor="5000-altı" className="cursor-pointer">
                          5.000 TL altı
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5000-15000" id="5000-15000" />
                        <Label htmlFor="5000-15000" className="cursor-pointer">
                          5.000 - 15.000 TL
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="15000-30000" id="15000-30000" />
                        <Label htmlFor="15000-30000" className="cursor-pointer">
                          15.000 - 30.000 TL
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="30000-50000" id="30000-50000" />
                        <Label htmlFor="30000-50000" className="cursor-pointer">
                          30.000 - 50.000 TL
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="50000-ustu" id="50000-ustu" />
                        <Label htmlFor="50000-ustu" className="cursor-pointer">
                          50.000 TL üstü
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

                <div className="space-y-2">
                  <Label>Proje Zaman Çizelgesi</Label>
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
                          Hemen başlamalıyız
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
                        <RadioGroupItem value="3-ay-sonra" id="3-ay-sonra" />
                        <Label htmlFor="3-ay-sonra" className="cursor-pointer">
                          3 ay sonra
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Proje Açıklaması *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    placeholder="Projeniz hakkında kısa bir açıklama yazın. Hedefleriniz, beklentileriniz ve projenizin kapsamını belirtirseniz, sizin için en uygun çözümü sunabiliriz."
                    rows={6}
                  />
                </div>
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
                    <a
                      href="/gizlilik-politikasi"
                      className="text-primary hover:underline"
                    >
                      Gizlilik Politikası
                    </a>
                    'nı okudum, kabul ediyorum.
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="rounded-full"
                disabled={isSubmitting}
                size="lg"
              >
                {isSubmitting ? (
                  <>Gönderiliyor...</>
                ) : (
                  <>
                    Demo İsteği Gönder <Send className="ml-2 h-4 w-4" />
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
