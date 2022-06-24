https://css-tricks.com/how-to-animate-the-details-element-using-waapi/

## Topics
* Aunque esté oculto. Al ser un elemento HTML, desde JS sabemos siempre su alto.


openByIndex:

openAll:

## Details
* [Demo](https://barcia.github.io/lab/details/details.html)
* After summary, should have only one parent container

### Extra features
* Animated open and close
* Open focus element on right arrow press
* Close focus element on left arrow press
* Close focus element on Esc arrow press

### Methods
* `open()`
* `close()`
* `togle()`
* `focus()`
* *getter* state
* *setter* state(state)

### Events
* `open`
* `close`




## DetailsGroup
* [Demo](https://barcia.github.io/lab/details/detailsGroup.html)
* Details group container with `.DetailsGroup`class.

### Extra features
- Move up and down with keyboard. Keep current status on move.
- Keep opened only one Detail (configurable)

### Options
* `onlyShowOne` - If true, keep only one Details open.

### Methods
* `openByIndex()` -Oopen some by index array. If is enable `onlyShowOne`, only open the first of array.
* `closeByIndex()`
* `openAll()` - Open all. Is is enable `onlyShowOne`, only open the first.
* `closeAll()`
