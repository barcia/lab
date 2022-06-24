# Color scheme
Set light, dark or system color scheme preferences

HTML:
```html
<input type="radio" id="cslight" name="colorscheme" value="light">
<label for="cslight">Light</label>

<input type="radio" id="csauto" name="colorscheme" value="auto" checked>
<label for="csauto">Auto</label>

<input type="radio" id="csdark" name="colorscheme" value="dark">
<label for="csdark">Dark</label>
```

JS:
```js
const getUserColorScheme = options => {
    return options.find(opt => opt.checked)?.value;
}

const getSystemColorScheme = () => {
    return window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light' : undefined;
}

const setColorScheme = value => {
    let colorScheme = value === 'auto' ? value = getSystemColorScheme() : value;
    colorScheme = value === undefined ? 'light' : value;
    document.documentElement.setAttribute('data-colorscheme', colorScheme);
}



// Get all avaiable options
const inputs = [...document.querySelectorAll('input[name="colorscheme"]')];

// Get default select option, if exists
setColorScheme(getUserColorScheme(inputs))

// Update when the user changes the color scheme
inputs.forEach(input => {
    input.addEventListener('change', (event) => setColorScheme(event.target.value));
})
```
