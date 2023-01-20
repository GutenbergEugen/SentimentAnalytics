import React from 'react';
import logo from './media/Robot.png';
import { Link } from 'react-router-dom';
import s from './index.module.css';

export default function Header() {
  return (
    <div className={s.header_block}>
        <div className={['wrapper', s.nav_container].join(' ')}>
          <Link to='/' className={s.logo}>
              <img src={logo} alt="logo" />
              <p className={s.logo_title}>Sentiment Analytics</p>
          </Link>
          <nav className={s.nav}>
              <Link>CUSTOMERS</Link>
              <Link>PRICING</Link>
              <Link>FEATURES</Link>

          </nav>
        </div>
       

    </div>
  )
}
