Tailwind V4 utility class to remove the marker from a summary item.

```css
@utility marker-none {
  list-style: none;
  &::-webkit-details-marker {
    display: none;
  }
}
```
