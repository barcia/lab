const isEscKey = ev => ev.key === 'Escape' || ev.keyCode === 27;


class Modal {
	constructor(element) {
		this.element = element
		this.closer = element.querySelector('#close')
		this.body = document.body
		this.lockScroll = true;
	}

	show() {
		this.element.showModal()
		if (this.lockScroll) this.body.style.overflowY = 'hidden'

		this.element.addEventListener('click', (ev) => {
			if (ev.target.nodeName === 'DIALOG') {
				this.close()
			}
		})

		this.closer.addEventListener('click', () => {
			this.close()
		}, { once: true } )

		document.addEventListener('keydown', ev => {
			ev.preventDefault()
			if (isEscKey(ev)) this.close()
		}, { once: true } )
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
