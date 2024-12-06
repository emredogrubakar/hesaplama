import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pb-12">
        <Outlet />
      </main>

      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Hesaplama Araçları</p>
            <p className="mt-1">Bu hesaplama araçları bilgilendirme amaçlıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}