/**
 * Handles the dropdown menu behavior.
 * @param {Object} options - The options for the dropdown menu.
 * @param {HTMLElement} options.menu - The menu element.
 * @param {boolean} [options.onHover=true] - Whether to open the details on hover.
 */
const handleDropdownMenu = ({ menu, onHover = true }) => {
	const allDetails = menu.querySelectorAll('details');

	allDetails.forEach((details) => {
		const summary = details.querySelector('summary');

		if (onHover) {
			summary.addEventListener('mouseenter', () => details.open = true);
			details.addEventListener('mouseleave', () => details.open = false);
		}

		document.addEventListener('click', (e) => {
			if (!details.contains(e.target)) {
				details.open = false;
			}
		});
	});
}



const menu = document.querySelector('#mainMenu');
handleDropdownMenu({ menu, onHover: true });
