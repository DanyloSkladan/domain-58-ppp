// написанный на классе (start)
class AccordionRush {
    constructor(sectionContainer, options) {
        this.sectionContainer = sectionContainer
        this.options = options
        this.render() // запуск скрипта
    }

    // функция рендера табов start
    render() {
        let section = document.querySelector(`${this.sectionContainer}`);
        section.addEventListener('click', (e) => {
            let target = e.target;
            let description = target.children[1];
            let active = document.getElementsByClassName(`${this.activeClassTab()}`)
            if (target.closest('.questions__item')) {
                this.modeTabs(description, active, target)
                this.calcheightTabs(description, target)
                this.transitionNumbers(description)
            }
        })
    }
    // функция рендера табов end


    // функция для вычисления высоты и добавления для табов start
    calcheightTabs(description, target) {
        let heightTab = description.scrollHeight;
        let itemBody = document.querySelectorAll(`${this.options.itemBody}`)
        if(this.options === undefined
            || this.options.openAllTabs === undefined
            || this.options.openAllTabs === false)
        {
            for(let i = 0; i < itemBody.length; i++){
                itemBody[i].style.removeProperty('height');
            }
        }

        if (target.classList.contains(`${this.activeClassTab()}`)) {
            description.style.height = `${heightTab}px`
        } else {
            description.style.removeProperty('height');
        }
    }
    // функция для вычисления высоты и добавления для табов end


    // функция для ручного изменения transition start
    transitionNumbers(description) {
        if (this.options === undefined
            || this.options.transitionTabs === undefined) {
            description.style.transition = `height 700ms ease`
        }
        else if (this.options.transitionTabs === false) {
            description.style.transition = `height 0ms`
        }
        else if (this.options.transitionTabs.hasOwnProperty) {
            description.style.transition = `height ${this.options.transitionTabs}`
        }
    }
    // функция для ручного изменения transition end


    // функция для изменения мода табов start
    modeTabs(description, active, target) {
        if(this.options === undefined
            || this.options.openAllTabs === undefined
            || this.options.openAllTabs === false
        ) {
            this.closeRestTabs(description, active, target)
        }
        else if(this.options.openAllTabs === true) {
            target.classList.toggle(`${this.activeClassTab()}`);
        }
    }
    // функция для изменения мода табов end


    // функция для закрытия остальных табов start
    closeRestTabs(description, active, target) {
        if (target.classList.contains('questions__item')) {
            if (active.length > 0 && active[0] !== target)
                active[0].classList.remove(`${this.activeClassTab()}`);
            target.classList.toggle(`${this.activeClassTab()}`);
        }
    }
    // функция для закрытия остальных табов end


    // функция для изменения активного класса start
    activeClassTab(){
        if(this.options === undefined || this.options.activeClassTabs === undefined ){
            return 'questions__item-active'
        } else {
            return this.options.activeClassTabs
        }
    }
    // функция для изменения активного класса end
}

// написанный на классе (end)