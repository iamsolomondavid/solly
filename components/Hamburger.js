// Import react hooks
import { useState } from 'react';

// Import custom styles
import ham from '../styles/Components.module.scss';

const Hamburger = () => {

  const [hamActive, setHamActive] = useState(false);

  const hamHandler = () => {
    const header = document.querySelector("header");
    const main = document.querySelector("main");
    const footer = document.querySelector("footer");
    const hamburger = document.querySelector('#hamburger');
    const navigation = document.querySelector('#navigation');
    const menu = document.querySelector('#menu');
    header.classList.toggle('makeOpaque');
    main.classList.toggle('makeOpaque');
    footer.classList.toggle('makeOpaque');
    hamburger.classList.toggle('ham-active');
    navigation.classList.toggle('ham-clicked');
    menu.classList.toggle('menu-open');
  }
  

  return (
    <div className={ham.hamburger} id='hamburger' onClick={hamHandler}>
        <div id='dot-one'></div>
        <div id='dot-two'></div>
        <div id='dot-three'></div>
    </div>
  )
}

export default Hamburger