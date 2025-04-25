'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Menu, 
  X, 
  Home,
  LayoutGrid,
  FolderKanban,
  Users,
  PhoneCall,
  Globe,
  TrendingUp,
  Search,
  PenTool,
  MonitorSmartphone,
  Code,
  Database,
  BarChart2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Anasayfa', href: '/', icon: Home },
  { 
    name: 'Hizmetler', 
    href: '/hizmetler', 
    icon: LayoutGrid,
    subItems: [
      { name: 'Web Tasarım', href: '/hizmetler/web-tasarim', icon: Globe },
      { name: 'Dijital Pazarlama', href: '/hizmetler/dijital-pazarlama', icon: TrendingUp },
      { name: 'SEO', href: '/hizmetler/seo', icon: Search },
      { name: 'Grafik Tasarım', href: '/hizmetler/grafik-tasarim', icon: PenTool },
      { name: 'Sosyal Medya', href: '/hizmetler/sosyal-medya', icon: MonitorSmartphone },
      { name: 'Yazılım', href: '/hizmetler/yazilim', icon: Code },
      { name: 'CRM', href: '/hizmetler/crm', icon: Database },
      { name: 'Veri Analizi', href: '/hizmetler/analiz', icon: BarChart2 },
    ]
  },
  { name: 'Projeler', href: '/projeler', icon: FolderKanban },
  { name: 'Hakkımızda', href: '/hakkimizda', icon: Users },
  { name: 'İletişim', href: '/iletisim', icon: PhoneCall },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  const handleMenuItemClick = (item: any) => {
    if (item.subItems) {
      setActiveSubmenu(activeSubmenu === item.name ? null : item.name);
    } else {
      setIsOpen(false);
      setActiveSubmenu(null);
    }
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-3">
            {/* Logo - Light Mode */}
            <img
              src="/logo-light.png"
              alt="Bayrakdar Dijital"
              className="h-12 w-auto hidden dark:block"
            />
            {/* Logo - Dark Mode */}
            <img
              src="/logo-dark.png"
              alt="Bayrakdar Dijital"
              className="h-12 w-auto block dark:hidden"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl">Bayrakdar</span>
              <span className="text-primary font-medium -mt-1">Dijital</span>
            </div>
          </Link>
        </div>

        {/* Masaüstü Menü */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="rounded-full">
            <Link href="/demo-istegi">Demo İsteği</Link>
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobil Menü Butonu */}
        <div className="flex items-center md:hidden space-x-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobil Menü */}
      {isOpen && (
        <div className="fixed inset-0 top-16 z-[100] bg-background md:hidden">
          <div className="container py-6">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleMenuItemClick(item)}
                    className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="h-5 w-5 text-primary" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    {item.subItems && (
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          activeSubmenu === item.name ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    )}
                  </button>
                  {item.subItems && activeSubmenu === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <subItem.icon className="h-5 w-5 text-primary" />
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link
                href="/demo-istegi"
                className="block mt-4 bg-primary text-primary-foreground p-3 rounded-lg text-center font-medium hover:bg-primary/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Demo İsteği
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}