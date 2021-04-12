/*
patikrinti ar validus this.selector?
patikrinti ar validus this.data?
patikrinti ar pagal nurodyta this.selector egzistuoja elementas/vieta?

generuoti HTML
    - tikrinti ar kiekvienas this.data.list[i] yra lavidus istatyti i nurodyta vieta

pradeti stebeti scroll ivyki (event)
        - jeigu turinys tampa matomas ekrane
            - inicijuoti skaiciu count-up (nuo 0 iki nurodytos reiksmes)
            - uztikrinti, jog tai nutiktu tik 1 karta
*/

class Achievements{
    constructor(selector, data) {
        this.selector = selector;
        this.data = data;

        this.init();
    }
    init() {
        console.error('ERROR: nevalidus SELEKTORIUS');
    }
    isValidSelector() {
        return true;
    }
}


export { Achievements };