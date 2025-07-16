import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper } from 'lucide-react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          <Newspaper style={{ marginRight: '8px', display: 'inline' }} />
          Fake News Gazette
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 