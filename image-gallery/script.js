const gallery = document.querySelector('#gallery');
let items = [...gallery.querySelectorAll('li')];

// const newOrder = (originalList, newFirstIndex) => {
// 	return [...originalList.slice(newFirstIndex), ...originalList.slice(0, newFirstIndex)];
// }

// items.forEach((item, index) => {

//   const assignEv = () => item.addEventListener('click', () => {
//     // Crear un nuevo array con el orden deseado
// 	const newItems = newOrder(items, index)
//     items = newItems;

//     // Limpiar la galería y agregar los elementos en el nuevo orden
//     gallery.innerHTML = '';
//     items.forEach((item) => gallery.appendChild(item));

//     // Actualizar la lista de items
//   });


//   assignEv()

// });


//Rotate items on click on each
items.forEach((item, index) => {
  const assignEv = () => item.addEventListener('click', () => {
	console.log(index);
	const newItems = [...items.slice(index), ...items.slice(0, index)];
	items = newItems;
	gallery.innerHTML = '';
	items.forEach((item) => gallery.appendChild(item));
  });

  assignEv();
});
