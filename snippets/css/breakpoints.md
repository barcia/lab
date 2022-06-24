# Breakpoints
Breakpoints map for easy use

Scss:
```scss
@use 'sass:map';
@use 'sass:list';

$breakpoints: (
	"small": 500px,
	"medium": 960px,
	"large": 1344px,
	"extralarge": 1920px,
) !default;

// Can use $breakpoint name that exists in the $breakpoints map or a custom breakpoint
// From $breakpoint to up
@mixin from($arg) {
	$value: map.get(token.$breakpoints, $arg);

	@if ($value == null) { $value: $arg; }

	@media (min-width: $value) {
		@content;
	}
}



// From $breakpoint to down
@mixin until($arg) {
	$value: map.get(token.$breakpoints, $arg);

	@if $value == null { $value: $arg; }

	@media (max-width: $value - 1) {
		@content;
	}
}


// Only in this size
@mixin only($arg) {
	$keys: map.keys(token.$breakpoints);
	$values: map.values(token.$breakpoints);
	$length: list.length($values);

	$index: list.index($keys, $arg);
	$value: list.nth($values, $index);

	@if $index < $length {
		$next-value: list.nth($values, ($index + 1));
	}

	@if ($index == 1) {
		@media (max-width: $value - 1) {
			@content;
		}
	}

	@else if ($next-value) {
		@media (min-width: $value) and (max-width: $next-value - 1) {
			@content;
		}
	}

	@else {
		@media (min-width: $value) {
			@content;
		}
	}
}



// Between $breakpoint1 and breakpoint2
@mixin between($arg1, $arg2) {
	$value1: map.get(token.$breakpoints, $arg1);
	$value2: map.get(token.$breakpoints, $arg2);

	@if $value1 == null { $value1: $arg1; }

	@if $value2 == null { $value2: $arg2; }

	@media (min-width: $value1) and (max-width: $value2 - 1) {
		@content;
	}
}
```

Scss:
```scss
div {
	background-color red;

	@include from(medium) {
		background-color blue;
	}
}
