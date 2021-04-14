function isValidOurBlogs(selector, data) {
    if (typeof selector !== 'string' ||
    selector === '') {
        return false;
    }

    if (typeof data !== 'object' || 
        Array.isArray(data) ||
        !data.imgPath ||
        typeof data.imgPath !== 'string' ||
        data.imgPath === '' ||
        !data.list ||
        !Array.isArray(data.list) ||
        data.list.length === 0) {
        return false;
    }

    if (typeof data.maxCount == 'number') {
        if (typeof data.maxCount !== 'number' ||
            !isFinite(data.maxCount) ||
            data.maxCount < 1 ||
            data.maxCount % 1 !== 0) {
            console.log('ERROR: blogas maxCount');
            return false;
        }
        
    }

    return true;
}

export {isValidOurBlogs}