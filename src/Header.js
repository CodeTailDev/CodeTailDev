import './Header.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

function Header() {
  return (
    <header className='scroll-header'>
      <nav className='nav'>
        <nav className='logo'>
          <a href='https://www.codetail.net'>CodeTail</a>
        </nav>
        <ul className='ul'>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Information</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
        
    </nav>
    </header>
  )
}

export default Header;