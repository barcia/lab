const handleMenu = () => {
	const menu = document.querySelector('#mymenu');
	const details = menu.querySelectorAll('details');

	for (const detail of details) {
		const backButton = detail.querySelector('.submenu .backButton');

		backButton.addEventListener('click', () => {
			detail.open = false;
		});
	}

}


handleMenu();