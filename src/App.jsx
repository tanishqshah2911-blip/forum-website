import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout';

import Home from './pages/Home';
import Services from './pages/Services';
import Products from './pages/Products';

import ServiceWebsite from './pages/ServiceWebsite';
import ServiceConsole from './pages/ServiceConsole';
import ServiceCCTV from './pages/ServiceCCTV';
import ServiceERP from './pages/ServiceERP';
import ServiceMaintenance from './pages/ServiceMaintenance';
import ServiceConsultancy from './pages/ServiceConsultancy';

import ProductCanteen from './pages/ProductCanteen';
import ProductVayu from './pages/ProductVayu';
import ProductAttendance from './pages/ProductAttendance';
import ProductAssure from './pages/ProductAssure';
import ProductPhotoHub from './pages/ProductPhotoHub';

import About from './pages/About';
import HRMS from './pages/HRMS';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [pathname, hash]);
  return null;
}

/**
 * Page transition wrapper — keying on pathname forces a fresh
 * mount on every route change, which re-fires the page-enter
 * CSS animation. No Framer Motion dependency needed.
 */
function RoutedView() {
  const location = useLocation();
  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />

        <Route path="/services/website" element={<ServiceWebsite />} />
        <Route path="/services/device-console" element={<ServiceConsole />} />
        <Route path="/services/cctv" element={<ServiceCCTV />} />
        <Route path="/services/erp" element={<ServiceERP />} />
        <Route path="/services/maintenance" element={<ServiceMaintenance />} />
        <Route path="/services/consultancy" element={<ServiceConsultancy />} />

        <Route path="/products/canteen" element={<ProductCanteen />} />
        <Route path="/products/vayu" element={<ProductVayu />} />
        <Route path="/products/attendance" element={<ProductAttendance />} />
        <Route path="/products/assure" element={<ProductAssure />} />
        <Route path="/products/photohub" element={<ProductPhotoHub />} />

        <Route path="/about" element={<About />} />
        <Route path="/hrms" element={<HRMS />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Layout>
        <RoutedView />
      </Layout>
    </ThemeProvider>
  );
}
