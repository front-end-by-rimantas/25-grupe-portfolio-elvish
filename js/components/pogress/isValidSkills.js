function isValidSkills(selector1, selector2, data) { 
    if (typeof selector1 !== 'string' ||
        selector1 === '') {
        console.log('ERROR: blogas pirmasis selectorius');
        return false;
    }
    if (typeof selector2 !== 'string' ||
        selector2 === '') {
        console.log('ERROR: blogas pirmasis selectorius');
        return false;
    }
    
    if (!Array.isArray(data) || data.length === 0) {
        console.log('ERROR: blogi data duomenys');
        return false;
    }

    if (typeof data.maxCount == 'number') {
        if (!isFinite(data.maxCount) ||
            data.maxCount < 1 ||
            data.maxCount % 1 !== 0) {
            console.log('ERROR: blogas maxCount');
            return false;
        }
    }
    return true;
}

export { isValidSkills }