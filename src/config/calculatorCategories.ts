import { Calculator, Calendar, Briefcase, Coins, Percent, Scale, Clock, CalendarRange, Home } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface CalculatorConfig {
  id: string;
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
  category: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export interface CategoryConfig {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

export const categories: CategoryConfig[] = [
  {
    id: 'finance',
    title: 'Finans',
    icon: Coins,
    description: 'Vergi, kredi ve yatırım hesaplamaları'
  },
  {
    id: 'date',
    title: 'Tarih & Zaman',
    icon: Calendar,
    description: 'Tarih ve zaman hesaplamaları'
  },
  {
    id: 'business',
    title: 'İş & Ticaret',
    icon: Briefcase,
    description: 'Ticari hesaplamalar'
  }
];

export const calculators: CalculatorConfig[] = [
  {
    id: 'corporate-tax',
    title: 'Kurumlar Vergisi',
    description: '2024 yılı güncel oranlarıyla kurumlar vergisi hesaplayın',
    path: '/kurumlar-vergisi-hesaplama',
    icon: Percent,
    category: 'finance',
    priority: 1.0,
    changefreq: 'monthly'
  },
  {
    id: 'rent-tax',
    title: 'Kira Geliri Vergisi',
    description: '2024 yılı güncel oranlarıyla kira geliri vergisi hesaplayın',
    path: '/kira-geliri-vergisi-hesaplama',
    icon: Home,
    category: 'finance',
    priority: 0.9,
    changefreq: 'monthly'
  },
  {
    id: 'date-calculator',
    title: 'Gün Hesaplama',
    description: 'İki tarih arasındaki gün sayısını hesaplayın',
    path: '/iki-tarih-arasi-gun-hesaplama',
    icon: Clock,
    category: 'date',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    id: 'month-calculator',
    title: 'Ay Hesaplama',
    description: 'İki tarih arasındaki ay sayısını hesaplayın',
    path: '/iki-tarih-arasi-ay-hesaplama',
    icon: CalendarRange,
    category: 'date',
    priority: 0.8,
    changefreq: 'monthly'
  }
];