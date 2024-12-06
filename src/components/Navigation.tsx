import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Calculator, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Calculator className="w-6 h-6 text-indigo-600" />
            <span className="text-lg font-semibold text-gray-900">
              Hesapio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/kurumlar-vergisi-hesaplama"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/kurumlar-vergisi-hesaplama'
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Kurumlar Vergisi
            </Link>
            <Link
              to="/kira-geliri-vergisi-hesaplama"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/kira-geliri-vergisi-hesaplama'
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Kira Geliri Vergisi
            </Link>
            <Link
              to="/iki-tarih-arasi-gun-hesaplama"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/iki-tarih-arasi-gun-hesaplama'
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Gün Hesaplama
            </Link>
            <Link
              to="/iki-tarih-arasi-ay-hesaplama"
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === '/iki-tarih-arasi-ay-hesaplama'
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Ay Hesaplama
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-2">
            <div className="space-y-1">
              <Link
                to="/kurumlar-vergisi-hesaplama"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === '/kurumlar-vergisi-hesaplama'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Kurumlar Vergisi
              </Link>
              <Link
                to="/kira-geliri-vergisi-hesaplama"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === '/kira-geliri-vergisi-hesaplama'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Kira Geliri Vergisi
              </Link>
              <Link
                to="/iki-tarih-arasi-gun-hesaplama"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === '/iki-tarih-arasi-gun-hesaplama'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Gün Hesaplama
              </Link>
              <Link
                to="/iki-tarih-arasi-ay-hesaplama"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-sm font-medium ${
                  location.pathname === '/iki-tarih-arasi-ay-hesaplama'
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                Ay Hesaplama
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}