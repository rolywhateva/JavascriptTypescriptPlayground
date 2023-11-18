# Variables in javascript 
 - A variable has a name, a scope and a value, all 3 are decided when the variable is declared.
 - Variables have the undefined value by default if you don't initialize it with any value 
 - The scope defines where variables and functions are accesible. In javascript, there are two scopes:
    - global
    - function 
- If a variable is declared in a function, then that variable  only lives in that function or any nested function 
-  If we attempt to access a variable outside of its scope, we get a reference error 
- However,  if a variable is function scoped, it does mean that it also lives outside for-blocks, for example
```
function discountPrices(prices, discount) {
  var discounted = [];

  for (var i = 0; i < prices.length; i++) {
    var discountedPrice = prices[i] * (1 - discount);
    var finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(finalPrice);
  }

  console.log(i); // 3
  console.log(discountedPrice); // 150
  console.log(finalPrice); // 150

  return discounted;
}
```
- This happens because variable declarations are hoisted, that means that variables are basically pushed by the interpreter to the top of their scope and assigned undefined by default. That's the reason why you can technically access a var before even declaring it, it will work it's just that its value will be undefined.


# VAR vs const vs let 
## Let 
- block scoped (anything {})
- can't be accessed at all before being declared ( will throw a reference error)

- If we rewrite the above example with let, we'll get reference error for i: 
```
function discountPrices (prices, discount) {
  let discounted = []

  for (let i = 0; i < prices.length; i++) {
    let discountedPrice = prices[i] * (1 - discount)
    let finalPrice = Math.round(discountedPrice * 100) / 100
    discounted.push(finalPrice)
  }

  console.log(i)
  console.log(discountedPrice)
  console.log(finalPrice)

  return discounted
}
```

## Const 
- same as let, but it has to be initialized when it's declared, and its value cannot be changed, or better-said "re-assigned".
- if it's an object, its fields can still be changed

# Object and array destructuring 
- To add a property to an object, we can use dot notation and  assign a new property a value, this can be repeated  to add multiple properties.

```
const user = {};
user.name = "Tyler McGinnis";
user.handle = "@tylermcginnis";
user.location = "Eden, Utah";

const name = user.name;
const handle = user.handle;
```

- The same is done below, only with javascript's "object literal notation" when you initialize the object.

```
const user = {
  name: 'Tyler McGinnis',
  handle: '@tylermcginnis',
  location: 'Eden, Utah',
};

const name = user.name;
const handle = user.handle;
```
- **Destructuring** allows us to extract multiple properties from an object at the same time, turn something like  this : 
```
const name = user.name;
const handle = user.handle;
const location = user.location;
```
- to this: 
```
const { name, handle, location } = user;
```

- It works similarly for arrays, it turns something like this: 
```
const user = ["Tyler McGinnis", "@tylermcginnis", "Eden, Utah"];
const name = user[0];
const handle = user[1];
const location = user[2];
```
- to this : 
```
const [name, handle, location] = user;
```

## Some features of destructuring
### Extracting a property with a different name 
```
const { n: name, h: handle, l: location } = user;
console.log(name); // Tyler McGinnis
console.log(handle); // @tylermcginnis
console.log(location); // Eden, Utah
```
### Function arguments and parameters
- Function parameters can be grouped into objects, so order of the arguments no longer matters and optional arguments can be  left out, and we can also specify default values more easily. 
- This: 
```
function fetchRepos(
  language,
  minStars,
  maxStars,
  createdBefore,
  createAfter,
) {}

fetchRepos(
  "JavaScript",
  100,
  null,
  new Date("01.01.2017").getTime(),
  null,
);
```

- becomes this:
```
function fetchRepos({
  language,
  minStars,
  maxStars,
  createdBefore,
  createAfter,
}) {}

fetchRepos({
  language: "JavaScript",
  maxStars: null,
  createdAfter: null,
  createdBefore: new Date("01/01/2017").getTime(),
  minStars: 100,
});
```

- then this: 
```
function fetchRepos({
  language = "All",
  minStars = 0,
  maxStars = "",
  createdBefore = "",
  createdAfter = "",
}) {}

fetchRepos({
  language: "JavaScript",
  createdBefore: new Date("01/01/2017").getTime(),
  minStars: 100,
});
```

# Shorthand properties
- With shorthand properties, whenenver you have a variable which is the same name as a property of an object, and you use it to set that property, you can leave out the property name.
- this: 
```
function formatMessage (name, id, avatar) {
  return {
    name: name,
    id: id,
    avatar: avatar,
    timestamp: Date.now()
  }
}
```

- becomes this:
```
function formatMessage (name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now()
  }
}
```

- We can also leave out the function keyword for functions: 
```
function formatMessage (name, id, avatar) {
  return {
    name,
    id,
    avatar,
    timestamp: Date.now(),
    save () {
      //save message
    }
  }
}
```

## Computed property names
- compute  a variable's value as  a property of an object 
- Without ES6, we'd do this via bracket notation 

This can be turned into 

```
function objectify(key, value) {
  let obj = {};
  obj[key] = value;
  return obj;
}

objectify("name", "Tyler");
```

