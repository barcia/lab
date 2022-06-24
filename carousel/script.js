class CarouselItemIndicator {
	constructor(item) {
		this.index = item.index
		this.element = document.createElement('button');

		this.element.innerText = this.index

		console.log();

		this.element.addEventListener('click', () => item.set())
	}

	active() {
		this.element.classList.add('is-active')
	}

	disable() {
		this.element.classList.remove('is-active')
	}
}

class CarouselItem {
	constructor(item, index, array, carousel) {
		this.element = item
		this.index = index
		this.array = array
		this.carousel = carousel
		this.indicator = new CarouselItemIndicator(this)

		const callback = entries => {
			entries.forEach(entry => {
				entry.isIntersecting === true
				? this.active()
				: this.disable()
			})
		};

		const observer = new IntersectionObserver(callback, {
			threshold: 0.60
		});
		observer.observe(this.element);
	}

	active() {
		this.element.classList.add('is-active')
		this.indicator.active()
	}

	disable() {
		this.element.classList.remove('is-active')
		this.indicator.disable()
	}

	set() {
		this.carousel.element.scrollLeft = this.carousel.element.scrollLeft + this.element.getBoundingClientRect().x
		this.carousel.current = this;
	}
}



class Carousel {
	constructor(element) {
		this.element = element
		this.items = [...this.element.querySelectorAll('li')].map((item, index, array) => new CarouselItem(item, index, array, this))
		this.current = this.items[0]; // preselected

		this.#showIndicators()
	}


	#showIndicators() {
		const box = document.querySelector('#indicators')

		this.items.forEach(item => {
			box.appendChild(item.indicator.element)
		})
	}

	next() {
		this.current.index < this.items.length - 1
		? this.items[this.current.index + 1].set()
		: this.first()
	}

	prev() {
		this.current.index > 0
		? this.items[this.current.index - 1].set()
		: this.last()
	}

	first() {
		this.items.at(0).set()
	}

	last() {
		this.items.at(-1).set()
	}

	set(n) {
		this.items.at(parseInt(n) + 1).set()
	}
}
