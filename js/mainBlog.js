// IMPORT
// blog
//import { ourBlogsData } from './data/ourBlogsData.js'
//import { ourBlogs } from './components/ourBlogs/ourBlogs.js'
import { renderPages } from './components/blog-lifestyle/renderPages.js'
// search column

// footer
import { footerData } from './data/footerData.js';
import { footerRender } from './components/footer/footerRender.js';
// back to top button

// FUNKCIJU PANAUDOJIMAS

// blog posts
//ourBlogs('#blog_posts_block', ourBlogsData);
renderPages('#pages', 4);
document.querySelector('.pageNumber').classList.add("selected");
// footer
footerRender('#footer-icons-blog', footerData)