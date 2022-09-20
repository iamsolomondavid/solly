// import next components
import Image from 'next/image';

// import components
import Hamburger from './Hamburger';

// import styles
import nav from '../styles/Components.module.scss';

const Navigation = () => {
  return (
    <div className={nav.navigation} id="navigation">
        <div className={nav.logo}>
            <Image 
                src='/images/logo.webp'
                width={94}
                height={27}
                layout='fixed'
            />
        </div>
        <Hamburger />
    </div>
  )
}

export default Navigation