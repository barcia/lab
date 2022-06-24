# Screenreader
Hide an element but make it readable for a screen reader

CSS:
```css
.screen-reader {
	position: absolute;
	width: 1px;
	height: auto;
	padding: 0;
	margin: 0;
	border: 0;
	overflow: hidden;
	clip: rect(0 0 0 0);
	white-space: nowrap;
}
```

Scss:
```scss
@mixin screen-reader {
	position: absolute;
	width: 1px;
	height: auto;
	padding: 0;
	margin: 0;
	border: 0;
	overflow: hidden;
	clip: rect(0 0 0 0);
	white-space: nowrap;
}
```
