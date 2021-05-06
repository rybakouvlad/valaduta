import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoValduta } from '../assets/svg/valaduta-logo.svg';
import { ReactComponent as TextValduta } from '../assets/svg/valaduta-text.svg';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="header-text">
        <Link to="/">ГЛАВНОЕ</Link>
        <Link to="/beers">ПИВО</Link>
      </div>
      <div className="header-logo">
        <Link to="/">
          <LogoValduta />
          <TextValduta />
        </Link>
      </div>
      <div className="header-text">
        <Link to="/news">НОВОСТИ</Link>
        <Link to="/about">О НАС</Link>
      </div>
    </header>
  );
};
