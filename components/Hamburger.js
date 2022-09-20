import ham from '../styles/Components.module.scss';

const Hamburger = () => {
  return (
    <div className={ham.hamburger}>
        <div id='dot-one'></div>
        <div id='dot-two'></div>
        <div id='dot-three'></div>
    </div>
  )
}

export default Hamburger