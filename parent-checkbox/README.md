# Parent Checkbox
This component implements checkbox groups with tri-state functionality.

- https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/examples/checkbox-mixed/
- [demo](https://barcia.github.io/lab/parent-checkbox/index.html)

## Usage

1. HTML Structure:
   - Use the `aria-controls` attribute on the parent checkbox to list the IDs of related checkboxes.

2. Functionality:
   - The parent checkbox controls all child checkboxes.
   - Possible states of the parent checkbox:
     - Checked: All children are checked.
     - Unchecked: No children are checked.
     - Indeterminate: Some children are checked.

3. Example:
```html
    <ul>
        <li>
            <label><input type="checkbox" aria-controls="cb1, cb2, cb3, cb4"> Group 1</label>
        </li>
        <li>
            <ul>
                <li>
                    <label><input type="checkbox" id="cb1"> Checkbox 1</label>
                </li>
                <li>
                    <label><input type="checkbox" id="cb2"> Checkbox 2</label>
                </li>
                <li>
                    <label><input type="checkbox" id="cb3"> Checkbox 3</label>
                </li>
                <li>
                    <label><input type="checkbox" id="cb4"> Checkbox 4</label>
                </li>
            </ul>
        </li>
    </ul>
```
