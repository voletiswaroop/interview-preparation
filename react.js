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
