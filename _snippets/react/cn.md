## cn() 

The `cn()` function is a utility that combines [clsx](https://github.com/lukeed/clsx) and [tailwind-merge](https://github.com/dcastil/tailwind-merge) for efficient CSS class name handling.

### Key Features

- Combines multiple classes using `clsx`
- Resolves Tailwind class conflicts using `tailwind-merge`
- Supports various input formats (strings, objects, arrays)

### Usage


```ts
/**
 * Utility function that combines clsx and tailwind-merge for efficient class name handling
 * 
 * This function takes any number of class value arguments and:
 * 1. Combines them using clsx to handle different class formats
 * 2. Merges Tailwind CSS classes intelligently using tailwind-merge to avoid conflicts
 * 
 * @param inputs - Any number of class values (strings, objects, arrays etc)
 * @returns Merged and optimized class string
 * 
 * @example
 * // Basic usage with strings
 * cn('px-2', 'py-1', 'bg-red-500') 
 * // => 'px-2 py-1 bg-red-500'
 * 
 * @example
 * // With conditional classes
 * cn('px-2', {
 *   'bg-blue-500': isActive,
 *   'bg-gray-500': !isActive
 * })
 * 
 * @example
 * // Handles conflicting Tailwind classes
 * cn('px-2 py-1', 'px-4') 
 * // => 'py-1 px-4' (px-4 overrides px-2)
 */
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

