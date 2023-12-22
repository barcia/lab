const pagination = document.querySelector('.Pagination');
const [first, last] = [...pagination.querySelectorAll('a[data-pagination-type="pagination-global"]')];
const [prev, next] = [...pagination.querySelectorAll('a[data-pagination-type="pagination-relative"]')];
const pages = [...pagination.querySelectorAll('a[data-pagination-type="pagination-page"]')];


const currentPage = pages.findIndex(page => page.getAttribute('aria-current') === 'page');


if (currentPage) {
	const prevPage = pages[currentPage - 1];
	const nextPage = pages[currentPage + 1];

	if (prevPage) {
		prevPage.dataset.paginationData = 'prev';
	}
	if (nextPage) {
		nextPage.dataset.paginationData = 'next';
	}
}

const lastChunk = pages.slice(currentPage + 1);

const firstChunk = pages.slice(0, currentPage );
const firstChunckReversed = [...firstChunk].reverse();

const removableArray = [...firstChunckReversed, ...lastChunk];


// const paginationWidth = pagination.offsetWidth;
// const windowWidth = window.innerWidth;

// if (paginationWidth > windowWidth) {
// 	console.log('responsive');
// }

//resize event listener

// const removeLast = () => {
// 	const last = removableArray.pop();
// 	last.remove();
// }

// const handleResize = () => {
// 	const paginationWidth = pagination.offsetWidth;
// 	const windowWidth = window.innerWidth;

// 	if (paginationWidth > windowWidth) {
// 		removeLast();
// 	}


// }

// window.addEventListener('resize', () => {
// 	handleResize()
// })