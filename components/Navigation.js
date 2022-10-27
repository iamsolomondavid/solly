// import next components
import Image from 'next/image';

// import components
import Hamburger from './Hamburger';
import Menu from './Menu';

// import styles
import nav from '../styles/Components.module.scss';

const Navigation = () => {
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
        <Hamburger />
        <Menu />
      </div>
    </div>
  )
}

export default Navigation