const throttle = (fn, delay) => {
    let timeout = undefined;

    return (...args) => {
        if (!timeout) {
            timeout = setTimeout( () => {
                fn(...args);
                timeout = undefined;
            }, delay)
        }
    }
}


/**
 * Creates a Marquee instance.
 * @class
 * @param {HTMLElement} element - The element to apply the marquee effect.
 * @param {number} [speed=50] - The speed of the marquee effect.
 */
class Marquee {
	constructor(element, speed = 50) {
		this.element = element
		this.elementClone = this.element.cloneNode(true)
		this.slider = this.element.firstElementChild
		this.content = Array.from(this.slider.children)
		this.elementWidth = this.element.getBoundingClientRect().width;
		this.sliderWidth = this.slider.getBoundingClientRect().width;
		this.speed = speed;

		this.#validate() && this.#init()
	}

	#validate() {
		if (this.element.children.length > 1) {
			console.error('Marquee element must have only ONE direct children');
			return false
		}

		return true;
	}

	#setTranslateX() {
		this.element.style.setProperty('--marquee-translateX', `-${this.sliderWidth}px`);
	}

	#setSpeed() {
		const unitSpeed = window.innerWidth / this.speed
		this.element.style.setProperty('--marquee-animation-duration', `${unitSpeed / (this.elementWidth / this.sliderWidth)}s`);
	}

	#cloneContent() {
		for (let index = 0; index < Math.ceil(this.elementWidth / this.sliderWidth); index++) {
			for (const item of this.content) {
				const clone = item.cloneNode(true)
				clone.ariaHidden = true
				this.slider.appendChild(clone)
			}
		}
	}

	#eventListenerResize() {
		window.addEventListener('resize', throttle(() => {
			this.reset();
		}, 10), { once: true });
	}

	#init() {
		this.#setTranslateX()
		this.#setSpeed()
		this.#cloneContent()
		this.#eventListenerResize()
		this.play()
	}

	reset() {
		this.element.after(this.elementClone)
		this.element.remove()
		return new Marquee(this.elementClone, this.speed)
	}

	pause() {
		this.slider.style.animationPlayState = 'paused'
	}

	play() {
		this.slider.style.animationPlayState = 'running'
	}
}
