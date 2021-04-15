// IMPORT
// blog
// search column
import { renderCategories } from './components/blog-lifestyle/renderCategories.js'
import { categories } from './data/blogData/categoriesData.js';
import { archives } from './data/blogData/archivesData.js';
import { renderRecentPosts } from './components/blog-lifestyle/renderRecentPosts.js'
import { recentPosts } from './data/blogData/recentPostsData.js';
import { tags } from './data/blogData/tagsData.js';
import { renderTags } from './components/blog-lifestyle/renderTags.js'
import { comments } from './data/blogData/commentsData.js';
import { renderComments } from './components/blog-lifestyle/renderComments.js';
// footer
import { footerData } from './data/footerData.js';
import { footerRender } from './components/footer/footerRender.js';
// back to top button

// FUNKCIJU PANAUDOJIMAS
//header
document.getElementById('backToTop').style.display = "none";
// blog post
renderTags('#postsTags',tags);
const tagElement = document.getElementById('postsTags');
tagElement.querySelector('.blog-titles').style.display = "none";
// comments
renderComments('#comments', comments);
// search column
recentPosts.imgPath = '../../img/blog/'
renderCategories('#categories', categories, "Categories");
renderRecentPosts('#recentPost', recentPosts);
renderCategories('#archives', archives, "Archives");
renderTags('#tags', tags)
// footer
footerRender('#footer-icons-blog', footerData)