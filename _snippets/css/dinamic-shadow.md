# Dinamic shadow

TODO:
- [] Add offsets to top and left properties

HTML:
```html
<div>Hello world</div>
```

Scss:
```scss
@use "sass:math";

/* offset-x | offset-y | blur-radius | spread | opacity */
@mixin dinamic-shadow(
	$offset-x: 0,
	$offset-y: 0,
	$blur-radius: 20px,
	$spread: 110%,
	$opacity: 0.5,
	) {
	position: relative;
	&::after {
		position: absolute;
		top: -($spread - 100) / 2;
		left: -($spread - 100) / 2;
		z-index: -1;
		width: $spread;
		height: $spread;
		background: inherit;
		content: "";
		opacity: $opacity;
		filter: blur($blur-radius);
	}
}
```

Scss:
```scss
div {
	width: 400px;
	height: 300px;
	background-color: red;
	margin-left: 100px;
	margin-top: 100px;

	@include dinamic-shadow;
}
```
