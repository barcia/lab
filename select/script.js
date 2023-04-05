const isEscKey = ev => ev.key === 'Escape' || ev.keyCode === 27;


class Select {
	constructor(element) {
		this.element = element
		this.summary = element.querySelector('summary');
		this.content = this.summary.nextElementSibling;
		this.items = Array.from(this.element.querySelectorAll('button'))

		this.#closeOnClickOutside()
		this.#onClickItem()
	}

	#closeOnClickOutside() {
		document.addEventListener('click', ev => {
			if (! this.element.contains(ev.target)) {
				this.element.open = false
			}
		})
	}

	#onClickItem() {
		this.items.forEach(item => {
			item.addEventListener('click', () => {
				this.set(item)
			})
		})
	}

	set(item) {
		item.setAttribute('aria-selected', true)
		this.summary.textContent = item.textContent
		this.element.open = false
		this.#disableOthers(item)
	}

	unSet(item) {
		item.setAttribute('aria-selected', false)
	}

	#disableOthers(targetItem) {
		this.items.filter(item => item != targetItem).forEach(el => this.unSet(el))
	}

}


const element = document.querySelector('details')
new Select(element)


