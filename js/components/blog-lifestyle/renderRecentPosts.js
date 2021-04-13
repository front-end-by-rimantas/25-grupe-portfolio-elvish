function renderRecentPosts(selector, data) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas.');
        return false;
    }

    const {maxCount, imgPath, list} = data;

    let HTML = '<h2 class="blog-titles">Recent post</h2>';
    let generatedOurBlogsCount = 0;

    for (let i = 0; i < list.length; i++) {
        const blog = list[i];

        if (generatedOurBlogsCount === maxCount) {
            break;
        }

        generatedOurBlogsCount++;
        HTML += `<div class="recentPostBox">
                    <img src="${imgPath + blog.img}" alt="Blog Image">
                    <div class = "post-texts">
                        <h3 class=blog-title>${blog.title}</h3>
                        <p class = "datePublished">${blog.date}</p>
                    </div>
                </div>`;
    }      

    DOM.innerHTML = HTML;

}

export {renderRecentPosts}