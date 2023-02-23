# Z-Indez
z-indez maps for better management

Scss:
```scss
$z-index: (
	"navbar": 100,
	"sidebar": 110,
	"modal": 120
) !default;

@function elevation($key) {
	@if map-has-key($z-index, $key) {
		@return map-get($z-index, $key);
	}

	@else {
		@error "Undefined z-index: '$key'.";
	}
}
```

Scss:
```scss
nav {
	z-index: elevation(navbar)
}
```
