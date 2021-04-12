function isValidSkill(skill){  
        if (skill.name === undefined) {
            console.warn('ERROR: neduota name reiksme');
            return false;
        } else if (typeof skill.name !== 'string' ||
            skill.name === '') {
            console.warn('ERROR: name turi buti ne tuscias tekstas');
            return false;
        }
        if (skill.percent === undefined) {
            console.warn('ERROR: neduota percent reiksme');
            return false;
        } else if (typeof skill.percent !== 'string' ||
            skill.percent === '') {
            console.warn('ERROR: percent turi buti ne tuscias tekstas');
            return false;
        }
        
        if(skill.percent[skill.percent.length - 1] !== "%" ||
        `${parseInt(skill.percent)}`.length !== (skill.percent.length - 1 )){
            console.warn('ERROR: percent reiksme turi buti skaicius pasibaigiantis %');
            return false;
        }
        
    return true;
}

export { isValidSkill }