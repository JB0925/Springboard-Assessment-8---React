### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
React is a frontend framework / library for JavaScript. You would use it if you wanted to create a frontend that needed JavaScript. You should use it because it is flexible, has a large community that is full of resources, and is a popular choice amongst other developers.

- What is Babel?
Babel is a JS compiler that is used to "translate" JSX and newer JavaScript syntax in a backwards compatible way, to ensure that older (or sometimes even current) browsers can understand.

- What is JSX?
It stands for JavaScript XML and is basically a syntax extender. It allows us to write HTML style components in React.

- How is a Component created in React?
Components are usually kept as small as possible. We make the necessary imports of dependencies, and then the newer, function based React components look like:
    const Component = () => {

    }

- What are some difference between state and props?
State can be changed frequently, but props are immutable. Changing state re-renders the component / browser, but a change to a prop (from the side that is passing the prop) doesn't mean that it will re-render.

- What does "downward data flow" refer to in React?
Downward data flow refers to the idea of a "smarter" parent component passing down data to a "dumber" child component. This is usually done by passing the child component a series of props. These child components usually do not keep state.

- What is a controlled component?
Controlled components are anything that is controlled by React's state. For example, forms in React are controlled components. They update on every change based on a function defined in React, and their submission is handled by React as well.

- What is an uncontrolled component?
Uncontrolled components are the opposite of the above. An example would be more like selecting a DOM element with vanilla JavaScript and adding an event listener manually, instead of through React.

- What is the purpose of the `key` prop when rendering a list of components?
Without the key prop, components don't always render as they should, components can be rendered out of order, etc.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
An index is a poor choice because it could always change if data is added to the array, or taken away from the array, and a key is not supposed to change if possible.

- Describe useEffect.  What use cases is it used for in React components?
useEffect is used to do somethng as soon as a component is rendered, or every time a particular piece of state changes. For example, maybe an API call needs to be made, but you don't want to do it too soon. useState will only make that call after the component is mounted. useState can also return a "clean up" function, which can be useful for canceling timers, intervals, ending web socket connections, etc.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
useRef works in a similar fashion to Flask's "g". It acts as a global variable that can be assigned to anything. It is an object that has a key of "current." We can use useRef to cancel timers, or access otherwise hard to access DOM elements in React.

- When would you use a ref? When wouldn't you use one?
We can use useRef to cancel timers, or access otherwise hard to access DOM elements in React. That said, we do not want to overly rely on useRef to access DOM elements, because that is not what it is for. It's there if we need it for that purpose, but don't go overboard.

- What is a custom hook in React? When would you want to write one?
Custom hooks are essentially helper functions that are often used to abstract away a lot of the logic from a component. You can use a custom hook to create and update State, make AJAX calls, use LocalStorage, etc. Custom hooks should go in their own directory and file, and each one should start with "use."
