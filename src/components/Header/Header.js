import React, { useEffect, useState } from 'react';
import "./Header.css";

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' }
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="site-header__brand"
          href="#about"
          onClick={() => setIsOpen(false)}
        >
          Arlind Arifaj
        </a>

        <button
          type="button"
          className="site-header__toggle"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="site-header__toggleIcon" aria-hidden="true" />
        </button>
      </div>

      <nav
        className={['site-header__nav', isOpen ? 'is-open' : '']
          .filter(Boolean)
          .join(' ')}
        aria-label="Primary"
      >
        {links.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
