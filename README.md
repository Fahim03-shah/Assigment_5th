1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ans:
getElementById:
This method returns a single element with the specified id.  IDs should be unique, it only returns one element.

getElementsByClassName:
This returns a live HTMLCollection of all elements that have a specific class. You can loop through the results, but it's not an array.

querySelector:
Returns the first matching element based on a CSS selector. It’s very flexible and can select by ID, class, tag, etc.

querySelectorAll:
Returns all elements that match a given CSS selector, as a static NodeList. 

2.How do you create and insert a new element into the DOM?
ans:
1.Use document.createElement() to create it.

2.set its properties like textContent .

3.Insert it using methods like appendChild, append, or insertBefore.



3.What is Event Bubbling and how does it work?
 ans: Event bubbling is how events propagate in the DOM.like:if you click a button inside a <div>, the event fires on the button first, then on the <div>, and continues upward
 
 
4.What is Event Delegation in JavaScript? Why is it useful?
ans:
Event delegation is when you attach a single event listener to a parent element instead of individual child elements. You then use event.target to find out which child triggered the event.

This is useful when:

1.You have many similar elements like list items.

2.Elements are added dynamically after the page loads.
  
  
5.What is the difference between preventDefault() and stopPropagation() methods?
   ans:
    preventDefault():
    If you click a link, it normally goes to another page. But if you use preventDefault(), it won’t go.


   stopPropagation():
    If you click a button inside a div, the click normally happens on the button and then the div. But if you use stopPropagation(), the event will stop at the button and won’t reach the div.
