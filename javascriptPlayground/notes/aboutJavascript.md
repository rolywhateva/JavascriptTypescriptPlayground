# What is Javascript? 
- initially created to "make web pages alive" 
- the programs are called scripts
- scripts are provided and executed as plan text, no special preparation or compilation needed to run 
- Javascript has its own specification called 
ECMAScript 
- Javascript can execute on: 
    - the browser
    - a server
    - any device that has a javascript engine 
- A javascript engine is something needed to run javascript. It takes the code, parses it, and converts ("compiles") the script to machine code, which runs pretty  fast.  It optimizes at each step, it watches the compiled script, analyzes the data that flows through it, and optimizes the machine code.
- Examples of javascript engines: 
    - V8 (chrome, opera, edge)
    - SpiderMonkey - Firefox
    - Chakra - IE 
- Modern javascript is "safe" : it does not provide low-level access to memory or the CPU because it was initially created for browsers which do not require it. 
- There are at least 3 great things about javascript: 
    - full integration with HTML/CSS
    - simple things done simply
    - supported by all major brwosers and enabled by default
- Javascript can be used to : 
    - create servers (apis)
    - mobile applications
    - desktop applications
    - web applications

## In browser javascript 
| What can it do   | What it can't do   
|---|---|
| Add new HTML to the page, change the existing content, modify styles   | can't read or write binary files, no direct access to OS functionalities, there are ways for that, but only via user permission   |   
| React to user actions (mosue clicks, pointer movements, key presses)  |  javascript from one page may not access the other page if they come from different sites ("same origin policy") - this is a security measure   |  
| send requests over the network to remove servers (AJAX and COMET technologies)   |  Communication with other sites requires explicit permission from them   |  
| get and set cookies, ask questions to visitor, show messages | | 
| remember the data  on the client-side ("local storage")  |

# Languages over javascript 
-  These lagnauges are transpiled (converted) to Javascript before they run , this transpilation is done by modern tools 
- Examples:
    - CoffeeScript  
        - syntactic sugar over javascript, shorter syntax
    - Typescript
        - strict data typing
    - Flow 
        - adds data typing , but  differently
    - Dart
        - standalone language, for mobile apps 
    - Brython
    - Kotlin 
        - modern, concise and safe programming language that can target the browser or Node 


# ECMA
The ECMA-262 specification contains the most in-depth, detailed and formalized information about JavaScript. It defines the language.




