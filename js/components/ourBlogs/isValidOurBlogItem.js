function isValidOurBlogItem() {
    if (typeof ourBlog !== 'object' ||
        Array.isArray(ourBlog)) {
        console.warn('ERROR: ourBlog yra netinkamo tipo');
        return false;
    }
    
    if (ourBlog.img === undefined) {
        console.warn('ERROR: neduota img reiksme');
        return false;
    } else if (typeof ourBlog.img !== 'string' ||
        ourBlog.img === '') {
        console.warn('ERROR: img turi buti ne tuscias tekstas');
        return false;
        
    // } else if (!isValidFileFormat(ourBlog.img, ['png'])) {
    //     console.log('ERROR: failo pavadinimas neatitinka formato');
    //     return false;
    }

    if (ourBlog.title === undefined) {
        console.warn('ERROR: neduota title reiksme');
        return false;
    } else if (typeof ourBlog.title !== 'string' ||
        ourBlog.title === '') {
        console.warn('ERROR: title turi buti ne tuscias tekstas');
        return false;
    }

    if (ourBlog.article === undefined) {
        console.warn('ERROR: neduota article reiksme');
        return false;
    } else if (typeof ourBlog.article !== 'string' ||
        ourBlog.article === '') {
        console.warn('ERROR: description turi buti ne tuscias tekstas');
        return false;
    }

    if (ourBlog.active === undefined) {
        console.warn('ERROR: neduota active reiksme');
        return false;
    } else if (typeof ourBlog.active !== 'boolean') {
        console.warn('ERROR: active netinkamo tipo (turi buti boolean)');
        return false;
    }

    return true;
}

export {isValidOurBlogItem}