import './css/Header.css';
// function onClickTranslate() {
//   var i18n = "en_us";
//   if (i18n == "en_us"){
//     var i18nJson = fetch("./i18n/en_us.json", { method: "GET", headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, }).then(Response => Response.json())
//   }
//   var i18nJson = fetch("./i18n/en_us.json", { method: "GET", headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, }).then(Response => Response.json())
//   console.log(i18nJson)
// }

function Header() {
  return (
    <header className='scroll-header'>
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
          {/* <li>
            <button id='Translate' value="en_us" onClick={onClickTranslate}>Translate</button>
          </li> */}
        </ul>
      </nav>
    </header>
  )
}

export default Header;