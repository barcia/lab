# Throttle

```js
export default throttle = (fn, delay) => {
    let timeout = undefined;

    return (...args) => {
        if (!timeout) {
            timeout = setTimeout( () => {
                fn(...args);
                timeout = undefined;
            }, delay)
        }
    }
}
```
