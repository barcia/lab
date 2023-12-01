

class ColorScheme {
    constructor() {
        this.default = 'auto';
        this.selector = document.querySelector('#colorscheme-selector');
        this.options = [...this.selector.querySelectorAll('input[name="colorscheme"]')];
        this.current = undefined
        this.init();
    }

    init() {
        this.#getDefaultOption();
        this.#setOption(this.options.find(opt => opt.value === this.current))
        this.#handleChangeColorScheme();
        this.#handleSystemColorSchemeChange();
    }

    #getDefaultOption() {
        this.current = this.options.find(opt => opt.checked)?.value || this.default;
    }

    #setOption(option, value = true) {
        option.checked = value;
    }

    #handleChangeColorScheme() {
        this.selector.addEventListener('change', (event) => {
            this.current = event.target.value;
            this.#setColorScheme(event.target.value);
        })
    }

    #handleSystemColorSchemeChange() {
        window.matchMedia('(prefers-color-scheme: dark)')
            .addEventListener('change',() => {
                if (this.current !== 'auto') return;
                this.#setColorScheme('auto')
        })
    }

    #setColorScheme(value) {
        value === 'auto' ? value = this.#getSystemColorScheme() : value;
        this.#setColorSchemeOnHTML(value);
        this.#setColorSchemeOnLocalStorage(value);
    }

    #getSystemColorScheme() {
        return window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : undefined;
    }

    #setColorSchemeOnHTML(value) {
        document.documentElement.setAttribute('data-colorscheme', value);
    }

    #setColorSchemeOnLocalStorage(value) {
        localStorage.setItem('colorscheme', value);
    }
}

new ColorScheme();




