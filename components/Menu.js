// Import next components 
import Link from 'next/link';

// import custom styles
import menu from '../styles/Components.module.scss';

// Import my fontawesome library
import '../components/Fontawesome'
// Import fontawesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Menu = () => {
  return (
    <div className={menu.menu} id='menu'>
        <div className={menu.bubbleOne}></div>
        <div className={menu.bubbleTwo}></div>
        <div className={menu.menuWrapper}>
          {/* menu Navigation */}
          <div className={menu.menuNav}>
            <h4>Menu</h4>
            <ul>
              <Link href="#">
                <a>Works <span>showroom</span></a>
              </Link>
              <Link href="/resume.pdf">
                <a download='resume'>Resume</a>
              </Link>
            </ul>
          </div>
          {/* Connect */}
          <div className={menu.connect}>
            <h4>Get in touch</h4>
            <div>
              <Link href="">
                <a><FontAwesomeIcon icon="fa-brands fa-twitter" /></a>
              </Link>
              <Link href="">
                <a><FontAwesomeIcon icon="fa-brands fa-whatsapp" /></a>
              </Link>
              <Link href="">
                <a><FontAwesomeIcon icon="fa-brands fa-github" /></a>
              </Link>
              <Link href="">
                <a><FontAwesomeIcon icon="fa-solid fa-envelope" /></a>
              </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Menu