import './css/Footer.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import React from 'react';
import moment from 'moment'

function Footer() {
  return (
    <footer className='scroll-footer'>
      <nav className='nav'>
        <nav className='logo'>
          <a href='https://www.codetail.net'>CodeTail</a>
        </nav>
        <ul className='ul'>
          <li>
            <a href='#Home'>Home</a>
          </li>
          <li>
            <a href='#Information'>Information</a>
          </li>
          <li>
            <a href='#About'>About</a>
          </li>
        </ul>
    </nav>
        <p className='Copyright'>Copyright © 2023-{moment().year()} CodeTail</p>
    </footer>
  )
}

export default Footer;