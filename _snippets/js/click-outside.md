# Click outside an element

```js
document.addEventListener('click', (ev) => {
	if (!element.contains(ev.target)) {
		//...
	}
});
```