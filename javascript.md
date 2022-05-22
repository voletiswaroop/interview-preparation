### Array Methods in Javascript?
- push() :- We use this to add an element at the end of an array.
- pop() :-  We use this to remove the last element of an array.
- shift() :- We use this to remove the first element of an array.
- unshift() :- We use this to add an element at the begining of an array.
- join() :- We use this to concatenate or join all the elements in the array into one string. We can use our preferred connectors inside the ' ' 
            single quotes.
- sort() :- We use this to sort the elements of an array
- indexOf() :- We use this to find the index of an element in an array
- reverse() :- We use this to reverse the elements in an array
---------------------------------------------------------------------------------------------------------------------------------------------------

### replaceAll in javascript?
```
const str = "welcome to front end interview tips" 
str.replace(/t/g,'a') or str.replaceAll('t','a')
```
---------------------------------------------------------------------------------------------------------------------------------------------------
            
### Skip elements in array using destructuring ?
```
const ary = ['test','test1','test2','test3','test4','test5','test6'];
const [,,...remaining] = ary
console.log(remaining)
```
---------------------------------------------------------------------------------------------------------------------------------------------------
            
### is Set case senstive - Yes 
```
Ex: const obj = new Set("Free fire")
    console.log(...obj) // "F", "r", "e", " ", "f", "i"
``` 
---------------------------------------------------------------------------------------------------------------------------------------------------

### Deep clone obj in JS

JSON.parse(JSON.stringify(obj))

---------------------------------------------------------------------------------------------------------------------------------------------------

### Function Currying ?
Currying is when a function, rather than taking all arguments at once, takes the first one and returns a new function, which then takes the second 
one and returns a new function, and so on until all arguments are completed.

#### Uses of Function Currying:
- It helps us to avoid passing the same variable again and again.
- It separates our function into several smaller functions, each of which can handle a single duty. This ensures that our function is error-free 
and free of side effects.
- It is used in functional programming to create a higher-order function.
- It is extremely useful in event handling.
---------------------------------------------------------------------------------------------------------------------------------------------------

### Repeat a string in js?
```
const str = "hello"
str.repeat(3) // hello hello hello
```
---------------------------------------------------------------------------------------------------------------------------------------------------

### Web 1.0, Web 2.0 and Web 3.0?
- Web 1.0 was all about reading, and getting information. 
- Web 2.0 was all about reading, writing, and creating. 
- Web 3.0 is all about reading, writing and owning.

---------------------------------------------------------------------------------------------------------------------------------------------------

### Create custom Promise?
Custom promise can be create using async.
Adding 'async' turns the return type into promise

const customPromise = async () => return data
customPromise.then(result => console.log(result)) // data

---------------------------------------------------------------------------------------------------------------------------------------------------

### What is reduce function?
---------------------------------------------------------------------------------------------------------------------------------------------------
            
### What is forEach function?

---------------------------------------------------------------------------------------------------------------------------------------------------
### What is Map function?

---------------------------------------------------------------------------------------------------------------------------------------------------
### ForEach vs Map vs Filter?
- The filter() method checks every element in an array to see if it meets a condition and returns a new array with the elements.
- The map() method is used to execute the same code on every element in an array returns a new array with the updated elements.
- The forEach() method is used to execute the same code on every element in an array and will not create array with the result
---------------------------------------------------------------------------------------------------------------------------------------------------
### ForEach vs for loop ?

|For Loop	|forEach Loop|
| ------------- | ------------- |
| It is one of the original ways of iterating over an array.	|It is a newer way with lesser code to iterate over an array.|
|It is faster in performance.	|It is slower than the traditional loop in performance.|
|The break statement can be used to come out from the loop.	|The break statement cannot be used because of the callback function.|
|The parameters are the iterator, counter, and incrementor.	|The parameters are the iterator, index of item, and array to iterate.|
|It works with the await keyword.	|The await keyword cannot be used due to the callback function. It may lead to incorrect output.|

---------------------------------------------------------------------------------------------------------------------------------------------------
### for vs for in vs for as ?

For: help us to get only the value.
For-in: help us to get both value and key

```
Ex: var twoSum = function(nums, target) {
    let final = []
      for (let k in nums) {
        let i = parseInt(k)
        if (nums[i] + nums[i + 1] === target) {
        final.push(i, i + 1)
        }
      }
      return final;
};
```
---------------------------------------------------------------------------------------------------------------------------------------------------
