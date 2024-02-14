---
title: The Enchanting World of JavaScript Template Literals
author: Ritik Rana
pubDatetime: 2024-02-13T09:12:47.400Z
slug: javascript-template-literals
featured: false
draft: false
tags:
  - javascript
description: ""
---

Template literals is a feature of JavaScript that allow for more flexible and dynamic string creation. This use backticks ( \` ) instead of single or double quotes and can contain placeholders called `interpolations` or `placeholders`. These `placeholders` are indicated by the dollar sign followed by curly braces (`${expression}`) and the `placeholders` are replaced with their corresponding values.

Here's a basic example of using template literals:

```ts
let text = `Hello I am String represented by template literals`;

console.log(text);
//'Hello I am String represented by template literals'
```

## Interpolations

Lets add some placeholders/interpolations in the literals and see what magical things we can do.

```ts
let name = "Ritik";
let text = `Hello my name is ${name}`;

console.log(text);
//'Hello my name is Ritik'
//or
console.log(`Hello my name is ${name}`);
//'Hello my name is Ritik'
```

In template literals, placeholders can also accept expressions.

```ts
function sub(a, b) => a - b;

const a = 4;
const b = 2;
const s = `${a} - ${b} = ${sub(a, b)}`;
//sub is an expression

console.log(s);
// 4 - 2 = 2
```

We can also create a syntax shown below with the help of template literals.

```ts

let User = {
  name: 'Ritik Rana',
  age: '27',
  website: 'www.ritikrana.in'
}

var {name, age, website} = User
var html = `<div>
  <header>
    <h1>${name}</h1>
  </header>
  <section>
    <div>${age}</div>
    <div>${website}</div>
  </section>
</div>`

console.log(html)

//output
<div>
  <header>
    <h1>Ritik Rana</h1>
  </header>
  <section>
    <div>27</div>
    <div>www.ritikrana.in</div>
  </section>
</div>
```

What if we can control the parsing of template literals by using some custom functions instead of just returning a concatenated string. Yes we can do this with the help of tag functions.

So basically template literals have 3 parameters :

- string
- expression
- tag function

We have seen the first two parameters i.e. string and expression . Now lets see what is tag function.

## Tagged Templates

Tagged templates are an advanced feature of template literals that allow you to customize the behavior of template literals by using a tag function. A `tag function` is a function that is called with the template literal and its interpolated values as arguments.

Lets see how tag functions work:

```ts
function toUpperText() {
  return "Hello from toUpperText tag function.";
}

let name = "Ritik Rana";
let age = "27";

console.log(toUpperText`My name is ${name}, I am ${age} years old`);

//output
("Hello from toUpperTexttag function.");
```

The Magic begins as soon as we attach a tag function with our template literal. Now `toUpperText` tag function will define how to parse the provided template literal instead of just concatenating the strings and expression values.

If we try to run this code we will get `“Hello from toUpperText tag function.”` because this is what `toUpperText` tag function is returning. But where does this `My name is ${name}, I am ${age} years old` template literal go.

Now lets take the template literal and interpolated values to define our tag function definition.

```ts
function toUpperText(template,...expressions) {
  console.log(template,expressions);
  return template.reduce((accumulator, part, i) => {
    return accumulator.toUpperCase() + expressions[i - 1].toUpperCase() + part.toUpperCase()
  })
}

let name = 'Ritik Rana'
let age= '27'

console.log(toUpperText`My name is ${name}, I am ${age} years old`)

//below output is the template and expression arrays
['My name is ', ', I am ', ' years old', raw: Array(3)]
['Ritik Rana', '27']
//output from the tag function
MY NAME IS RITIK RANA, I AM 27 YEARS OLD
```

As we see `toUpperText` is a tag function that takes template which is the fixed string values in a array and all the placeholder values as the rest arguments.
And with the help of `reduce` method, string is converted into upper case letters. This is how we are parsing template literal in our custom tag function `toUpperText`.

## Use Case

Imagine you have a magic wand that lets you mix your website's look with the code that makes it work – that's what template literals can help to do! With template literals, you can write your styles right where you're working on your website's code. It's like telling your computer exactly how you want things to look, and it understands you perfectly!

These cool template literals help you create something awesome, kind of like `Styled Components`.

Below code shows you an example of styled component using template literals.

```ts
const Button = styled.button<{ $primary?: boolean; }>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #BF4F74;
  color: #BF4F74;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.$primary && css`
    background: #BF4F74;
    color: white;
  `}
`;

const Container = styled.div`
  text-align: center;
`

render(
  <Container>
    <Button>Normal Button</Button>
    <Button $primary>Primary Button</Button>
  </Container>
);
```

Check out this blog [Demystifying Styled Components](https://www.joshwcomeau.com/react/demystifying-styled-components/) for an easy explanation of how `styled components` use `template literals`.

Another use case of template literal is to create your own `declarative templates` for creating simple and fast web components. These web components will not need any babel or webpack to convert from JSX to native JS. It will be much faster and you will have full control over them.

One of the library that focuses on template literal to create web components is [`lit`](https://lit.dev/) . Lit templates are based on `tagged template literals`, are simple, expressive and fast, featuring HTML markup with native JavaScript expressions inline. No custom syntax to learn, no compilation required.

Check out this blog [Static Site Templating: Switching from React & JSX to JavaScript & Template Literals](https://blog.jim-nielsen.com/2020/switching-from-react-to-js-for-templating/) on how to create your own declarative templates.
