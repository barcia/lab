# useLoclStorage

```ts
import { useState, useEffect } from 'react'

const getLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : null
}

const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    const [value, setValue] = useState(getLocalStorage(key) || initialValue)
    useEffect(setLocalStorage(key, value),[key, value])

    return [value, setValue]
}

export { useLocalStorage }
```