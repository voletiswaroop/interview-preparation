Virtual dom?
-  Virtual DOM is just a copy/(virtual representation) of the original DOM kept in the memory and synced with the real DOM by libraries such as ReactDOM.
-  Virtual DOM has the same properties that of the Real DOM, but it lacks the power to directly change the content of the screen.
-  Every time the state of our application changes, the virtual DOM gets updated instead of the real DOM.

---------------------------------------------------------------------------------------------------------------------------------------------------
              
Why Virtual Dom is faster?
- A virtual DOM, which is a tree-shaped representation of the UI, is created by adding elements to it.
- Each element is a node on this tree. Every time one of these elements changes, a new virtual DOM tree is created.
- In the next step, the virtual DOM tree is compared with the previous virtual DOM tree.
- Once this is done, the virtual DOM calculates the best possible method to make these changes to the real DOM.
- This ensures that there are minimal operations on the real DOM. Hence, reducing the performance cost of updating the real DOM.

---------------------------------------------------------------------------------------------------------------------------------------------------
              
Real DOM vs Virtual DOM ?

1. It updates slow.                        1. It updates faster.

2. Can directly update HTML.               2. Can’t directly update HTML.

3. Creates a new DOM if element updates.   3. Updates the JSX if element updates.

4. DOM manipulation is very expensive.     4. DOM manipulation is very easy.

---------------------------------------------------------------------------------------------------------------------------------------------------

Code spliting in reactjs?
  Code spliting can be achieve by using React.lazy() and then wrap it up in <suspense fallback="">.

---------------------------------------------------------------------------------------------------------------------------------------------------
Disadvantages of Css-in-Js ?
I am a big fan of CSS-in-JS especially styled-components but in this article i want to discuss about disadvantages of using CSS-in-JS.

- Difficulty to learn for the devs who are new to react syntax.
- The class names themselves are dynamically generated, too, essentially breaking caching as things can change between builds/renders.
- Css-in-js parses all the style definitions into plain vanilla CSS and put everything inside style tag in index.html file. This will increase html file 
  size.
- Adds lots of unnecessary code while parsing to vanilla css.
- Browser will not start interpreting the styles until styled-components has parsed them and added them to the DOM, which slows down rendering.
- Most of the UI libraries and frameworks won't support this approach.
- We can't use other css utilities like SCSS, LESS and PostCSS.

---------------------------------------------------------------------------------------------------------------------------------------------------
