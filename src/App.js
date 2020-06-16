import React, { useState } from 'react';
import { Message } from './Message'
import './App.css';

export default function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);

  return (
    <div className={`container ${isMorning ? "day" : "night"}`}>
      <h1>Good {isMorning ? 'Morning' : 'Night sweet dreams '}</h1>

      <Message counter={count} />
      <button onClick={() => setCount(++count)}>ADD</button>
      <button onClick={() => setCount(--count)}>SUBTRACT</button>
      <button onClick={() => setCount(0)}>RESET</button>
      <br />
      <br />
      <button onClick={() => setMorning(true)}>ON</button>
      <button onClick={() => setMorning(false)}>OFF</button>
    </div>
  );
}