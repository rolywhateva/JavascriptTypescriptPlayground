# The problem 
- Javascript is ever-evolving and browsers sometimes take years catching up adding the new features. If we use javascript that the browsers don't support yet, then we risk our apps not running on those browsers. Sometimes simply waiting for the browsers to fully support them isn't a reliable option, and it's not even a guarantee that the users have the latest browser version anyway.

- Tools like Babel (https://babeljs.io/) compile javascript into javascript that older browsers can understand, however, it   doesn't work on everything: 
this
```
const getProfile = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then(({ data }) => ({
      name: data.name,
      location: data.location,
      company: data.company,
      blog: data.blog.includes("https") ? data.blog : null,
    }))
    .catch((e) => console.warn(e));
};
```

gets turned into 
```
var getProfile = function getProfile(username) {
  return fetch("https://api.github.com/users/" + username)
    .then(function (response) {
      return response.json();
    })
    .then(function (_ref) {
      var data = _ref.data;
      return {
        name: data.name,
        location: data.location,
        company: data.company,
        blog: data.blog.includes("https") ? data.blog : null,
      };
    })
    .catch(function (e) {
      return console.warn(e);
    });
};
```
Arrow functions and template strings do get turned into ES5 equivalents, but for example includes is left out.
That means, that for certain features,  we need to do something different, that is polyfilling.

# Compiling vs polyfilling
Compililing can only change the syntax of the code to an older version, it can't add new methods or change existing ones:
- Destructuring, classes, and arrow functions can be compiled, because they can be  rewritten with the old syntax, but things like fetch, promises and string.includes need to be polyfilled

# Features that need to compiled
Arrow functions
Async functions
Async generator functions
Block scoping
Block scoped functions
Classes
Class properties
Computed property names
Constants
Decorators
Default parameters
Destructuring
Do expressions
Exponentiation operator
For-of
Function bind
Generators
Modules
Module export extensions
New literals
Object rest/spread
Property method assignment
Property name shorthand
Rest parameters
Spread
Sticky regex
Template literals
Trailing function commas
Type annotations
Unicode regex

# Features that need to be polyfilled:
ArrayBuffer
Array.from
Array.of
Array#copyWithin
Array#fill
Array#find
Array#findIndex
Function#name
Map
Math.acosh
Math.hypot
Math.imul
Number.isNaN
Number.isInteger
Object.assign
Object.getOwnPropertyDescriptors
Object.is
Object.entries
Object.values
Object.setPrototypeOf
Promise
Reflect
RegExp#flags
Set
String#codePointAt
String#endsWith
String.fromCodePoint
String#includes
String.raw
String#repeat
String#startsWith
String#padStart
String#padEnd
Symbol
WeakMap
WeakSet


