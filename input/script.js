// TODO: Fix operations with float numbers

class Stepper {
	constructor(stepper) {
		this.input = stepper.querySelector('#input')
		this.decrementBtn = stepper.querySelector('#decrement')
		this.incrementBtn = stepper.querySelector('#increment')
		this.min = this.input.min.length ? Number(this.input.min) : undefined
		this.max = this.input.max.length ? Number(this.input.max) : undefined
		this.step = this.input.step.length ? Number(this.input.step) : 1
		this.initialValue = this.input.value.length ? Number(this.input.value) : undefined
		this.initialValueNormalized = this.initialValue / this.step
		this.motionDelayMs = 500
		this.motionIntervalMs = 50

		this.#init()
	}

	#init() {
		this.decrementBtn.addEventListener('mousedown', this.#handleDecrement.bind(this))
		this.decrementBtn.addEventListener('mouseup', this.#stopDecrement.bind(this))
		this.decrementBtn.addEventListener('mouseleave', this.#stopDecrement.bind(this))
		this.incrementBtn.addEventListener('mousedown', this.#handleIncrement.bind(this))
		this.incrementBtn.addEventListener('mouseup', this.#stopIncrement.bind(this))
		this.incrementBtn.addEventListener('mouseleave', this.#stopIncrement.bind(this))
	}

	#handleDecrement() {
		this.decrement()
		this.decrementTimeout = setTimeout(() => {
			this.decrementInterval = setInterval(() => {
				this.decrement()
			}, this.motionIntervalMs);
		}, this.motionDelayMs);
	}

	#stopDecrement() {
		clearTimeout(this.decrementTimeout)
		clearInterval(this.decrementInterval)
	}

	#handleIncrement() {
		this.increment()
		this.incrementTimeout = setTimeout(() => {
			this.incrementInterval = setInterval(() => {
				this.increment()
			}, this.motionIntervalMs);
		}, this.motionDelayMs);
	}

	#stopIncrement() {
		clearTimeout(this.incrementTimeout)
		clearInterval(this.incrementInterval)
	}

	decrement() {
		let currentValue = Number(this.input.value) || 0
		if (this.min === undefined || currentValue > this.min) {
			this.input.value = currentValue - this.step
		}
	}

	increment() {
		let currentValue = Number(this.input.value) || 0
		if (this.max === undefined || currentValue < this.max) {
			this.input.value = currentValue + this.step
		}
	}
}




const steppers = document.querySelectorAll('.Stepper')

steppers.forEach(stepper => new Stepper(stepper))
