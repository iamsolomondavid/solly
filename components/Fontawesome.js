// import the library
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; /* eslint-disable import/first */

// import your icons
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { faArrowRight, faRightLong } from '@fortawesome/free-solid-svg-icons';


library.add(
  faCopyright,
  faArrowRight,
  faRightLong
  // more icons go here
);