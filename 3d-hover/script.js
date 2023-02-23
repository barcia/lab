const image = document.querySelector('#image')
const height = image.clientHeight
const width = image.clientWidth

const tilt = (el, x, y) => {
	const transforms = `
		perspective(700px)
		scale(1.05)
		rotateX(${x}deg)
		rotateY(${y}deg)
	`
	el.style.transform = transforms
}

const resetTilt = (el) => {
	const transforms = `
		perspective(500px)
		scale(1)
		rotateX(0)
		rotateY(0)
	`
	el.style.transform = transforms
}

image.addEventListener('mousemove', ev => {
	const { layerX, layerY } = ev

	const yRotation = (
		( layerX - width / 2 ) / width
	) * 20

	const xRotation = (
		( layerY - height / 2 ) / height
	) * 20

	window.requestAnimationFrame(
		() => tilt(image, xRotation, yRotation)

	)
})


image.addEventListener('mouseout', ev => {
	window.requestAnimationFrame(
		() => resetTilt(image)
	)
})