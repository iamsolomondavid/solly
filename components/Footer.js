// Import my fontawesome library
import './Fontawesome'

// Import fontawesome component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Import stylesheet
import footer from '../styles/Components.module.scss'

const Footer = () => {
  return (
    <footer  className={footer.footer}>
      <span>- <FontAwesomeIcon icon="fa-regular fa-copyright" /> 2022 -</span>
      <p>ALL RIGHT RESERVED - SOLLY</p>
    </footer>
  )
}

export default Footer