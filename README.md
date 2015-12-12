# Motivation
Truncate an array of strings into a single string which contains as much strings as possible 
and still displays the number of hidden strings

## USE CASES
* Display selected items of a multi selection component in a limited space
* truncate a string and display the number of hidden words/chars

## TODO
* OPEN: minLength must be > nodes.moreSuffix+truncateString+minWordLength
* Display: 'N selected' instead? => still min chars! (digits + text.length) 

## CHANGELOG

| Version | Logs |
|:--|:--|
| 1.0.0 | 'Initial release' |

## build parameter

```
# install prerequisites and build `string-truncate-util` library
npm install

# test
npm test

# test-coverage
npm run-script test-coverage
```

## API
```javascript
/**
 * @param {Object} [options] - all options are optional
 * @param {Number} [options.maxLength=25] the maximal number of chars of the created string
 * @param {String} [options.truncateString="..."] the string that is used when truncating 
 * @param {Object} [options.nodes] options for truncateNodes (optional)
 * @param {String} [options.nodes.separator=", "] the string used to concate the strings of the array
 * @param {String} [options.nodes.minWordLength=3] if the lenght of the next string is bigger that this value the more string will be added immediately
 * @param {String} [options.nodes.moreSuffix=", %d more"] the string used to display hidden elements, must contain %d which will be replaced with the number of hidden elements
 * @param {String} [options.nodes.paddingChar="."] character used together with the number of hidden items to pad the string to maxLength, set to null to disable
 */
var truncateUtil = require('string-truncate-util');
var truncate = truncateUtil(options);
```

## usage
```javascript
var truncateUtil = require('string-truncate-util');
//set options 
var truncate = truncateUtil({maxLength: 15});
//use functions
truncate.string("Test this with a normal string");
truncate.arrayOfStrings(["Test this","with","an","array"]);
```

### truncate text
```javascript

truncate.string('hello world', 7);

// hell...
```