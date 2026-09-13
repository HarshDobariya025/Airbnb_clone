import { useState, useEffect, useRef } from 'react';
import './StickyNav.css';
import { StarIcon } from '../Icons.jsx';

const SECTIONS = ['photos', 'amenities', 'reviews', 'location'];

export default function StickyNav({ rating, reviewCount, price, pricePeriod, onReserve }) {
  const [activeSection, setActiveSection] = useState('photos');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroEl = document.getElementById('heroGrid');
      if (heroEl) {
        const rect = heroEl.getBoundingClientRect();
        setVisible(rect.bottom < 80);
      }
      // Track active section
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) { setActiveSection(id); break; }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className={`sticky-nav ${visible ? 'sticky-nav--visible' : ''}`} aria-hidden={!visible}>
      <div className="sticky-nav__inner">
        <nav className="sticky-nav__links" aria-label="Listing sections">
          {SECTIONS.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={`sticky-nav__link ${activeSection === id ? 'sticky-nav__link--active' : ''}`}
              onClick={e => handleNavClick(e, id)}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>
        <div className="sticky-nav__cta">
          <div className="sticky-nav__price-info">
            <div>
              <span className="sticky-nav__price">{price}</span>{' '}
              <span className="sticky-nav__period">{pricePeriod}</span>
            </div>
            <div className="sticky-nav__rating">
              <StarIcon size={12} />
              {' '}{rating}{' · '}
              <span>{reviewCount} reviews</span>
            </div>
          </div>
          <button className="sticky-nav__reserve-btn" type="button" onClick={onReserve}>
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}
