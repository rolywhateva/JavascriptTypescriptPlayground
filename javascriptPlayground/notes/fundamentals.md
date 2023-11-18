# The script tag 
- used to refer to scripts (either from a library that's in a CDN, or a local javascript file ), or have the javascript directly in the html code (but usually it's not)
- placed in the header of a html file, or at the end if you need  access to html elememnts (or just use defer)
-  the benefit of placing the script into a file is that if multiple pages refer to it then the browser will cache it (reduces traffic and makes the pages faster)
- if the script tag contains script but refers to file, the content of the tag is ignored and the javascript in the file is executed.

# Code structure 
- Usually, statements end with ";" but a new line can mean a ";", so the ";" can be ommmited  ( [automatic semicolon insertion](https://tc39.es/ecma262/#sec-automatic-semicolon-insertion))
- The recommended way is to just put ";" everywhere, for fuck's sake.
- Comments: can be single line, multiline or documentaiton comments. Nested comments are not supported

# "use strict" 
- Jasvascript evolved without compatibility issues, old functionality didn't change when new functionality was addded, existing code never broke
- This change when ES5 appeared, it added new features and modified existing ones, so to keep the old code working, most  of these changes are off by the default, can be turned on by using "use strict" : 
    - it  needs to be first thing in the file (except comments), otherwhise it won't be activated, it can appear at the top of a function, but then it will only affect the function 
    - it can't be turned off 
    -  using  modern features (classes, imports etc.) turn it on automatically, then "use strict" can be ommited. 


# Variables 
Var,let or const 
let - only exists in its scope 
var - exists in its scope and child scopes
const - like let, but its value can't be changed 
