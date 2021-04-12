// import {isValidFileFormat} from '../../utils/isValidFileFormat.js';

function isValidourServiceItem(ourServices) {
    if (typeof ourServices !== 'object' ||
        Array.isArray(ourServices)) {
        console.log('ERROR: ourServices yra netinkamo tipo');
        return false;
    }

    if (ourServices.icon === undefined) {
        console.warn('ERROR: neduota icon reiksme');
        return false;
    } else if (typeof ourServices.icon !== 'string' ||
        ourServices.icon === '') {
        console.warn('ERROR: icon turi buti ne tuscias tekstas');
        return false;
    // } else if (!isValidFileFormat(ourServices.icon, ['png'])) {
    //     console.log('ERROR: failo pavadinimas neatitinka formato');
    //     return false;
    }

    if (ourServices.title === undefined) {
        console.warn('ERROR: neduota title reiksme');
        return false;
    } else if (typeof ourServices.title !== 'string' ||
        ourServices.title === '') {
        console.warn('ERROR: title turi buti ne tuscias tekstas');
        return false;
    }

    if (ourServices.description === undefined) {
        console.warn('ERROR: neduota description reiksme');
        return false;
    } else if (typeof ourServices.description !== 'string' ||
        ourServices.description === '') {
        console.warn('ERROR: description turi buti ne tuscias tekstas');
        return false;
    }

    if (ourServices.active === undefined) {
        console.warn('ERROR: neduota active reiksme');
        return false;
    } else if (typeof ourServices.active !== 'boolean') {
        console.warn('ERROR: active netinkamo tipo (turi buti boolean)');
        return false;
    }

    return true;
}

export {isValidourServiceItem}
