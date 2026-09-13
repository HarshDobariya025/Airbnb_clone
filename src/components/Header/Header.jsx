import { useState, useEffect } from 'react';
import './Header.css';
import { AirbnbLogo, GlobeIcon, MenuIcon, SearchIcon } from '../Icons.jsx';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} id="siteHeader">
      <div className="header__inner">
        {/* Logo */}
        <a className="header__logo" href="#" aria-label="Airbnb homepage">
          <AirbnbLogo />
        </a>

        {/* Search Bar */}
        <div className="header__search" role="search">
          <button className="header__search-btn" type="button">
            <img
              className="header__search-house"
              src="/assets/images/ui/searchbar-house.png"
              alt=""
              aria-hidden="true"
            />
            Anywhere
          </button>
          <span className="header__search-divider" />
          <button className="header__search-btn" type="button">Anytime</button>
          <span className="header__search-divider" />
          <button className="header__search-btn header__search-btn--guests" type="button">Add guests</button>
          <button className="header__search-icon-btn" type="button" aria-label="Search">
            <span className="header__search-icon">
              <SearchIcon />
            </span>
          </button>
        </div>

        {/* Right Nav */}
        <nav className="header__nav" aria-label="Site navigation">
          <a className="header__nav-link" href="#">Become a host</a>
          <button className="header__nav-icon-btn" type="button" aria-label="Choose a language and currency">
            <span className="header__nav-icon">
              <GlobeIcon />
            </span>
          </button>
          <button className="header__nav-menu-btn" type="button" aria-label="Main navigation menu">
            <span className="header__nav-icon">
              <MenuIcon />
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
