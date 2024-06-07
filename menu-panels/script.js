const handleMenu = () => {
	const menu = document.querySelector('#mymenu');
	const details = menu.querySelectorAll('details');

	for (const detail of details) {
		const backButton = detail.querySelector('.submenu .backButton');
		const subMenu = detail.querySelector('.submenu');

		console.log(subMenu);

		backButton.addEventListener('click', () => {
			// subMenu.addEventListener('animationend', () => {
			// 	// subMenu.classList.remove('is-quitting');
			// 	detail.open = false;
			// 	console.log('animationend');
			// }, { once: true });
			// subMenu.classList.add('is-quitting');
			// detail.open = false;

		});
	}

}


handleMenu();