// IMPORT
// header
import { Header } from './components/header/Header.js'
import { headerData } from './data/headerMeniuData.js';
// hero
import scrollDown from './components/scroll-down.js'
import textChange from './components/textChange.js'
// about me
import {fillPorgress, skills} from './components/pogress/progress.js'
import {skillsData} from './data/skillsData.js'

// our services
import {ourServicesData} from './data/ourServicesData.js';
import {ourServices} from './components/ourServices/ourServices.js';
// numbers
import { achievementsData } from './data/achievementsData.js';
import { Achievements } from './components/achievements/Achievements.js';
// education and experience
import { educationData } from './data/educationData.js';
import { experienceData } from './data/educationData.js';
import { educationRender } from './components/education/educationRender.js'
// hire me
// our work
import filterSelection from './components/work/work-filter.js';
// our client
import { reviewsData } from './data/reviewsData.js';
import { reviewsRender } from './components/ourClients/reviewsRender.js';
import { carousel } from './components/ourClients/carousel.js'
// great people
import { greatPeopleData } from './data/greatPeopleData.js';
import { renderGreatPeople } from './components/greatPeople/renderGreatPeople.js'
// subscribe
import { sendEmail } from './components/emailsend/sendEmail.js'
// scroll action
// our blog
import {ourBlogsData} from './data/ourBlogsData.js'
import {ourBlogs} from './components/ourBlogs/ourBlogs.js'
// get in touch
import { sendGetInTouch } from './components/getInTouchDataSend/sendGetInTouch.js'
// footer
import { footerData } from './data/footerData.js';
import { footerRender } from './components/footer/footerRender.js';
// back to top button

// FUNKCIJU PANAUDOJIMAS
// header
new Header('#meniuBlock', headerData)
// hero
// about me
skills("#progressCol1","#progressCol2", skillsData);
document.addEventListener("scroll", () => fillPorgress(skillsData));

// our services
ourServices('#our_services_block', ourServicesData);
// numbers
const achievement = new Achievements('#numbers_block', achievementsData);
// education and experience
educationRender('#educationExperience', educationData, experienceData)
// hire me
// our work
// our client
reviewsRender('#reviews', reviewsData);
document.querySelector('#reviews').classList.add('carousel');
carousel()
// great people
renderGreatPeople('#clients', greatPeopleData);
// subscribe
// our blog
ourBlogs('#our_blogs_block', ourBlogsData);
// get in touch
// footer
footerRender('#footer-icons', footerData)
// back to top button
// document.querySelector('.backToTopBtn').addEventListener('click', () => meniuScrollDown("Home"))