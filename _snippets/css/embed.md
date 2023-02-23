# Embed
Full width embed

HTML:
```html
<div class="Embed">
    <iframe src="https://www.youtube.com/embed/OxJpZtp2ItE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

CSS:
```css
.Embed {
	width: 100%;

	> * {
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
	}
}
```
