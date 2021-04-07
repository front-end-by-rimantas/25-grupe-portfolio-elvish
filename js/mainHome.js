// IMPORT
// header
// hero
import scrollDown from './components/scroll-down.js'
import textChange from './components/textChange.js'
// about me
import {fillPorgress, skills} from './components/pogress/progress.js'
import {skillsData} from './data/skillsData.js'

// our services
// numbers
// education and experience
// hire me
// our work
import filterSelection from './components/work/work-filter.js';
// our client
// great people
// subscribe
// scroll action
import transitions from './components/scrollAction.js';
// our blog
// get in touch
// footer
// back to top button

// FUNKCIJU PANAUDOJIMAS
// header
// hero
// about me
skills("#progressCol1","#progressCol2", skillsData);
document.addEventListener("scroll", () => fillPorgress(skillsData));

// our services
// numbers
// education and experience
// hire me
// our work
// our client
// great people
// subscribe
// our blog
// get in touch
// footer
// back to top button
