

function ourBlogs(selector, data) {

    console.log(data);

    const DOM = document.querySelector(selector);

    let HTML = '';

    HTML += `<div id="our_blog_block" class="col-12 blog-item">
                    <img src="./img/blog/blog-1.jpg" alt="blog1" class="blog-img">
                    <a href="#" class="blog-link-title">There are many variations</a>
                    <a href="#" class="blog-link-a">Lifestyle</a>
                    <p class="paragraph">13 February 2018
                    <a href="#" class="blog-link-text"> By Envato</a></p>
                    <p class="paragraph">Sit sagittis vulputate laoreet sodales tortor nulla lobortis bibendum netus primis fames. Lobortis ultricies.</p>
                    <a href="#" class="blog-link-read-more">Read More...</a>
                </div>`;

                
    DOM.innerHTML = HTML;

}

export {ourBlogs}