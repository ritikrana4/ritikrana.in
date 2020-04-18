---
title: Array Methods in Javascript
date: "2020-03-01"
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
or you can do it like this: using arrow function.

```javascript

const number = [1,2,3,4,5,6]
const number_incremented_by_5 = number.map(element=>element+5);
console.log(number_incremented_by_5);
//[6, 7, 8, 9, 10, 11]

```
##5. Array.reduce()

The reduce() method executes a reducer function on a provided array elements and returns a single output value.
A reducer function is a special one. It uses two arguments accumulator and currentValue. The result of each iteration is stored in 
accumulator.
Lets  see an example :

```javascript 

const marks = [50,60,75,80,40];
function reducer(accumulator , currentValue) {
  return accumulator + currentValue;
}
const total_marks = marks.reduce(reducer);
console.log(total_marks);
//305

```
In the first iteration 'accumulator' holds value of first element in array.
We can also assign it directly to some value by passing along with reducer.

```javascript 

const marks = [50,60,75,80,40];
function reducer(accumulator , currentValue) {
  return accumulator + currentValue;
}
const total_marks = marks.reduce(reducer,-305);
console.log(total_marks);
//0

```

##6. Array.sort()

The sort method sorts the elements of the provided array. By default it sorts in ascending order.

```javascript

const debts= [5500,2500,1365,5000,7584,45,745];
debts.sort();
console.log(debts);
//[45,745,1365,2500,5000,5500,7584]

```
We can change the sort order according to our use by passing a callback funtion.
Lets sort the "debts" array in descending order.

```javascript

const debts= [5500,2500,1365,5000,7584,45,745];
debts.sort((num1,num2)=>num2-num1);
console.log(debts);
//[7584, 5500, 5000, 2500, 1365, 745, 45]

```

##7. Array.slice()
The slice methods returns a portion of array into a new array. It takes two parameters as index value - begin and end.
"End index value is not included".

```javascript

const data = ["ritik","rahul","shubham","ashish","gaurav","piyush"]
const partOfData = data.slice(2,5);
console.log(partOfData);
//["shubham", "ashish", "gaurav"]

```
What is forget or give large value to end index i.e 

```javascript

const data = ["ritik","rahul","shubham","ashish","gaurav","piyush"]
const partOfData = data.slice(2);
console.log(partOfData);
//["shubham", "ashish", "gaurav", "piyush"]
const partOfData2 = data.slice(2,5);
console.log(partOfData2);
//["shubham","ashish","gaurav"] 

```
It checks data.length property if end index is missing or greater than length of array.

##8. Array.splice() 
The splice method is used to alter the array. It helps in deleting or adding items inside a array at 
any particular position. It returns the array with deleted items.
It takes 3 parameter starting index , delete count from that index , and if something to add after that index.

```javascript

const alpha = ["a","b","c","d","e"];
alpha.splice(2,1);
//goes to index 2 and deletes 1 element
console.log(alpha);
// ["a", "b", "d", "e"]
alpha.splice(2,0,"c")
//goes to index 2 and deletes nothing and adds "c"
console.log(alpha)
//["a", "b", "c", "d", "e"]
alpha.splice(0);
//deletes full array as starting index is 0 and by default delete count it takes arr.length
console.log(alpha);
//[]

```
Thats all. Thanks for a read.