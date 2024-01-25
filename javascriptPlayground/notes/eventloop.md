# What is an event loop? 

- Javascript is single threaded, so to help itself manage  both async, sync and to respond to events for example, there's the event loop.

- The event loops is formed out of : 
    - callstack
    - web api 
    - callback queue

-  the execution is basically pushed onto the callstack, and whenever we want something async or event-based, we push that towards the web api, when the time coues (settimeout time runs out, an event gets called, a http request has a response etc.) the callback queue pushes the  callback onto the callstack (if the callstack is empty - because remember : javascript is single threaded)

- With promises, another component was added into the mix : a job queue.  This queue has a higher priority than the callback queue.

# Useful code snippets 
**This represents how the event loop works**: 
```
let callStack = [];
let taskQueue = [];

while (true) {
  if (callStack.length === 0 && taskQueue.length > 0) {
    callStack.push(taskQueue.shift());
  }
}
```
```
console.log("First");

setTimeout(function () {
  console.log("Second");
}, 0);

console.log("Third");
```

**callback queue vs job queue**
```
console.log("First");

setTimeout(function () {
  console.log("Second");
}, 0);

new Promise(function (res) {
  res("Third");
}).then(console.log);

console.log("Fourth");
```

# About settimeout 
- it's non blocking 
- it's not actually part of javascript, but rather the environment it runs in (it's originally from C++)

# Resources

- a video on the topic: 
https://www.youtube.com/watch?time_continue=234&v=8aGhZQkoFbQ&embeds_referring_euri=http%3A%2F%2Flatentflip.com%2F&source_ve_path=MTM5MTE3LDEzOTExNywyMzg1MQ&feature=emb_title

- a tool: http://latentflip.com/loupe/?code=Y29uc29sZS5sb2coJ0ZpcnN0JykKCnNldFRpbWVvdXQoZnVuY3Rpb24gKCkgewogICAgY29uc29sZS5sb2coJ1NlY29uZCcpCn0sIDMwMDApCgpjb25zb2xlLmxvZygnVGhpcmQnKQ%3D%3D!!!
