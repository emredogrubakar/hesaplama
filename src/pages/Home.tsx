import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, CalendarDays, CalendarRange, Percent, Home as HomeIcon } from 'lucide-react';
import { SEO } from '../components/SEO';

export function Home() {
  const tools = [
    {
      icon: Calculator,
      title: 'Kurumlar Vergisi',
      description: '2024 yılı güncel oranlarıyla kurumlar vergisi hesaplama',
      path: '/kurumlar-vergisi-hesaplama'
    },
    {
      icon: HomeIcon,
      title: 'Kira Gelir Vergisi',
      description: '2024 yılı kira geliri vergisi hesaplama',
      path: '/kira-geliri-vergisi-hesaplama'
    },
    {
      icon: CalendarDays,
      title: 'Gün Hesaplama',
      description: 'İki tarih arası gün sayısı hesaplama',
      path: '/iki-tarih-arasi-gun-hesaplama'
    },
    {
      icon: CalendarRange,
      title: 'Ay Hesaplama',
      description: 'İki tarih arası ay sayısı hesaplama',
      path: '/iki-tarih-arasi-ay-hesaplama'
    }
  ];

  return (
    <>
      <SEO 
        title="Hesapio - Online Hesaplama Araçları"
        description="Vergi, tarih, finans ve daha fazlası için ücretsiz online hesaplama araçları. Kolay kullanım ve anlık sonuçlar."
        keywords={['hesaplama', 'hesaplama araçları', 'online hesaplama', 'ücretsiz hesaplama']}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-50 rounded-2xl mb-6">
            <Calculator className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hesapio
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Güncel ve kullanımı kolay hesaplama araçları
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {tools.map((tool, index) => (
            <Link
              key={index}
              to={tool.path}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-indigo-50 mb-4 group-hover:scale-110 transition-transform">
                  <tool.icon className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {tool.title}
                </h2>
                <p className="text-gray-600">
                  {tool.description}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}