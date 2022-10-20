// import custom styles
import sidebar from '../styles/Components.module.scss';

const Sidebar = () => {
  return (
    <div className={sidebar.wrapper}>
        <span>RESUME&apos;</span>
        <span>WORKS</span>
        <span>ABOUT</span>
        <span>CONTACT</span>
    </div>
  )
}

export default Sidebar