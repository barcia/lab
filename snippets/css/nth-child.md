# NTH Child

Scss:
```scss
// The *n* child from first
@mixin child($number) {
	&:nth-child(#{$number}) {
		@content;
	}
}



// The *n* child from last
@mixin child--inv($number) {
	&:nth-last-child(#{$number}) {
		@content;
	}
}



// All except *n*
@mixin except-child($number) {
	&:not(:nth-child(#{$number})) {
		@content;
	}
}



// All except *n* form last
@mixin except-child--inv($number) {
	&:not(:nth-last-child(#{$number})) {
		@content;
	}
}



// Even
@mixin even {
	&:nth-child(even) {
		@content;
	}
}



// Odd
@mixin odd {
	&:nth-child(odd) {
		@content;
	}
}



// Each $number
@mixin each($number) {
	&:nth-child(#{$number}n) {
		@content;
	}
}



// All from first to $number
@mixin first-to($number) {
	&:nth-child(-n + #{$number}) {
		@content;
	}
}



// All from the last to $number
@mixin last-to($num) {
	&:nth-last-child(-n + #{$num}) {
		@content;
	}
}



// All from de $number to forward
@mixin since($number) {
	&:nth-child(n + #{$number + 1}) {
		@content;
	}
}



// Beginning at last, all from the $number to forward
@mixin since--inv($number) {
	&:nth-last-child(n + #{$number + 1}) {
		@content;
	}
}



// All between $first and $last
@mixin child-between($first, $last) {
	&:nth-child(n + #{$first}):nth-child(-n + #{$last}) {
		@content;
	}
}



// Child z-index
@mixin child-zindex($items, $zindex: 0) {
	@for $i from 1 through $items {
		&:nth-child(#{$i}) {
			z-index: $i;
		}
	}
}
```
