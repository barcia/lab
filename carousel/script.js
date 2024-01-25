
class CarouselItemIndicator {
	constructor(carouselItem) {
		this.carouselItem = carouselItem
		this.options = carouselItem.options
		this.indicators = this.options.indicators
		this.id = this.options.carouselItemIndicatorId + (this.carouselItem.index + 1)
		this.element = this.#createElement()
	}

	#createElement() {
		const element = document.createElement('button')
		element.id = this.id
		element.setAttribute('aria-controls', this.carouselItem.id)
		element.setAttribute('aria-labelledby', this.carouselItem.id)

		this.indicators.appendChild(element)

		element.addEventListener('click', () => {
			this.carouselItem.carousel.go(this.carouselItem.index + 1)
		})

		return element
	}

	active(bool) {
		this.element.setAttribute('aria-current', bool)
	}
}

class CarouselItem {
	constructor(element, index, carousel) {
		this.element = element
		this.index = index
		this.carousel = carousel
		this.options = carousel.options
		this.id = this.element.id || this.options.carouselItemId + (this.index + 1)
		this.indicator = this.options.indicators ? new CarouselItemIndicator(this) : undefined

		this.#init()
	}

	#init() {
		this.element.id = this.id
		this.element.setAttribute('controled-by', this.indicator?.id)
		this.#setObserver()
		this.#goOnClick()
	}

	#setObserver() {
		const callback = entries => {
			entries.forEach(entry => this.#active(entry.isIntersecting))
		};

		const options = {
			threshold: 1
		}

		const observer = new IntersectionObserver(callback, options);
		observer.observe(this.element);
	}

	#goOnClick() {
		this.element.addEventListener('click', () => {
			if (this.carousel.currentItemIndex === this.index) return
			this.carousel.go(this.index + 1)
		})
	}

	#active(bool) {
		this.element.setAttribute('aria-current', bool)
		this.indicator?.active(bool)
		if (!bool) return
		this.carousel.set(this.index);
	}

	getPosition() {
		return this.element.getBoundingClientRect().x
	}
}



class Carousel {
	constructor(element, options) {

		const defaultOptions = {
			carouselItemId: 'carousel-item-',
			carouselItemIndicatorId: 'carousel-item-indicator-',
			indicators: undefined,
			callback: undefined
		}

		this.element = element
		this.options = {...defaultOptions, ...options}
		this.childs = [...this.element.children]
		this.items = [...this.childs].map((element, index) => this.#createItem(element, index) );

		// check if this.options.indicators if a HTML element
		if (this.options.indicators instanceof HTMLElement) {
			this.options.indicators = this.options.indicators
		} else {
			this.options.indicators = undefined
		}


		if (this.options.callback) {
			this.element.addEventListener('slide', this.options.callback)
		  }
	}
	
	createSlideEvent() {
		this.event = new CustomEvent('slide', {
			detail: {
				currentItem: this.currentItem.element,
				nextItem: this.nextItem?.element,
				prevItem: this.prevItem?.element,
				isLast: this.isLast(),
				isFirst: this.isFirst()
			}
		})
	}


	#createItem(item, index) {
		return new CarouselItem(item, index, this)
	}

	set(n) {
		this.currentItemIndex = n
		this.nextItemIndex = n + 1
		this.prevItemIndex = n - 1;
		if (this.options.callback) {
			this.createSlideEvent()
			this.element.dispatchEvent(this.event)
		}
	}

	#scrollTo(item) {
		this.element.scrollLeft += item.getPosition()
	}

	get currentItem() {
		return this.items[this.currentItemIndex]
	}

	get nextItem() {
		return this.items[this.nextItemIndex]
	}

	get prevItem() {
		return this.items[this.prevItemIndex]
	}

	next() {
		if (this.isLast()) return
		this.#scrollTo(this.nextItem)
	}

	prev() {
		if (this.isFirst()) return
		this.#scrollTo(this.prevItem)
	}

	first() {
		this.#scrollTo(this.items[0])
	}

	last() {
		const lastItemIndex = this.items.length - 1
		this.#scrollTo(this.items[lastItemIndex])
	}

	go(n) {
		n -= 1
		if (n < 0) return this.first()
		if (n > this.items.length - 1) return this.last()
		this.#scrollTo(this.items[n])
	}
	
	isLast() {
		return this.currentItemIndex === this.items.length - 1
	}

	isFirst() {
		return this.currentItemIndex === 0
	}


}

