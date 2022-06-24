# Text gradient
Mixin for create simple text gradients

HTML:
```html
<h1 class="target">Hello world</h1>
```

Scss:
```scss
@mixin text-gradient($colors, $direction: 0deg) {
	background: linear-gradient($direction, $colors);
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
}
```

Scss:
```scss
.target {
	@include text-gradient((blue, red, yellow));
}
```
