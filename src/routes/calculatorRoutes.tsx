import { RouteObject } from 'react-router-dom';
import { CorporateTax } from '../pages/calculators/corporate-tax';
import { RentTax } from '../pages/calculators/rent-tax';
import { DateCalculator } from '../pages/calculators/date';
import { MonthCalculator } from '../pages/calculators/month';

export const calculatorRoutes: RouteObject[] = [
  {
    path: '/kurumlar-vergisi-hesaplama',
    element: <CorporateTax />
  },
  {
    path: '/kira-geliri-vergisi-hesaplama',
    element: <RentTax />
  },
  {
    path: '/iki-tarih-arasi-gun-hesaplama',
    element: <DateCalculator />
  },
  {
    path: '/iki-tarih-arasi-ay-hesaplama',
    element: <MonthCalculator />
  }
];