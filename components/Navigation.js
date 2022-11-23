// import next components
import Image from 'next/image';

// import components
import Hamburger from './Hamburger';
import Menu from './Menu';

// Import my fontawesome library
import '../components/Fontawesome'

// Import fontawesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import styles
import nav from '../styles/Components.module.scss';

const Navigation = () => {

  const darkTheme = () => {
    const dark = document.querySelector('#dark');
    const light = document.querySelector('#light');

    document.getElementsByTagName('body')[0].classList.add('dark-theme');
    dark.classList.add('light-theme');
    light.classList.add('dark-theme');
  }
  const lightTheme = () => {
    const dark = document.querySelector('#dark');
    const light = document.querySelector('#light');

    document.getElementsByTagName('body')[0].classList.remove('dark-theme');
    dark.classList.remove('light-theme');
    light.classList.remove('dark-theme');
  }

  return (
    <div className={nav.navigation} id="navigation">
      <div className={nav.navWrapper}>
        <div className={nav.logo}>
            <Image 
                src='/images/logo.webp'
                width={94}
                height={27}
                layout='fixed'
                alt=''
            />
        </div>
        {/* ABSTRACTED - MADE DORMANT */}
        <Hamburger />
        <Menu />
        {/* Theme Utility */}
        {/* <div className={nav.themeUtility} id='theme'>
          <FontAwesomeIcon icon="fa-solid fa-cloud-moon" id='dark' onClick={darkTheme}/>
          <FontAwesomeIcon icon="fa-solid fa-cloud-sun" id='light' onClick={lightTheme}/>
        </div> */}
      </div>
    </div>
  )
}

export default Navigation