'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  UserCog,
  ServerCog,
  PlugZap,
  GraduationCap,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const subServices = [
  {
    title: 'CRM Danışmanlığı',
    icon: UserCog,
    description: 'İhtiyaçlarınıza en uygun CRM stratejileri geliştiriyoruz.',
    features: [
      'İş süreci analizi',
      'Müşteri yolculuğu haritası',
      'Hedefe yönelik çözüm önerileri',
      'Platform seçimi desteği',
    ],
  },
  {
    title: 'Sistem Kurulumu',
    icon: ServerCog,
    description:
      'Seçilen CRM sisteminin kurulumunu baştan sona gerçekleştiriyoruz.',
    features: [
      'Kurulum ve yapılandırma',
      'Modül & rol tanımları',
      'Veri aktarımı',
      'Sistem testleri',
    ],
  },
  {
    title: 'Entegrasyonlar',
    icon: PlugZap,
    description:
      'CRM sisteminizi diğer uygulamalarınızla entegre hale getiriyoruz.',
    features: [
      'ERP & e-posta entegrasyonu',
      'Üçüncü parti araçlar ile bağlantı',
      'Veri senkronizasyonu',
      'API bağlantıları',
    ],
  },
  {
    title: 'Kullanıcı Eğitimi',
    icon: GraduationCap,
    description:
      'Ekiplerinizin sistemi verimli kullanabilmesi için eğitimler sağlıyoruz.',
    features: [
      'Kullanıcı rolleri özel eğitim',
      'Online & yüz yüze oturumlar',
      'Eğitim materyalleri',
      'Destek dokümantasyonu',
    ],
  },
];

export default function CrmSolutionsPage() {
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

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: 'Form başarıyla gönderildi',
        description: 'En kısa sürede sizinle iletişime geçeceğiz.',
      });
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
              CRM Yönetim Sistemleri
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Müşteri ilişkilerinizi geliştirmenize yardımcı olacak CRM
              çözümleri sunuyoruz.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Profesyonel Danışmanlık',
                'Kolay Kurulum & Entegrasyon',
                'Kullanıcı Eğitimleri',
                'Verimli Müşteri Yönetimi',
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
            <h2 className="text-3xl font-bold mb-4">Hizmetlerimiz</h2>
            <p className="text-lg text-muted-foreground">
              CRM süreçlerinde sunduğumuz kapsamlı hizmetler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((service, index) => (
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
                CRM çözümlerimiz hakkında teklif almak için formu doldurun.
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
                <Label htmlFor="website">Mevcut CRM Sistemi (varsa)</Label>
                <Input
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-2">
                <Label>Hizmet Türü *</Label>
                <RadioGroup
                  value={formData.projectType}
                  onValueChange={(value) =>
                    handleRadioChange(value, 'projectType')
                  }
                  required
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {subServices.map((service, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <RadioGroupItem
                          value={service.title
                            .toLowerCase()
                            .replace(/\s+/g, '-')}
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
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Tahmini Bütçe</Label>
                <RadioGroup
                  value={formData.budget}
                  onValueChange={(value) => handleRadioChange(value, 'budget')}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      '5000-altı',
                      '5000-15000',
                      '15000-30000',
                      '30000-50000',
                      '50000-ustu',
                      'belirsiz',
                    ].map((val) => (
                      <div key={val} className="flex items-center space-x-2">
                        <RadioGroupItem value={val} id={val} />
                        <Label htmlFor={val} className="cursor-pointer">
                          {
                            {
                              '5000-altı': '5.000 TL altı',
                              '5000-15000': '5.000 - 15.000 TL',
                              '15000-30000': '15.000 - 30.000 TL',
                              '30000-50000': '30.000 - 50.000 TL',
                              '50000-ustu': '50.000 TL üstü',
                              belirsiz: 'Henüz belirlemedim',
                            }[val]
                          }
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Başlama Zamanı</Label>
                <RadioGroup
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleRadioChange(value, 'timeline')
                  }
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      ['hemen', 'Hemen başlamalıyız'],
                      ['1-ay', '1 ay içinde'],
                      ['1-3-ay', '1-3 ay içinde'],
                      ['3-ay-sonra', '3 ay sonra'],
                    ].map(([val, label]) => (
                      <div key={val} className="flex items-center space-x-2">
                        <RadioGroupItem value={val} id={val} />
                        <Label htmlFor={val} className="cursor-pointer">
                          {label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Proje Detayları *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="CRM sisteminizle ilgili ihtiyaç ve beklentilerinizi paylaşın"
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
                      href="/gizlilik-politikasi"
                      className="text-primary hover:underline"
                    >
                      Gizlilik Politikası
                    </Link>{' '}
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
