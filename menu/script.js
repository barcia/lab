const isArrowRightKey = ev => ev.key === 'ArrowRight' || ev.keyCode === 39;
const isArrowLeftKey = ev => ev.key === 'ArrowLeft' || ev.keyCode === 37;
const isArrowUpKey = ev => ev.key === 'ArrowUp' || ev.keyCode === 38;
const isArrowDownKey = ev => ev.key === 'ArrowDown' || ev.keyCode === 40;
const isEscKey = ev => ev.key === 'Escape' || ev.keyCode === 27;

class Menu {

	constructor(element) {
		this.element = element;
		this.trigger = element.querySelector('summary');
		this.drawer = this.trigger.nextElementSibling;
		this.closeButton = this.element.querySelectorAll('.menu-close');
		this.firstFocusableElement = this.element.querySelector('a, button');

		this.trigger.addEventListener('click', (ev) => this.#onClickTrigger(ev));
		this.openEvent = new Event('open');
		this.closeEvent = new Event('close');

		this.closeButton.forEach(closeButton => {
			closeButton.addEventListener('click', () => this.close() )
		});

		document.addEventListener('keydown', ev => {
			if (isEscKey(ev) && this.state) this.close()
		})
	}

	#onClickTrigger(ev) {
		ev.preventDefault();
		this.toggle();
	}

	open() {
		this.state = true;
		this.element.dispatchEvent(this.openEvent);
		this.firstFocusableElement && this.firstFocusableElement.focus()
	}


	close() {
		this.element.classList.add('is-closing');

		this.drawer.addEventListener('animationend', () => {

				this.element.classList.remove('is-closing');
				this.state = false;
				this.element.dispatchEvent(this.closeEvent);
				this.trigger.focus()

		}, { once: true })
	};

	toggle() {
		this.state
		? this.close()
		: this.open();
	}

	get state() {
		return this.element.open;
	}
	set state(isOpen) {
		this.element.open = isOpen;
	}
}
