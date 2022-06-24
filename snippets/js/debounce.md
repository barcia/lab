# Debounce

```js
export default debounce = (fn, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}
```
