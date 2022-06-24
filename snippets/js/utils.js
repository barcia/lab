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
