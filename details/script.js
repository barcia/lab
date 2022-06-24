const isArrowRightKey = ev => ev.key === 'ArrowRight' || ev.keyCode === 39;
const isArrowLeftKey = ev => ev.key === 'ArrowLeft' || ev.keyCode === 37;
const isArrowUpKey = ev => ev.key === 'ArrowUp' || ev.keyCode === 38;
const isArrowDownKey = ev => ev.key === 'ArrowDown' || ev.keyCode === 40;
const isEscKey = ev => ev.key === 'Escape' || ev.keyCode === 27;

class Details {
	// The default constructor for each accordion
	constructor(element) {
		// Store the <details> element
		this.element = element;
		// Store the <summary> element
		this.summary = element.querySelector('summary');
		// Store the sibling element
		this.content = this.summary.nextElementSibling;

		this.animationSpeedMs = parseInt(getComputedStyle(this.element).getPropertyValue( '--animationSpeedMs' ))

		// Store the animation object (so we can cancel it, if needed)
		this.animation = null;
		// Store if the element is closing
		this.isClosing = false;
		// Store if the element is expanding
		this.isExpanding = false;
		// Detect user clicks on the summary element
		this.summary.addEventListener('click', (ev) => this.#onClick(ev));
		this.summary.addEventListener("keydown", (ev) => {
			if (isArrowRightKey(ev)) {
				!this.state && this.open()
			}
			if (isArrowLeftKey(ev)) {
				this.state && this.close()
			}
			if (isEscKey(ev)) {
				this.state && this.close()
			}
		})

		 this.openEvent = new Event('open');
		 this.closeEvent = new Event('close');
	}


	// Callback when the shrink or expand animations are done
	#onAnimationFinish(state) {
		// Set the open attribute based on the parameter
		this.state = state;
		// Clear the stored animation
		this.animation = null;
		// Reset isClosing & isExpanding
		this.isClosing = false;
		this.isExpanding = false;
		// Remove the overflow hidden and the fixed height
		this.element.style.height = this.element.style.overflow = '';
	}

	#onClick(ev) {
		ev.preventDefault();
		this.toggle();
	}


	// Function called to open the element after click
	open() {
		// Add an overflow on the <details> to avoid content overflowing
		this.element.style.overflow = 'hidden';

		// Get the current fixed height of the element
		const startHeight = `${this.element.offsetHeight}px`;
		// Calculate the open height of the element (summary height + content height)
		const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

		// Apply a fixed height on the element
		this.element.style.height = startHeight;
		// Force the [open] attribute on the details element
		this.state = true;
		// Wait for the next frame to call the expand function
		this.element.dispatchEvent(this.openEvent);
		window.requestAnimationFrame(() => {

			// Set the element as "being expanding"
			this.isExpanding = true;
			// this.element.classList.add('is-expanding');

			// If there is already an animation running
			if (this.animation) {
				// Cancel the current animation
				this.animation.cancel();
			}

			// Start a WAAPI animation
			this.animation = this.element.animate({
				height: [startHeight, endHeight]
			}, {
				duration: this.animationSpeedMs,
				easing: 'ease'
			});
			console.log(this.animation);
			// When the animation is complete, call #onAnimationFinish()
			this.animation.onfinish = () => {
				this.#onAnimationFinish(true)
			};
			// If the animation is cancelled, isExpanding variable is set to false
			this.animation.oncancel = () => {
				this.isExpanding = false
			};
		});
	}

	// Function called to close the content with an animation
	close() {

		  // Set the element as "being closed"
		  this.isClosing = true;
		  this.element.classList.add('is-closing');

		  // Add an overflow on the <details> to avoid content overflowing
		  this.element.style.overflow = 'hidden';

		  // Store the current height of the element
		  const startHeight = `${this.element.offsetHeight}px`;
		  // Calculate the height of the summary
		  const endHeight = `${this.summary.offsetHeight}px`;
		  window.requestAnimationFrame(() => {
		  // If there is already an animation running
		  if (this.animation) {
			// Cancel the current animation
			this.animation.cancel();
		  }

		  this.element.dispatchEvent(this.closeEvent);

		  // Start a WAAPI animation
		  this.animation = this.element.animate({
			// Set the keyframes from the startHeight to endHeight
			height: [startHeight, endHeight]
		  }, {
			duration: this.animationSpeedMs,
			easing: 'ease'
		  });

		  // When the animation is complete, call #onAnimationFinish()
		  this.animation.onfinish = () => {
			  this.#onAnimationFinish(false);
			  this.element.classList.remove('is-closing');
			}
		  // If the animation is cancelled, isClosing variable is set to false
		  this.animation.oncancel = () => {
			  this.isClosing = false;
			  this.element.classList.remove('is-closing');
			}
		});
	}

	toggle() {
		  // Check if the element is being closed or is already closed
		  if (this.isClosing || !this.state) {
			this.open();
		  // Check if the element is being openned or is already open
		  } else if (this.isExpanding || this.state) {
			this.close();
		  }
	}

	focus() {
		this.summary.focus();
	}

	get state() {
		return this.element.open;
	}
	set state(isOpen) {
		this.element.open = isOpen;
	}
}


class DetailsGroup {
	constructor(element, onlyOneOpen = false) {
		this.element = element;
		this.items = Array.from(this.element.querySelectorAll('details')).map(item => new Details(item))
		this.onlyOneOpen = onlyOneOpen
		this.currentItem = undefined
		this.currentItemIndex = undefined

		this.items.forEach(item => {
			item.element.addEventListener('open', (ev) => {
				this.onlyOneOpen && this.#closeOthers(item);
			})
			item.element.addEventListener('close', (ev) => {
			})
			item.summary.addEventListener('focus', (ev) => {
				this.currentItem = item;
				this.currentItemIndex = this.items.indexOf(item);
			})
		})

		this.element.addEventListener("keydown", (ev) => {
			let nextItem;

			if (isArrowDownKey(ev)) {
				if (this.currentItemIndex > this.items.length - 2) {
					nextItem = this.items[0];
				} else {
					nextItem = this.items[this.currentItemIndex + 1]
				}
				if (this.currentItem.state && this.onlyOneOpen) {
					nextItem.open()
				}
				nextItem.focus()
			}
			if (isArrowUpKey(ev)) {
				if (this.currentItemIndex === 0) {
					nextItem = this.items[this.items.length - 1];
				} else {
					nextItem = this.items[this.currentItemIndex - 1]
				}
				if (this.currentItem.state && this.onlyOneOpen) {
					nextItem.open()
				}
				nextItem.focus()
			}
		})
	}

	#closeOthers(current) {
		this.items.filter(item => item !== current).forEach(item => item.close());
	}

	openByIndex(index) {
		if (typeof index === 'number') {
			this.items[index - 1].open();
		}
		else if (typeof Array.isArray(index) && index.every(el => typeof el === 'number')) {
			this.onlyOneOpen
			? this.items[index[0] - 1].open()
			: index.forEach(el => this.items[el - 1].open());
		} else {
			throw new Error('Index must be a number or an array of numbers');
		}
	}

	closeByIndex(index) {
		if (typeof index === 'number') {
			this.items[index - 1].close();
		}
		else if (typeof Array.isArray(index) && index.every(el => typeof el === 'number')) {
			index.forEach(el => this.items[el - 1].close());
		} else {
			throw new Error('Index must be a number or an array of numbers');
		}
	}

	openAll() {
		this.onlyOneOpen
		? this.items[0].open()
		: this.items.forEach(el => el.open());
	}

	closeAll() {
		this.items.forEach(el => el.close());
	}
}
