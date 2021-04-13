class Header {
    constructor (selector, data) {
        this.selector = selector;
        this.data = data;

        this.DOM = null;

        this.init();

    }

    init () {
        if (!this.isValidSelector()) {
            return false;
        }
        if (!this.isValidData()) {
            return false;
        }
        
        const DOM = document.querySelector(this.selector);
        if(!DOM) {
            console.error('FAIL!');
            return false;
        }

        this.DOM = DOM;

        this.render();
        this.scrollHeaderChange();
        this.scrollTo();
        this.selectedDot();

    }

    isValidSelector () {
        return true;
    }

    isValidData () {
        return true;
    }
    
    render() {
        let HTML = ''
        for (let i = 0; i <this.data.length; i++) {
            const item = this.data[i]
            HTML += `<a class="${item.class}">${item.selectorname}</a>`;
        }
        this.DOM.innerHTML = HTML
    }


    scrollHeaderChange() {
        window.onscroll = () => {
            const headerBar = document.querySelector('header');
            if (window.pageYOffset > 0) {
                headerBar.classList.remove('headerBar');
                headerBar.classList.add('headerBar-white');       
            } else {
                headerBar.classList.remove('headerBar-white');
                headerBar.classList.add('headerBar');
            }
        }      
    }

    scrollTo() {
        const buton = document.querySelectorAll('.meniu-bar-selector');
        for (let i = 0; i < buton.length; i++) {
            buton[i].addEventListener('click', () => goTo(this.data[i].href));
            console.log(this.data[i].href);
        }
    
        function goTo(selection) {
            const id = `${selection}`;
            const yOffset = 0; 
            const element = document.getElementById(id);
            const y = element.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({top: y, behavior: 'smooth'});
        }
    }

    selectedDot () {

    }

}

export { Header }   