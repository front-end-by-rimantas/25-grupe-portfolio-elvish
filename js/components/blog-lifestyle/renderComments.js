function renderComments(selector, data) {
    const DOM = document.querySelector(selector);
    if (!DOM) {
        console.error('Pagal pateikta selektoriu nerastas norimas elementas.');
        return false;
    }

    const {maxCount, imgPath, list} = data;

    let HTML = '';
    let generatedOurBlogsCount = 0;

    for (let i = 0; i < list.length; i++) {
        const blog = list[i];

        if (generatedOurBlogsCount === maxCount) {
            break;
        }

        if(blog.type === "reply"){
            HTML += `<div class="reply userComment">`;
        } else {
            HTML += `<div class = "userComment">`;
        }
        

        generatedOurBlogsCount++;
        HTML += `<div class="userImgDiv"><img src="${imgPath + blog.img}" class="userImg" alt="User Photo"></div>
                <div>
                    <h3>${blog.name}</h3>
                    <p>${blog.date}</p>
                    <p class="paragraph">${blog.comment}</p>
                    <div class="replybtn"><i class="fa fa-reply" aria-hidden="true"></i> Reply</div>
                </div>
            </div>`;
    }      

    DOM.innerHTML = HTML;

}

export {renderComments}