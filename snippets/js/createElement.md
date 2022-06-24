# Create element

```js
import { isString, hasValue } from './utils.js'

export default ({ element, children, classes, id, styles, attributes, eventListeners }) => {

    if (isString(element)) {
        const item = document.createElement(element);

        if (hasValue(children)) {
            if (isString(children)) {
                item.innerHTML = children;
            } else {
                children.forEach( child => item.appendChild(child))
            }
        }

        if (hasValue(classes)) classes.forEach( eachClass => item.classList.add(eachClass) );

        if (hasValue(id)) item.id = id;

        if (hasValue(styles)) Object.keys(styles).forEach( key => item.style[key] = styles[key] )

        if (hasValue(attributes)) attributes.forEach( ({name, value}) => item.setAttribute(name, value) )

        if (hasValue(eventListeners)) eventListeners.forEach( ({type, listener}) => item.addEventListener(type, listener) )

        return item
    }

    return false
}
```

```js
const myElement = createElement(
    {
        element: 'div',
        children: [
            para2,
            para
        ],
        classes: ['primary', 'secondClass'],
        id: 'myItem',
        styles: {
            backgroundColor: 'lightsalmon',
            borderRadius: '8px',
            padding: '4px'
        },
        attributes: [
            {
                name: 'aria-label',
                value: 'My box',
            },
        ],
        eventListeners: [
            {
                type: 'click',
                listener: callback
            }
        ]
    }
)
```
