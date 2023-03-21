const isEscKey = ev => ev.key === 'Escape' || ev.keyCode === 27;


class Dialog extends HTMLElement {
	constructor() {
		super()
		this.element = this.querySelector('dialog')
		this.openers = Array.from(document.querySelectorAll(`[aria-controls="${this.element.id}"]`))
		this.closers = Array.from(this.querySelectorAll('.js-close'))
		this.body = document.body
		this.lockScroll = true;

		this.#init()
	}

	#init() {
		this.#activeOpeners()
		this.#activeClosers()
		this.#closeOnClickBackdrop()
		this.#closeOnClickEscKey()
	}

	#closeOnClickBackdrop() {
		this.element.addEventListener('click', ev => ev.target.nodeName === 'DIALOG' && this.close())
	}

	#closeOnClickEscKey() {
		document.addEventListener('keydown', ev => {
			if (this.element.open && isEscKey(ev)) {
				ev.preventDefault()
				this.close()
			}
		})
	}

	#activeOpeners() {
		if (this.openers.length > 0) this.openers.forEach(opener => opener.addEventListener('click', () => this.show()))
	}

	#activeClosers() {
		if (this.closers.length > 0) this.closers.forEach(closer => closer.addEventListener('click', () => this.close()))
	}

	show() {
		this.element.showModal()
		if (this.lockScroll) this.body.style.overflowY = 'hidden'
	}

	close() {
		this.element.classList.add('is-closing')

		this.element.addEventListener('animationend', () => {
			if (this.lockScroll) this.body.style.overflowY = 'auto'
			this.element.classList.remove('is-closing')
			this.element.close()
		}, { once: true })
	}
}

customElements.define("custom-dialog", Dialog);
