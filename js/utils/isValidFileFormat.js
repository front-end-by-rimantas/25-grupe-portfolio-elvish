function isValidFileFormat(fileName, allowedExtension) {
    if (typeof fileName !== 'string' ||
        fileName === '') {
        console.warn('ERROR: netinkamo formato failo pavadinimas');
        return false;
    }

    if (!Array.isArray(allowedExtension) ||
        allowedExtension.length === 0) {
        console.warn('ERROR: failo pletiniu sarasas turi buti array ir ne tuscias');
        return false;
    }

    const fileParts = fileName.split('.');
    if (fileParts.length !== 2) {
        console.warn('ERROR: failo pavadinime turi buti tik vienas taskas');
        return false;
    }

    if (fileParts[0].trim() === '') {
        console.warn('ERROR: failo pavadinime pradzia (pries taska) turi buti ne tuscia');
        return false;
    }

    if (fileParts[1].trim() === '') {
        console.warn('ERROR: failo pavadinime pabaiga (uz tasko) turi buti ne tuscia');
        return false;
    }

    if (!allowedExtension.includes(fileParts[1].trim())) {
        console.warn('ERROR: failo pletinys nera is leistino saraso');
        return false;
    }

    return true;
}

export { isValidFileFormat }