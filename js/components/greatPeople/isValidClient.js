import { isValidFileFormat } from '../../utils/isValidFileFormat.js';

function isValidClient(client) {
    if (typeof client !== 'object' ||
        Array.isArray(client)) {
        console.warn('ERROR: client yra netinkamo tipo');
        return false;
    }

    if (client.link === undefined) {
        console.warn('ERROR: neduota img reiksme');
        return false;
    } else if (typeof client.link !== 'string' ||
        client.link === '') {
        console.warn('ERROR: img turi buti ne tuscias tekstas');
        return false;
    } 
    else if (!isValidFileFormat(client.link, ['jpg', 'png'])) {
        console.log('ERROR: failo pavadinimas neatitinka formato');
        return false;
    }

    if (client.title === undefined) {
        console.warn('ERROR: neduota title reiksme');
        return false;
    } else if (typeof client.title !== 'string' ||
        client.title === '') {
        console.warn('ERROR: title turi buti ne tuscias tekstas');
        return false;
    }

    return true;
}

export { isValidClient }