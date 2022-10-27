// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

// import your icons
import { faTwitter, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faRightLong, faEnvelope } from '@fortawesome/free-solid-svg-icons';


library.add(
  faEnvelope,
  faWhatsapp,
  faTwitter,
  faCopyright,
  faArrowRight,
  faRightLong,
  faGithub
  // more icons go here
);