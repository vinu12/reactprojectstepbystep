import React from 'react';

// Define a functional component called "MyFunctionalComponent"
function MyFunctionalComponent(props) {
  // This component takes a "props" parameter which can be used to pass data from a parent component

  // You can use the props to access data passed to this component
  const { name } = props;

  // Return JSX (JavaScript XML) to define the component's UI
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>This is a functional component.</p>
    </div>
  );
}

// You can then use this component in another component like this:
function App() {
  return (
    <div>
      <MyFunctionalComponent name="John" />
      <MyFunctionalComponent name="Alice" />
    </div>
  );
}

export default App;
