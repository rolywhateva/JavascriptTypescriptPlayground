# Implicit binding 
By default, this refers to whatever is left to the dot 
Example 1 

```
var me = {
  name : 'Tyler',
  age: 25,
  sayName: function () {
    console.log(this.name);
  }
}

me.sayName();
```

Example 2 
```
var sayNameMixin = function (obj) {
   obj.sayName = function() {
     console.log(this.name);
   };
}

var me2= {
  name:'Tyler',
  age:25
}

var you = {
  name: "Joey",
  age:21
}

sayNameMixin(me2);
sayNameMixin(you);
me2.sayName();
you.sayName();
```


Example 3 
```
var Person = function (name,age) {
  return {
    name: name,
    age: age,
    sayName:function () {
      console.log(this.name);
    },
    mother:{
      name:'Stacey',
      sayName:function() {
        console.log(this.name);
      }
    }
  }
}

var Jim = Person('Jim',42);
Jim.sayName();
Jim.mother.sayName();

```

# Explicit Binding
- It's done via : call, apply and bind 

- Call and apply immediately call the function, with call you need to specify each argument, with apply you give the function an array of arguments. 
- Bind returns a new function which you  can call later.
```
var sayName = function (lang1,lang2,lang3) {
  console.log('My name is'+ this.name + 'and I know '+ lang1+ ','+lang2+', and'+ lang3);
}

var stacey = {
  name: 'Stacey',
  age:34
};

var languages = ['Javascript','Ruby','Python'];

sayName.call(stacey,languages[0], languages[1],languages[2]);
sayName.apply(stacey,languages);
var newFn = sayName.bind(stacey,languages[0],languages[1], languages[2]);
newFn();
```

# new Binding
- the new keyboard binds this to the object 




# Window binding 
- if not in strict mode and this is not bound to an object or anything, it defaults to window.


```
window.name = "Mike Tyson";

const me = {
  name: "Tyler",
  sayName() {
    console.log(this.name);
  },
};

const sayName = me.sayName;
sayName();
```

## Conclusions - how do I decide what this is? 
- look where the function is invoked, not declared.
- look if  call, apply or bind or new is being used, nad if we are in strict mode (let's assume we're not)