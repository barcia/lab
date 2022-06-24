# Background gradient animated
Mixin for create animated gradients

HTML:
```html
<div class="target">Hello world</div>
```

Scss:
```scss
// Example: @include background-gradient--animated((blue, red, yellow), 10s);
@mixin background-gradient--animated($colors, $time) {
	background: linear-gradient(90deg, $colors);
	background-size: 400%;
	animation: gradientAnimation $time ease-in-out infinite;

	@at-root {
		@keyframes gradientAnimation {
			0% { background-position: left; }
			50% { background-position: right; }
			100% { background-position: left; }
		}
	}
}
```

```scss
.target {
	@include background-gradient--animated((blue, red, yellow), 10s);
}
```
