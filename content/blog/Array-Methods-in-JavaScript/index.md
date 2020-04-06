---
title: Array Methods in Javascript
date: "2015-05-01"
description: "Make life easy, using Array Methods"
---

Array are mostly used in web development and most of the task on web 
need Array along with its methods. In JavaScript, arrays have many predefined methods in its ____proto____.So
lets discuss some commonly used array methods along with their purpose.

##1. Array.find() 

The find() method takes a callback function which executes on each element in array taking three argument i.e. element, index, array
and returns the value of the first element in the provided array.
```javascript

function greater_than_20(item){
    return item > 20;
}
const all_numbers = [2,4,5,7,20,23,15,9];
const found = all_numbers.find(greater_than_20);
console.log(found);
//23

```
or you can do it like this: using arrow function.

```javascript

const all_numbers = [2,4,5,7,20,23,15,9];
const found = all_numbers.find(item => item > 20);
console.log(found);
//23

```

and if you want to use all three argument that is possible than:

```javascript

function greater_than_20(item,index,array){
     if(item>20 && index>4){
         console.log(item +" "+ index + " "+ array[index]);    
        }
    }
const all_numbers = [2,21,5,7,20,23,15,9];
const found = all_numbers.find(greater_than_20);
//23 5 23
```

##2. Array.filter()

The filter() method takes each element of array and check the condition provided in callback function and creates a new array of those
elements that satisfies the condition. If no element satisfies then a empty array is returned.
Lets see the code :

```javascript

const people_age = [12,8,10,19,20,5,25,36]
function people_above_18(age) {
    return age > 18; 
}
const people_18 = people_age.filter(people_above_18);
console.log(people_age);
console.log(people_18);

```
or you can do it like this: using arrow function.

```javascript 

const people_age = [12,8,10,19,20,5,25,36]
const people_18 = people_age.filter(age=>age>18);
console.log(people_age);
console.log(people_18);
//[12, 8, 10, 19, 20, 5, 25, 36]
//[19, 20, 25, 36]

```
It also accepts optional parameters like index, array.

##3. Array.forEach()

The forEach() method just runs a function for each element of array. It does not return anything i.e. undefined.
It is same like for loop.

```javascript

const arr = ['a', 'b', 'c'];
arr.forEach(element => console.log(element));
//a
//b
//c

```

##4. Array.map()

The map() method runs a function for each element of array just like forEach() method but it also creates a new array of result, of each element.

```javascript

const number = [1,2,3,4,5,6]
function inc_by_5(element){
    return element + 5;
}
const number_incremented_by_5 = number.map(inc_by_5);
console.log(number_incremented_by_5);
//[6, 7, 8, 9, 10, 11]

```