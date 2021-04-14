import {isValidOurBlogs} from './isValidOurBlogs.js';
import {isValidOurBlogItem} from './isValidOurBlogItem.js';

function ourBlogs(selector, data) {

    // input validation 

    if (!isValidOurBlogs(selector, data)) {
        return false;
    }

    // logic

    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas.');
        return false;
    }

    const {list, imgPath, maxCount} = data;

    let HTML = '';
    let generatedOurBlogsCount = 0;

    for (let i = 0; i < list.length; i++) {
        const ourBlog = list[i];
        
        // our-blog item validation

        if (!isValidOurBlogItem(ourBlog) ||
            !ourBlog.active) {
                continue;
            }

        if (generatedOurBlogsCount === maxCount) {
            break;
        }

        HTML += `<div class="col-12 col-lg-4 blog-item">`;

        if (ourBlog.blog_type === 'img'){
            HTML += `<img src="${imgPath + ourBlog.img}" class="blog-img alt="">`;
        }

        if (ourBlog.blog_type === 'video'){
            HTML += `<div class="blog-video">
                <img src="${imgPath + ourBlog.img}" class="blog-img alt="">
                <a href="${ourBlog.video}" class="blog-video"></a>
                <i class="fa fa-${ourBlog.icon}"></i>
            </div>`;
        }

        generatedOurBlogsCount++;
        HTML += `  <a href="#" class="blog-link-title">${ourBlog.title}</a>
                <a href="#" class="blog-link-a">${ourBlog.category}</a>
                <p class="paragraph">${ourBlog.date}</p>
                <a href="#" class="blog-link-text">${ourBlog.author}</a>
                <p class="paragraph">${ourBlog.article}</p>
                <a href="${ourBlog.link_read_more}"class="blog-link-read-more">${ourBlog.information_link}</a>
            </div>`;
    }      

    // post logic validation

    // result return

    DOM.innerHTML = HTML;

}

export {ourBlogs}
