import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Bayrakdar</span>
              <span className="text-primary font-medium">Dijital</span>
            </Link>
            <p className="text-muted-foreground">
              Dijital Pazarlama ve Web Hizmetleri ile işinizi büyütün.
              Profesyonel çözümler için yanınızdayız.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/bayrakdardijital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Button>
              </a>

              <a
                href="https://instagram.com/bayrakdardijital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </a>

              <a
                href="https://linkedin.com/company/bayrakdardijital"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hizmetler/web-tasarim"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Web Tasarım & Geliştirme
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/dijital-pazarlama"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dijital Pazarlama
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/sosyal-medya"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Sosyal Medya Yönetimi
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/yazilim"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Özel Yazılım Çözümleri
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler/grafik-tasarim"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Grafik Tasarım
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetler"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link
                  href="/projeler"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">İletişim</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p>Hatay, Türkiye</p>
              <p>
                <a
                  href="mailto:info@bayrakdardijital.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@bayrakdardijital.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+905366065217"
                  className="hover:text-foreground transition-colors"
                >
                  +90 536 606 52 17
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Bayrakdar Dijital Ajans. Tüm
            hakları saklıdır.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              href="/gizlilik-politikasi"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              href="/kullanim-sartlari"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kullanım Şartları
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
