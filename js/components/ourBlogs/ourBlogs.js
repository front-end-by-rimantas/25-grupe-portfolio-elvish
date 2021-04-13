


function ourBlogs(selector, data) {

    // if (!isValidOurBlogs(selector, data)) {
    //     return false;
    // }

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

        // if (!isValidourBlogItem(ourBlog) ||
        //     !ourBlog.active) {
        //         continue;
        //     }

        if (generatedOurBlogsCount === maxCount) {
            break;
        }

        

        generatedOurBlogsCount++;
        HTML += `<div class="col-12 col-lg-4 blog-item">
                    <div class="blog-video">
                        <img src="${imgPath + ourBlog.img}" class="blog-img alt="">
                        <a href="#" class="blog-video"></a>
                        <i class="fa fa-${ourBlog.icon}"></i>
                    </div>
                    <a href="#" class="blog-link-title">${ourBlog.title}</a>
                    <a href="#" class="blog-link-a">${ourBlog.category}</a>
                    <p class="paragraph">${ourBlog.date}</p>
                    <a href="#" class="blog-link-text">${ourBlog.author}</a>
                    <p class="paragraph">${ourBlog.article}</p>
                    <a href="#" class="blog-link-read-more">${ourBlog.information_link}</a>
                 </div>`;
                

    }      

    DOM.innerHTML = HTML;

}

export {ourBlogs}
