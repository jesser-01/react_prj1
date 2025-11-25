import React, { useState } from 'react';
import Counter from './Counter';
import Message from './Message';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('Hello from parent!');

  return (
    <div>
      <h1>Sample React Debugging App</h1>
      <Counter count={count} setCount={setCount} />
      <Message message={message} setMessage={setMessage} />
    </div>
  );
}

export default App;
