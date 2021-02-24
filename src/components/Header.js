import React from 'react';
import logo from '../asset/logo.svg';

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="header__logo" title="Airbase" alt="Airbase" />
    </header>
  )
}
