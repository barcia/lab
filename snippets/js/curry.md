# Curry

```js
export default curry = fn => {
    const numberOfArgs = fn.length;
    const args = [];

    return function curriedFn(...fnArgs) {
        args.push(...fnArgs);

        if (args.length >= numberOfArgs) {
            return fn(...args);
        }

        return curriedFn;
    }
}
```
