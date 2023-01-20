import React from 'react';
import logo from './media/logo.png';
import { Link } from 'react-router-dom';
import s from './index.module.css';

export default function Header() {
  return (
    <div className={s.header_block}>
        <Link to='/'>
            <img src={logo} alt="logo" />
        </Link>
        <nav className={s.nav}>
            <Link>CUSTOMERS</Link>
            <Link>PRICING</Link>
            <Link>FEATURES</Link>

        </nav>

    </div>
  )
}
