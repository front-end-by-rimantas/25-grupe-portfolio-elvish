// IMPORT
// blog
//import { ourBlogsData } from './data/ourBlogsData.js'
//import { ourBlogs } from './components/ourBlogs/ourBlogs.js'
import { renderPages } from './components/blog-lifestyle/renderPages.js'
// search column
import { renderCategories } from './components/blog-lifestyle/renderCategories.js'
import { categories } from './data/blogData/categoriesData.js';
import { archives } from './data/blogData/archivesData.js';
import { renderRecentPosts } from './components/blog-lifestyle/renderRecentPosts.js'
import { recentPosts } from './data/blogData/recentPostsData.js';
import { tags } from './data/blogData/tagsData.js';
import { renderTags } from './components/blog-lifestyle/renderTags.js'

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
renderRecentPosts('#recentPost', recentPosts);
renderCategories('#archives', archives, "Archives");
renderTags('#tags', tags)
// footer
footerRender('#footer-icons-blog', footerData)