---
title: Closure, Currying and IIFE in JavaScript
date: "2020-04-20"
description: "Everyone struggle here"
---
These are some of the concepts of JavaScript where everyone struggle in beginning.
Lets try to simplify them bit by bit.

## Closure
Closure is a function that can remember all the things that are used in its defination but are available outside its scope.
Lets see what this line means:
```javascript

function outerFunction(){
    let i=2;
    function innerFunction(){
        console.log(i);
    }
    return innerFunction;
}

console.dir(outerFunction());
//[[Scopes]]:
//0: Closure (outerFunction) {i: 2}

``` 
You will see something like this when you run the sample code.
Lets break the code:

1.There is an outerFunction() with a variable i.

2.And a function insideFunction() which it returns as an output.

3.When we invoke outerFunction() inside console.log() we get innerFunction() in return.

4.innerFunction() wants variable i but not in its scope.

What will happen if we invoke innerFunction:
```javascript

    function outerFunction(){
        let i=2;
        function innerFunction(){
            console.log(i);
        }
        return innerFunction;
    }

    const inner = outerFunction();
    inner();
    //2

```
Output is 2.

But outerFunction is already executed and its scope is vanished from stack. So how does innerFunction()
get the value of "i" from outerFunction(). Does it Re-Run the outerFunction()? NO!

So what innerFunction does is, it creates a closure with the lexical environment it needs.
It has to use the value of variable "i" in future so it saves it,in its lexical environment(scope).
And whenever innerFunction() is invoked irrespective of outerFunction(), it gets help from its lexical environment.

Does it stores all variables or functionality of outerFunction() in its lexical environment? NO:

```javascript

    function outerFunction(){
        let i=2;
        let j=3;
        function innerFunction(){
            console.log(i);
        }
        return innerFunction;
    }

    console.dir(outerFunction());
    //[[Scopes]]:
    //0: Closure (outerFunction) {i: 2}

```
So there is no variable "j" in lexical environment (scope).
It just store what it may need during the time of execution.
Closures are used in IIFE which we will see in later part of this article.(stay tuned)

##Currrying

Currying is process of transforming a function which takes multiple attributes into nested form of functions which takes 
attribute one by one.

```javascript

function multiply(x,y){
    console.log(x*y)
}
multiply(5,4);
//20

```
Currying it:
```javascript

function multiply(x){
    return function(y){
        console.log(x*y);
    }
}
multiply(5)(4);
//20

```
But how it is helping in our code. Lets see:
```javascript

function multiply(x){
    return function(y){
        console.log(x*y);
    }
}
const multiplyby3 = multiply(3);
const multiplyby5 = multiply(5);

multiplyby3(2);
//6
multiplyby5(2);
//10

```
It helps in loosely binding the attributes and to make reusable code.

##IIFE
IIFE stands for Immediately Invoked Function Expression. It is a design pattern which helps in running a 
function as soon as it is defined. 
```javascript

(function(){
    //logic
})();

```
This is the IIFE syntax consist of an anonymous function with () to invoke immediately.

Lets create a IIFE:
```javascript

(function(){
    console.log("Its an IIFE")
})();
//Its an IIFE

```
IIFE also provide other benefits, like it helps in making our variable and methods private.

```javascript

const world = (function(){
    let val;
    
    return{
        createNewWorld: function(){
                        val = true; 
                        },
        destroyWorld: function(){
                    val=false;
                    },
        result:function(){
            val?console.log("New world is Created"):console.log("Your world needs to be recreated")
        }
        
    }

})();

world.createNewWorld();
world.result();
//New world is Created

world.destroyWorld();
world.result();
//Your world needs to be recreated

```
In the above code sample variable "val" is a private member. We can not access it directly.
The public methods under return function helps in accessing the private member.
These public methods are the closures that share the same lexical environment.
This is one of the application of closures.

##The End
 In this article we learn about Closures, Currying and IIFE. <3 