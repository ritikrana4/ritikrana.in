---
title: Understand "this" keyword in JavaScript
date: "2020-04-18"
description: "that is not this"
---

Most of the time we confuse with this keyword in JavaScript. So lets simplify it.
"this" is just used to create a reference to any object.

Let say we have a two object "studentFirst" and "studentSecond".
```javascript

const studentFirst = {
    name:"ritik",
    age:"21"
}

const studentSecond = {
    name:"gaurav",
    age:"45"
}

```
And a function "getDetails" which will log the student details in console.

```javascript

function getDetailsFirst(){
    console.log(`${studentFirst.name} is ${studentFirst.age} years old.`);
}

function getDetailsSecond(){
    console.log(`${studentSecond.name} is ${studentSecond.age} years old.`);
}

getDetailsFirst();
getDetailsSecond();

//ritik is 21 years old.
//gaurav is 45 years old.

```
Above we are using two seperate function and using object properties by calling their Object seperatly.
It can be done more efficiantly using "this". Lets see:

```javascript

const studentFirst = {
    name:"ritik",
    age:"21"
}

const studentSecond = {
    name:"gaurav",
    age:"45"
}

function getDetails(){
    console.log(`${this.name} is ${this.age} years old.`);
}

getDetails.call(studentFirst); //this gets a reference to studentFirst Object //A
getDetails.call(studentSecond);//this gets a reference to studentSecond Object //B

//ritik is 21 years old.
//gaurav is 45 years old.

```
Here "call" method is used to create a reference for "this" in "getDetails" method.
At position A "this" creates a reference to "studentFirst".
At position B "this" creates a reference to "studentSecond".

Now lets see how does "this" behave in different scopes.

Open Chrome Dev-Tool and in console just log "this".

```javascript

console.log(this);
//Window {parent: Window, opener: null, top: Window, length: 4, frames: Window, …}

```
So in global scope "this" is refering to "window" object.

Now lets try "this" inside a object.

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
Inside a Object "this" refers to scope of same Object in which it is defined.
Hope you get the basic of "this" in JavaScript.
 