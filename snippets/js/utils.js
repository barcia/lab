export const isNull = x => x === null;
export const isUndefined = x => typeof x === 'undefined';
export const isBoolean = x => typeof x === 'boolean';
export const isNumber = x => typeof x === 'number';
export const isBigInt = x => typeof x === 'bigint';
export const isString = x => typeof x === 'string';
export const isFunction = x => typeof x === 'function';
export const isTrue = x => x === true;
export const isFalse = x => x === false;
export const hasValue = x => !isNull(x) && !isUndefined(x);
export const isValidEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
export const isArrowRightKey = ev => ev.key === 'ArrowRight' || ev.keyCode === 39;
export const isArrowLeftKey = ev => ev.key === 'ArrowLeft' || ev.keyCode === 37;
export const isArrowUpKey = ev => ev.key === 'ArrowUp' || ev.keyCode === 38;
export const isArrowDownKey = ev => ev.key === 'ArrowDown' || ev.keyCode === 40;
export const isEscKey = ev => ev.key === 'Escape' || ev.keyCode === 27;
