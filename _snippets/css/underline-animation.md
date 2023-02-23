# Underline animation
Mixin to create an animated underline effect when the text is hovered over

HTML:
```html
<div class="target">Hello world</div>
```

Scss:
```scss
@mixin underline-animation($axis, $color, $height, $time) {
	position: relative;
	display: inline-block;

	&::after {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: $height;
		background-color: $color;
		content: "";
		transition: transform $time ease-out;
		transform-origin: bottom left;

		@if $axis == X or $axis == x {
			transform: scaleX(0);
		}

		@else {
			transform: scaleY(0);
		}
	}

	&:hover::after {
		@if $axis == X or $axis == x {
			transform: scaleX(1);
		}

		@else {
			transform: scaleY(1);
		}
	}
}
```

```scss
.target{
	@include underline-animation(x, red, 2px, 0.3s);
}
```
