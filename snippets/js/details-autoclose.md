# Details autoclose
Autoclose `details` element when it has the `data-autoclose` or `data-autoclose="true"` attribute

HTML:
```html
<details>
    <summary>Dropdown</summary>
    <div>O meu elemento oculto</div>
</details>
```
```html
<details data-autoclose>
    <div>O meu elemento oculto</div>
</details>
```
```html
<details data-autoclose="true">
    <summary>Dropdown true</summary>
    <div>O meu elemento oculto</div>
</details>
```
```html
<details data-autoclose="false">
    <summary>Dropdown false</summary>
    <div>O meu elemento oculto</div>
</details>
```

JS:
```js
let selfClosingDetails = [...document.querySelectorAll('details[data-autoclose]')];
    selfClosingDetails = selfClosingDetails.filter(details => details.dataset.autoclose !== 'false');

window.addEventListener('click', (ev) => {
    selfClosingDetails.forEach(details => {
        if (! details.contains(ev.target)) {
            details.open = false
        }
    })
})
```


* https://github.com/zachleat/details-utils/blob/main/details-utils.js