---
id: types
title: Typescript Types
sidebar_label: Types
---

## Thumb Rule

` Always assign your variable with a type (other than any). If you are unknown of the type of value, get the help of IDE (mouse over).`

### What are the basic types in Typescript?

- #### Number `(1, 1.5, 0)`:
  All numbers, no differentiations between integer and float.
  ```js
  // In your app.ts test following code
  function add(n1: number, n2: number, n3: number): number {
    return n1 + n2 + n3;
  }
  const number1 = 20; // the type of number1 is 20 (which is a number only) as it is constant and the value is never going to be other than 20.
  let number2 = 40.5; // here the type of number2 is number, default assignment by typescript from the type of value.
  let number3: number = 23; // manual assignment to type number which is same as before.
  let sum = add(number1, number2, number3); // type of sum is a number which is also self defined by typescript as the function's return type is fixed to number
  ```
- #### String `(‘hi’, “Hello”)`:
  All normal strings
  ```js
  let name:string;
  const name = 'john snathan '; // type auto assignment, name is string
  let name = 'john snathan';  // type auto assignment, name is string
  ```
- #### Boolean `(true or false)`:
  The boolean values
  ```js
  let isActive : boolean; 
  let isActive =false;
  const isActive :boolean = true;
  ```

- #### Object (`{age:number}`):
  Any json/javascript object type with its definition. Eg: 
  ```js
  let person : {
    name: string; 
    age: number;
  } = {
    name: ‘jason snathan’, 
    age: 32
  } // while assignment of different type object will throw an error. Eg: 

  let person:{
    name: string; 
    age: number;
    } = {
      name: ‘jason snathan’, 
      age: ‘thirty two’ // error
    } // error: the age should be of type number.
  ```
  The rule is same for nested object types.
- #### Array (`type[]`):
  The array type can be a list of any specific type or of mixed. Eg: 
  ```js
  let names:string[]=[‘suman’, ‘simran’]; // the array will only accept a list of type strings.
  const ids: number[] = [1,2,3,4,5]; // array of numbers.
  const values: any[]=[1, 'ritesh', 'first', true]; // array of (any) mixed elements NOTE: always avoid to use any, workaround could be union at this place
  ```
- #### Tuples (`[number, string,...]`):
  Tuple defines and limits an array to have flexibility to add anything. Eg: 
  ```js
  let positions:[number, string] = [1,’admin’]; // now it will only accept the values number at position first and string at second nothing otherwise. Eg:
  positions[1] = 334 // or 
  positions.push(‘superadmin’) // will throw an error.
  postions = [2,'superAdmin']; // is a valid update
  ```
- #### enum(`enum Type {...}`):
  A property that assigns labels to numbers. Eg:
  ```js
  enum Roles {ADMIN, SUPER_ADMIN, AUTHOR};
  Const personRole = Role.Admin;
  console.log(personRole); // will print 1 as the first position of ADMIN
  //We can have our own custom assignment to the enum properties like,
  enum Roles {ADMIN=’admin’, SUPER_ADMIN = 200, AUTHOR}
  ```
- #### Any (`any`):
  The flexible type when we are not sure about the type, we use any. It is recommended to `avoid any` as much as we can.
- #### Union type (type1|type2|....) :
  It's just like an or operator between types. It allows the use of any of the given types in a single variable. Eg:
  ```js
  Let age:(string|number);
  age = ‘thirty two’; // accepted
  age = 32; // accepted
  age = true; // error
  
  // for arrays, 
  const values: (number|string|boolean)[]=[1, 'ritesh', 'first', true]; // now this array will allow to accept any of number string or boolean type.
  ```

### Types for function
- #### Void type 
  The void type is used as function return type. A function return type could be any of above defined but when a function is not returning anything at all, the return type should be `void`. eg:
  ```js
  function printSum(n1: number, n1: number): void{
    console.log('sum is :' + n1+n2);
  }
  ```
- #### Function type
  In case of javascript, a function can also be assigned to a variable, for which Typescript has a special type called `Function`. Eg:
  ```js
  function sum(a: number, b: number): number{
    return a+b;
  }
  let mySum : Function;
  mySum = sum; // valid,
  mySum = 5; // error, type number cannot be assigned to a variable of type Function
  ```
  #### BUT 
  Above solution is too generic. Type script has another syntax for type function to even ensure the argument and return type of the assignment functions.
  ```js
  function add(n1: number, n2: number): number{
    return n1 + n2;
    }
  function printResult(n: number): void{
    console.log(n);
  }

  let combineValues:(a: number, b: number)=>number; // type should be a function that should only accept two parameters as numbers and returns a number.
  combinedValues = add; // valid assignment
  combinedValues = printResult; // error, invalid type of function assignment.
  ```
  #### Function type for callback values
  We can also define the same way for our callback functions. Eg.
  ```js
  function addAndHandle(n1: number, n2: number, cb: (num: number)=>number){ // cb is a callback function
    const result = n1+n2;
    cb(result);
  }
  // use
  addAndHandle(10, 20, (result)=>{ // the type of result is automatically defined from the return type of call back function by typescript as number.
  console.log(result);
  })

  addAndHandle(10, 20, (result, something)=>{ // error - the callback function expected 1 argument found 2.
  console.log(result);
  })
  ```


### Type alias (also called custom types)
  Type aliases are custom name given to a grouped (union) variables. This is for easyness and helps to maintain proper naming for combined types.
  Eg:
  ```js
  type questionValues = string | number; // defining a custom type with union of two types
  let values: questionsValeus []; // defining an array of our custom type
  values.push(1);
  values.push('hello world');

  // another example with concrete types
  type properties = 'admin' | 'superAdmin'; // definition : it enforces to use only two specified values instead generic type string
  let person : properties = 'admin' ; // valid
  person = 'superAdmin' ; // valid
  person = 'user'; // invalid
  ```

### The other two types
  Typescript also has 2 special types for empty values. 
  - #### Unknown type :
  When there is a value but the type of it or even the value is not known, typescript suggests us to use `unknown` instead of using any.
  ```js
  let userInput :unknown;
  userInput = 5;              // acceptable
  userInput = 'hello world';  // acceptable

  let userName: string;
  userName = userInput;       // invalid - the type unknown is not assignable to string. While usuerInput: any; will accept it.

  ```

  - #### Never :
  When a function/variable never actually produces or stores a value, the type it gives is `never`. Following example is of a function that generates error which is not being handled so breaks the script. Due to which it does not return anything. (`void`, `unknown`, `undefined` none of it). 
  ```js
  function generateError(code: string, code: number){ // the automatic assigned type of return of this function is never here.
    throw ({message: value, code: code});
  }
  console.log(generateError('message string', 500)); // this will print nothing. `void`, `unknown`, `undefined` none of it not even the whitespace.
  ```

#### For full detail about types and its use, you can visit typescript's official types documentation page `https://www.typescriptlang.org/docs/handbook/2/everyday-types.html`