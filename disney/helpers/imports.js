
// The es6 standard allows us to import javascript code from other scripts

// The braces allow us to import several variables / function / class / components exported by the script target by the keyword from
// Note that the call order does not need to correspond to the order of the exports, we can also decide to import the data of our choice
import { uselessCond, datas } from './exports.js';


// We can do without braces in the case where the script has a default export
import showAlert from './exports.js';
