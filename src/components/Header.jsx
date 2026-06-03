import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Logo from './Logo';

/* Navbar — Home, Services, Products, Contact. Services and
   Products are in-page hash links that scroll to subsections
   inside the homepage "What we do" block; they no longer open
   standalone sections. The Services/Products PAGES at /services
   and /products still exist (reachable from the "Explore all"
   buttons inside each subsection) but are not navbar tabs.
   Active state on the homepage comes from the scroll-spy
   observer below; on non-home routes hash links never light up. */
const NAV = [
  { to: '/',          label: 'Home',     section: 'home',     match: (p) => p === '/' },
  { to: '/#services', label: 'Services', section: 'services', match: () => false },
  { to: '/#products', label: 'Products', section: 'products', match: () => false },
  { to: '/#contact',  label: 'Contact',  section: 'contact',  match: () => false }
];

export default function Header() {
  const { pathname } = useLocation();
  const { theme, toggle } = useTheme();
  const [scrollSection, setScrollSection] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Magnetic nav links — pull slightly toward cursor on hover
  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const links = document.querySelectorAll('.nav-links a');
    const handlers = [];

    links.forEach(link => {
      const onMove = (e) => {
        const rect = link.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.25;
        const dy = (e.clientY - cy) * 0.25;
        link.style.setProperty('--mag-x', dx.toFixed(2) + 'px');
        link.style.setProperty('--mag-y', dy.toFixed(2) + 'px');
      };
      const onLeave = () => {
        link.style.setProperty('--mag-x', '0px');
        link.style.setProperty('--mag-y', '0px');
      };
      link.addEventListener('mousemove', onMove);
      link.addEventListener('mouseleave', onLeave);
      handlers.push({ link, onMove, onLeave });
    });

    return () => {
      handlers.forEach(({ link, onMove, onLeave }) => {
        link.removeEventListener('mousemove', onMove);
        link.removeEventListener('mouseleave', onLeave);
      });
    };
  }, [pathname]);

  // Scroll-spy for the homepage only
  useEffect(() => {
    if (pathname !== '/') {
      setScrollSection(null);
      return;
    }
    if (!('IntersectionObserver' in window)) return;

    /* Scroll-spy ids — #services and #products are now the
       Services / Products subsections nested inside the
       What We Do block, not standalone sections. The observer
       resolves whichever id is most centered in view. */
    const ids = ['home', 'services', 'products', 'contact'];
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const ratios = {};
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        ratios[entry.target.id] = entry.intersectionRatio;
      });
      let topId = null;
      let topRatio = 0;
      Object.keys(ratios).forEach(id => {
        if (ratios[id] > topRatio) { topRatio = ratios[id]; topId = id; }
      });
      if (topId) setScrollSection(topId);
    }, { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1], rootMargin: '-25% 0px -55% 0px' });

    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Renders one nav link (Link or hash <a>) with active-class logic
  const renderLink = (item, onClick) => {
    const isHashLink = item.to.includes('#');
    const isActive = pathname === '/'
      ? scrollSection === item.section
      : item.match(pathname);
    const className = isActive ? 'active' : undefined;
    if (isHashLink) {
      return (
        <a key={item.to} href={item.to} className={className} data-section={item.section} onClick={onClick}>
          {item.label}
        </a>
      );
    }
    return (
      <Link key={item.to} to={item.to} className={className} data-section={item.section} onClick={onClick}>
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav">
          <Link to="/" className="brand" aria-label="The Forum — home">
            {/* The Logo image is a full lockup (TF monogram + "The
                Forum" wordmark + tagline), so we no longer render a
                separate text label next to it — that would duplicate
                the wordmark. */}
            <Logo className="brand-mark" />
          </Link>
          <nav className="nav-links" aria-label="Primary">
            {NAV.map(item => renderLink(item))}
          </nav>
          <div className="nav-right">
            <button className="theme-toggle" aria-label="Toggle theme" onClick={toggle}>
              {theme === 'dark' ? <span>☾</span> : <span>☀</span>}
            </button>
            <button
              className="menu-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
            >
              <span className="bar" />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile">
          {NAV.map(item => renderLink(item, () => setMenuOpen(false)))}
        </nav>
      </div>
    </>
  );
}
