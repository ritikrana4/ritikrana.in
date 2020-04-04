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
coming up ...


