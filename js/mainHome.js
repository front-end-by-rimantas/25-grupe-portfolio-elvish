// IMPORT
// header
import { meniuData } from './data/headerMeniuData.js';
import { meniuRender } from './components/header/meniuRender.js';
import meniuScrollDown from './components/header/meniuScroll.js'
// hero
import scrollDown from './components/scroll-down.js'
import textChange from './components/textChange.js'
// about me
import {fillPorgress, skills} from './components/pogress/progress.js'
import {skillsData} from './data/skillsData.js'

// our services
import {ourServicesData} from './data/ourServicesData.js'
import {ourServices} from './components/ourServices/ourServices.js'
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
// subscribe
// scroll action
import transitions from './components/scrollAction.js';
// our blog
// get in touch
// footer
import { footerData } from './data/footerData.js';
import { footerRender } from './components/footer/footerRender.js';
// back to top button

// FUNKCIJU PANAUDOJIMAS
// header
meniuRender('#meniuBlock', meniuData);
document.querySelector('.meniubtn').addEventListener('click', () => meniuScrollDown("Home"))
document.querySelector('.aboutbtn').addEventListener('click', () => meniuScrollDown("about"))
document.querySelector('.servicesbtn').addEventListener('click', () => meniuScrollDown("services"))
document.querySelector('.educationbtn').addEventListener('click', () => meniuScrollDown("education"))
document.querySelector('.workbtn').addEventListener('click', () => meniuScrollDown("ourWork"))
document.querySelector('.clientbtn').addEventListener('click', () => meniuScrollDown("ourClients"))
document.querySelector('.blogbtn').addEventListener('click', () => meniuScrollDown("blog"))
document.querySelector('.contactbtn').addEventListener('click', () => meniuScrollDown("contact"))
// hero
// about me
skills("#progressCol1","#progressCol2", skillsData);
document.addEventListener("scroll", () => fillPorgress(skillsData));

// our services
ourServices('#our_services_block', ourServicesData);
// numbers
const achievement = new Achievements('#numbers_block', achievementsData);
// achievement.render();

// education and experience
educationRender('#educationExperience', educationData, experienceData)
// hire me
// our work
// our client
reviewsRender('#reviews', reviewsData);
document.querySelector('#reviews').classList.add('carousel');
carousel()
// great people
// subscribe
// our blog
// get in touch
// footer
footerRender('#footer-icons', footerData)
// back to top button
document.querySelector('.backToTopBtn').addEventListener('click', () => meniuScrollDown("Home"))