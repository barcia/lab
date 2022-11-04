const getElementVisibility = (element) => {
	const viewportHeight = window.innerHeight;
	const elementHeight = element.getBoundingClientRect().height

	const topToTop = element.getBoundingClientRect().top
	const bottomToTop = element.getBoundingClientRect().bottom
	const topToBottom = viewportHeight - topToTop
	const bottomToBottom = viewportHeight - bottomToTop

	let visiblePercentage = undefined

	if (bottomToTop < 0 || topToBottom < 0) {
		visiblePercentage = 0
	}

	if (topToBottom >= 0 && bottomToBottom <= 0) {
		visiblePercentage = Math.round(topToBottom * 100 / elementHeight);
	}

	if (topToTop > 0 && bottomToBottom > 0) {
		visiblePercentage = 100
	}

	if (topToTop <= 0 && bottomToTop >= 0) {
		visiblePercentage = Math.round(bottomToTop * 100 / elementHeight);
	}

	const visiblePixels = Math.round(visiblePercentage * elementHeight / 100)

	const getPercentageViewportCovered = () => {
		const perc = Math.round(visiblePixels * 100 / viewportHeight)
		return perc >= 100 ? 100 : perc
	}

	return {
		visiblePixels,
		visiblePercentage,
		viewportCoveredPercentage: getPercentageViewportCovered()
	}
}

class VisibilityMonitor {
	constructor(elements) {
		this.elements = elements
		this.event = new Event('updateVisibilityMonitor')
		this.ticking = false
		this.data = this.#getcurrentVisibility()

		this.#eventListenerScroll()
		this.#eventListenerResize()
	}

	#eventListenerResize() {
		window.addEventListener('resize', () => {
			this.data = this.#getcurrentVisibility()
			window.dispatchEvent(this.event);
		})
	}

	#eventListenerScroll() {
		document.addEventListener('scroll', (e) => {
			if (!this.ticking) {
				window.requestAnimationFrame(() => {
					this.data = this.#getcurrentVisibility()
					this.ticking = false;
					window.dispatchEvent(this.event);
				});
	
				this.ticking = true;
			}
		});
	}

	#getcurrentVisibility() {
		return this.elements.map(element => getElementVisibility(element))
	}

	get() {
		return this.data
	}
}






