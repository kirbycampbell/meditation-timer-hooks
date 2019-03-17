import React, { useState } from "react";

import "./App.css";

export default function App() {
  const [time, setTime] = useState(0);
  const [countdown, setCountdown] = useState(0);
  return (
    <div className="App">
      <input
        placeholder="Enter Desired Min"
        onChange={event => setTime(event.target.value)}
      />
      <button onClick={() => setCountdown(time)}>Set Timer</button>
      <p>{countdown}</p>
    </div>
  );
}
