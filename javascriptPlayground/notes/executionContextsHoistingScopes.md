# Execution contexts
- they allow  the javascript engine to manage the complexity of the code and **interpret** it.



## Global execution context 
- the first execution context, it runs the entirety of the program
- At first, it will consist of :
    - a global object, which is equal to : 
        - window : if we are in the DOM
        - global: if we are in Node
    - this : which  references the global object
- Eact execution context has two phases: 
    - creation
    - execution
### Creation phase 
In the creation phase, the JS engine will : 
- create a global object
- create an object called this
- set up memory space for variables and functions
- assign variable declarations a default value of "undefined" while placing any function declarations in memory.

(_**Note**_: at this phase we only now about the variables, not the actual values they were assigned in the code, those assignations  stay where they are - it's easier to think about it this way imo)

### Execution phase 
- Only now javascript starts actually executing the code line and by line, and will assign the actual values of the vars when it  reaches their assignments.


To see the clear difference,  play around with this code : 
```
console.log("name: ", name);
console.log("handle: ", handle);
console.log("getUser :", getUser);

var name = "Tyler";
var handle = "@tylermcginnis";

function getUser() {
  return {
    name: name,
    handle: handle,
  };
}

```

## Function execution context 
- created whenever a function  is invoked, it has its own  creation and execution phases.

### Function execution - creation phase 
- create an arguments object
- create an object called this
- set up a memory space for variables and functions
- assign variable declarations a default value of "undefined" while placing any function declarations in memory 


## Javascript  Execution stack (Call Stack)
-  Anytime a function is invoked,  its execution context is pushed onto the execution stack, when both its phases are completed,  the function context gets popped off the stack. This is easy to visualize, because javascript is single-threaded.

# Hoisting
The process of assigning  variable declarations a default value of undefined during the creation phase is called **hoisting**


# Scope & Scope chain 
- if a  variable doesn't exist in the current context, the  engine will search for it in the nearest parent context execution context, this is called scope chain.
- Each child context can acces the variables of their parent context, but not vice-versa.

## Closure  scopes 
- this is  only (probably) case where we can still exist a variable of a context that has already been popped off the stack, namely if we have a function nested inside another function.
- In this case, the child function (the nested one), still has access to the outer function's scope, even if the parent context is gone 
-  The close scope is the same variable environment  that existed in the parent context.
- A closure is a child a function (a function in another function) that  has  the same variable environment as the parent function (it "closes" over it)


# Global variables
- global variables or variables without a declaration will be added onto the window object directly. 
- If a variable doesn't have a declaration, even if they are within a function, they will still be added ONTO THE WINDOW object.



# Resources
- https://ui.dev/javascript-visualizer