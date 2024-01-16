# Modules

A module has :
- imports / dependencies
- code 
- exports 


Modules are useful for:
- reusability (you can put modules into packages)
- composability (modules can use  modules, increases deletability of the code)
- leverage (there are many modules already)
- isolation (multiple people can work  without bothering each other)
- organization (modules are a natural separation point, help avoid naming collisions)

Modules are used to separate. 

It all started with IIFE  (immdiately invoked function expression)

```
(function () {})();
```

The upside is that IIFE doesn't polute the window object but  the order of the scripts still matter.


## Exporting



## Importing


## CommonJS
- defines a module format to solve js scope issues by making sure each module is executed in its own namespace. This is achieved by forcing modules to explictily export those variables  it wants to expose to the "universe", and also by defining those other modules required to properly work.
- common js is baked into node 
- not so great of a soulution for browsers because it's loaded synchronously (which in browser it means that javascript being single threaded,  the callstack will freeze)

## Module bundler
- this is to combat the downsides of common js. It examines the code base (imports and exports) and then intelegently bundles them together into a single file
- an example of bundler is webpack



# ES Modules
- Supports async
- "import" 
- "export" 
- import everything 
    ```
    import * as utils from './utils' 
    ```


- name import
    ```
    import {first} from './utils'
    ```

- default  export 
   ```
    default export function whatever ...
   ```


