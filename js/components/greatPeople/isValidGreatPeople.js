  
function isValidGreatPeople(selector, data) {

    if (typeof selector !== 'string' ||
        selector === '') {
        console.log('ERROR: blogas selectorius');
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
        console.log('ERROR: blogi data duomenys');
        return false;
    }

    return true;
}

export { isValidGreatPeople }