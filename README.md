# Customer Support Zone

A React-based support dashboard to manage customer tickets, track in-progress work, and resolve tasks with a clear workflow.

## Features

- Navbar with brand, menu items, and `New Ticket` button
- Banner with linear-gradient background and live counters
- Customer tickets rendered from JSON data (12 tickets)
- Two-column ticket layout on desktop
- Task Status panel to manage selected in-progress tickets
- Task completion flow with React-Toastify notifications
- Resolved task list that updates in real time
- Responsive behavior for tablet and mobile
- Footer section with link groups and social actions

## Tech Stack

- React.js
- JavaScript (ES6+)
- CSS (Vanilla)
- React-Toastify
- Vite

## React Questions

### 1) What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write UI structures in a tag-like form. React uses it to make component templates easier to read and maintain, while still compiling to normal JavaScript.

### 2) What is the difference between State and Props?

- Props are inputs passed from a parent component to a child component.
- State is data managed inside a component (or lifted to a common parent) that can change over time.

Props are read-only in the receiving component, while state can be updated using state setters.

### 3) What is the `useState` hook, and how does it work?

`useState` is a React hook for storing local component state in function components.

Example:

```jsx
const [count, setCount] = useState(0);
```

- `count` is the current value.
- `setCount` updates the value.
- Calling `setCount` triggers a re-render with the new state.

### 4) How can you share state between components in React?

The common approach is lifting state up to the nearest shared parent component and passing values/functions down through props. For larger apps, Context API or state libraries can reduce prop drilling.

### 5) How is event handling done in React?

Events are handled by passing functions to props like `onClick`, `onChange`, and `onSubmit`.

Example:

```jsx
<button onClick={handleClick}>Complete</button>
```

React uses a synthetic event system that normalizes event behavior across browsers.

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
