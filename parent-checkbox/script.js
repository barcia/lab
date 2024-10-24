/**
 * The possible values for the checkboxes group state
 * @readonly
 * @enum {string}
 */
const CHECKBOXES_GROUP_STATE = {
    EVERY: 'every',
    SOME: 'some',
    NONE: 'none'
}


/**
 * The possible values for the aria-checked attribute
 * @readonly
 * @enum {string}
 */
const ARIA_CHECKED_STATE = {
    TRUE: 'true',
    FALSE: 'false',
    MIXED: 'mixed'
}


/**
 * Get the state of the checkboxes
 * @param {HTMLInputElement[]} checkboxes 
 * @returns {CHECKBOXES_GROUP_STATE}
 */
const getCheckboxesGroupState = (checkboxes) => {
    if (checkboxes.every(checkbox => checkbox.checked)) return CHECKBOXES_GROUP_STATE.EVERY;
    if (checkboxes.some(checkbox => checkbox.checked)) return CHECKBOXES_GROUP_STATE.SOME;
    if (checkboxes.every(checkbox => !checkbox.checked)) return CHECKBOXES_GROUP_STATE.NONE;
}


/**
 * Set the aria-checked attribute of the checkbox
 * @param {HTMLInputElement} checkbox 
 * @param {ARIA_CHECKED_STATE} state 
 */
const setAriaChecked = (checkbox, state) => checkbox.setAttribute('aria-checked', state);


/**
 * Set the state of the checkbox
 * @param {HTMLInputElement} checkbox 
 * @param {ARIA_CHECKED_STATE} state 
 */
const setState = (checkbox, state) => {
    checkbox.checked = state === ARIA_CHECKED_STATE.TRUE;
    setAriaChecked(checkbox, state);
};


/**
 * Update the state of the parent checkbox
 * @param {HTMLInputElement} $parentCheckbox 
 * @param {HTMLInputElement[]} $childCheckboxes 
 */
const updateParentCheckbox = ($parentCheckbox, $childCheckboxes) => {
    switch (getCheckboxesGroupState($childCheckboxes)) {
        case CHECKBOXES_GROUP_STATE.EVERY: setState($parentCheckbox, ARIA_CHECKED_STATE.TRUE); break;
        case CHECKBOXES_GROUP_STATE.SOME: setState($parentCheckbox, ARIA_CHECKED_STATE.MIXED); break;
        case CHECKBOXES_GROUP_STATE.NONE: setState($parentCheckbox, ARIA_CHECKED_STATE.FALSE); break;
    }
}


/**
 * Handle group checkboxes
 */
const groupCheckboxes = () => {
    const $groupCheckbox = document.querySelectorAll('input[type="checkbox"][aria-controls]');

    $groupCheckbox.forEach($parentCheckbox => {
        const childCheckboxesIds = $parentCheckbox.getAttribute('aria-controls').split(',')
        const $childCheckboxes = childCheckboxesIds.map(id => document.getElementById(id.trim()));

        $parentCheckbox.addEventListener('change', () => {
            setAriaChecked($parentCheckbox, $parentCheckbox.checked);
            $childCheckboxes.forEach(checkbox => checkbox.checked = $parentCheckbox.checked);
        });

        $childCheckboxes.forEach($childCheckbox => {
            $childCheckbox.addEventListener('change', () => {
                updateParentCheckbox($parentCheckbox, $childCheckboxes);
            });
        });
    });
}



groupCheckboxes()