this: 
```
function objectify(key, value) {
  return {
    [key]: value,
  };
}

objectify("name", "Tyler"); 
```

Weirdly enough, there are not many restrictions on  the values of key: 
```
const expressionOne = 1 + 10;
const expressionTwo = 10 + 'greenBottles';
const expressionThree = 'with-hyphens';

const obj = {
  42: 'foo', // ✅ number 42, coerced to string '42'
  [expressionOne]: 'bar', // ✅ number 11, coerced to string '11'
  [expressionTwo]: 'baz', // ✅ string '10greenBottles'
  [expressionThree]: 'bam', // ✅ string 'with-hyphens'
  ',.!@£$%^&*()_+': 'bof', // ✅ string ',.!@£$%^&*()_+'
  name: 'Richard Lambert', // ✅ syntactic sugar, treated as string 'name'
  -42: 'invalid', // ❌ won't work
  with-hyphens: 'invalid', // ❌ won't work
  ,.!@£$%^&*()_+: 'invalid', // ❌ won't work
};

console.log(obj[42]); // ✅  number 42 coerced to string '42' -> 'foo'
console.log(obj['42']); // ✅ also valid -> 'foo'
console.log(obj[11]); // ✅  number 11 coerced to string '11' ->  'bar'
console.log(obj['11']); // ✅ also valid -> 'bar'
console.log(obj['10greenBottles']); // -> 'baz'
console.log(obj['with-hyphens']); // -> 'bam'
console.log(obj[',.!@£$%^&*()_+']); // -> 'bof'
console.log(obj['name']); // -> 'Richard Lambert
```

# Template literals
- Before ES6, putting variable values into strings was done via concatenations, which admittedly, can be ugly af: 
```
function makeGreeting(name, email, id) {
  return (
    "Hello, " +
    name +
    ". We've emailed you at " +
    email +
    '. Your user id is "' +
    id +
    '".'
  );
}
```
- there were also problems  when you wanted to put in "" in the strings, since you had to escape them. 
- With ES6, the above can be turned into : 
```
function makeGreeting(name, email, id) {
  return `Hello, ${name}. We've emailed you at ${email}. Your user id is "${id}".`;
}
```
- That is the backtick operator,  it can be used for multiline strings as well and double quotes don't have to be escaped



# Arrow functions

- they have two main benefits:
    - they are more easier to write
    -  help managing the this keyword by not having their own (they don't have their own context)

Turn this: 
```
function add(x, y) {
  return x + y;
}

// fn expression
var add = function (x, y) {
  return x + y;
};
```
into this: 
```
var add = function (x, y) {
  return x + y;
};

var add = (x, y) => {
  return x + y;
};
```

A more practical example might be:
```
function getTweets(uid) {
  return fetch("//api.users.com/" + uid)
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      return response.data;
    })
    .then(function (tweets) {
      return tweets.filter(function (tweet) {
        return tweet.stars > 50;
      });
    })
    .then(function (tweets) {
      return tweets.filter(function (tweet) {
        return tweet.rts > 50;
      });
    });
}
```

will turn into:
```
function getTweets(uid) {
  return fetch("//api.users.com/" + uid)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response.data;
    })
    .then((tweets) => {
      return tweets.filter((tweet) => {
        return tweet.stars > 50;
      });
    })
    .then((tweets) => {
      return tweets.filter((tweet) => {
        return tweet.rts > 50;
      });
    });
}
```
that  can turn into:
```
function getTweets(uid) {
  return fetch("//api.users.com/" + uid)
    .then((response) => response.json())
    .then((response) => response.data)
    .then((tweets) => tweets.filter((tweet) => tweet.stars > 50))
    .then((tweets) => tweets.filter((tweet) => tweet.rts > 50));
}
```

- and we can lose the () around the arguments

Arrow functions don't have their own context, meaning, that  for example, this will fail because setState is undefined:
```
updateLanguage(lang) {
  api.fetchPopularRepos(lang)
    .then(function (repos) {
      this.setState({ repos });
    });
}
```

rewriting it with an arrow function will make it work 


# Default parameters
- give function parameters a default value for when they are not specified during function call
- Before ES6, the || would be used : 

```
function calculatePayment(price, salesTax, discount) {
  salesTax = salesTax || 0.05;
  discount = discount || 0;

  // math
}
```

There's a small problem with  the above approach, 0 is considered a falsy value, which means if you try to pass in 0, the valuie of salesTax will be 0 anyway.  The above should really look like this:
```
function calculatePayment(price, salesTax, discount) {
  salesTax = typeof salesTax === "undefined" ? 0.05 : salesTax;
  discount = typeof discount === "undefined" ? 0 : discount;

  // math
}
```

 This would now turn to this with ES6:
 ```
function calculatePayment(price, salesTax = 0.05, discount = 0) {
  // math
}
```

The default value doesn't have to match the value that is actually gonna be used in the function, this means we can do a little trick that will throw an error if a parameter isn't passed: 
```
function isRequired(name) {
  throw new Error(`${name} is required`);
}

function calculatePayment (
  price = isRequired('price'),
  salesTax = 0.05,
  discount = 0
) {

  // math
}
```
