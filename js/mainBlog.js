// IMPORT
// blog
//import { ourBlogsData } from './data/ourBlogsData.js'
//import { ourBlogs } from './components/ourBlogs/ourBlogs.js'
import { renderPages } from './components/blog-lifestyle/renderPages.js'
// search column
import { renderCategories } from './components/blog-lifestyle/renderCategories.js'
import { categories } from './data/blogData/categoriesData.js';
import { archives } from './data/blogData/archivesData.js';
import { recentPosts } from './data/blogData/recentPostsData.js';
import { tags } from './data/blogData/tagsData.js';
// footer
import { footerData } from './data/footerData.js';
import { footerRender } from './components/footer/footerRender.js';
// back to top button

// FUNKCIJU PANAUDOJIMAS

// blog posts
//ourBlogs('#blog_posts_block', ourBlogsData);
renderPages('#pages', 4);
document.querySelector('.pageNumber').classList.add("selected");
// search column
renderCategories('#categories', categories, "Categories");

renderCategories('#archives', archives, "Archives");
// footer
footerRender('#footer-icons-blog', footerData)