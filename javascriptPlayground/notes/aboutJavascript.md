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

# A bit of history 

#  Ecma and TC39
- Ecma international is an industry association dedicated to the standardization of information and communication systems.
- Javascript was submitted by netscape to Ecma, so they can build out a standard specification, hoping that would keep implementations consistent across browsers.
- Under Ecma, each new specification comes with: 
    - a standard (Ecma-262)
    - a comitee who works on the standard (TC39)
- In the standard, javascript is referred  to as "EcmaScript" (Oracle owns the trademark for javascript, so it's to avoid legal issues)
- In common language,ECMAScript( ES) is used as a way to refer to the standard.
- TC39 (Technical commitee 39) is  made up of members who are  browser vendors and large companies who  have invested heavily in the web (facebook, paypal), these members will send representatives, who will be responsible for : 
    - creating
    - approving
    - and denying  proposals

#  ECMAScript  release 
-  As of 2016, a new version of ECMAScript is released every year with whatever features are ready at that time, any stage 4 proposals that  exist when a new release happens, will be included in that release.

# The process behind proposals
- When a new proposal is created, it has to go through several stages before it comes part of the official specification. To move from one stage to another, a large majority of TC39 must agree while nobody disagress hard enough to go against it. 
- the process is described here : https://tc39.es/process-document/


## Stage 0 
- the stawman stage
- planned to be presentented, or already presented but not rejected definitively
- have not achieved criteria for stage 1 
- the only requirement  for stage 0 is that for the proposal's document to be reviewed at a meeting 
- using a stage 0 proposal in a code base is fine, but it's risky because even if it becomes official, it  could suffer changes

## Stage 1 
-  a member of TC39 must become the "champion" of the proposal, they will be responsible of the proposal
-  What does the proposal try to solve? 
-  How does it work?  
- A high-level api 

## Stage 2 
- description of the syntax and semantics of the new feature
- locks down all the aspects of the feature
- feature changes may still occur, but they should be small and incremental

## Stage 3 
- mostly finished but needs feedback from implementors 
- spec text must be finished at least two spec compliant implementations must be created.

## Stage 4 
-  tests must be written
-  members should have significant practical expierence with the new feature
- the ecmascript spec editor must sign off on the spec text 

