---
title: What the hack is call, apply, bind in JavaScript
date: "2020-04-19"
description: "Inshort, do the same work but differently"
---

Before start looking into call, apply, bind you should understand - how does ["this" keyword works in JavaScript](https://ritikrana.netlify.app/understand-this-keyword-in-javascript/).
In short "this" creates a reference to an object. It may refer to global object i.e.{window object} in global scope.

```javascript

console.log(this);
//Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}

``` 
And inside an Object to the Object itself.

```javascript

const student = {
    name:"ritik",
    getDetails(){
        console.log(this);
    }
}

student.getDetails();
//{name: "ritik", getDetails: ƒ}

```
So that is how "this" gets context by its scope automatically.

But what if we want to specify the context(environment) of "this" to a specific object.
Lets see this in code:

```javascript

const religion = {
     type: "humanity",
     property:"greatest"
}

function getDetails(){
    console.log(`${this.type} is the ${this.property} religion`);
}

getDetails();
//undefined is the undefined religion

```
So here "this" is refering to "window" object (according to its default behaviour in function "this" refers to "window" object).
But we want it to refer to "religion" object. 
That is where call, apply, bind comes into picture.
```javascript

const religion = {
     type: "humanity",
     property:"greatest"
}

function getDetails(){
    console.log(`${this.type} is the ${this.property} religion`);
}

getDetails.call(religion);
//humanity is the greatest religion
getDetails.apply(religion);
//humanity is the greatest religion

```
Here "call" or "apply "method helps to make connection between "religion" object and "getDetails" function.
Or we can say "call" or "apply" method helped in creating a reference of "this" in "getDetails" funtion to "religion" object.

Both "call" and "apply" work in the same way but they handle arguments in different manner.
Now let us pass some parameters to the function "getDetails".

```javascript


const religion = {
     type: "humanity",
     property:"greatest"
}

function getDetails(world,creature){
    console.log(`${this.type} is the ${this.property} religion in the ${world} of ${creature}`);
}

getDetails.call(religion,"modern world","human");
//humanity is the greatest religion in the modern world of human

getDetails.apply(religion,["modern world","human"]);
//humanity is the greatest religion in the modern world of human

```

"call" method takes arguments additional to the "this" context linearly seperated by comma while
"apply" handles argument as an array.

Now what if you wanted to use "getDetails" function with different "arguments" in many places of your code.
Using "call" or "apply" method multiple times-can be one of the solution but "bind" method can make the process more easy.

"Bind" method creates a reference of "this" to the object it has been passed with, same like "apply" or "call" but returns a function.
Now that function can be used multiple times with different "arguments" in your code.

```javascript

const religion = {
     type: "humanity",
     property:"greatest"
}

function getDetails(world,creature){
    console.log(`${this.type} is the ${this.property} religion in the ${world} of ${creature}`);
}

const newgetDetails = getDetails.bind(religion);
newgetDetails("modern world","human");
//humanity is the greatest religion in the modern world of human

newgetDetails("future world","different creatures");
//humanity is the greatest religion in the future world of different creatures

```
If you dont want to store the returning function than, It can be invoked directly like this:
```javascript

const religion = {
     type: "humanity",
     property:"greatest"
}

function getDetails(world,creature){
    console.log(`${this.type} is the ${this.property} religion in the ${world} of ${creature}`);
}

getDetails.bind(religion)("modern world","human")
//humanity is the greatest religion in the modern world of human

```
##TheEnd
In this article we learn about call, apply, bind in JavaScript. Try out the code samples and play with "this" keyword.