# Pixel ratio

Scss:
```scss
// Media Queries for pixel ratio
// stylelint-disable media-feature-name-no-vendor-prefix
@mixin pixel-ratio($pixelratio) {
	@if $pixelratio == 1 {
		@media (-webkit-min-device-pixel-ratio: 1),
			(min-resolution: 96dpi) {
			@content;
		}
	}

	@if $pixelratio == 1.5 {
		@media (-webkit-min-device-pixel-ratio: 1.5),
			(min-resolution: 144dpi) {
			@content;
		}
	}

	@if $pixelratio == 2 {
		@media (-webkit-min-device-pixel-ratio: 2),
			(min-resolution: 192dpi) {
			@content;
		}
	}

	@if $pixelratio == 2.5 {
		@media (-webkit-min-device-pixel-ratio: 2.5),
			(min-resolution: 240dpi) {
			@content;
		}
	}

	@if $pixelratio == 3 {
		@media (-webkit-min-device-pixel-ratio: 3),
			(min-resolution: 288dpi) {
			@content;
		}
	}

	@if $pixelratio == 3.5 {
		@media (-webkit-min-device-pixel-ratio: 3.5),
			(min-resolution: 336dpi) {
			@content;
		}
	}

	@if $pixelratio == 4 {
		@media (-webkit-min-device-pixel-ratio: 4),
			(min-resolution: 384dpi) {
			@content;
		}
	}
}
