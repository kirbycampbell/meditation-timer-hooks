import React, { useState } from "react";

import "./App.css";
import useInterval from "./useInterval";

export default function App() {
  const [min, setMin] = useState(0);
  const [seconds, setSeconds] = useState("00");
  const [startCount, setStartCount] = useState(false);

  const handleCountDown = () => {
    setStartCount(true);
  };

  const handleStop = () => {
    setStartCount(false);
    setSeconds("00");
    setMin(0);
  };

  //
  useInterval(() => {
    if (startCount) {
      if (min <= 0 && seconds <= "00") {
        handleStop();
      } else if (seconds === "00") {
        setSeconds("59");
        setMin(min - 1);
      } else if (seconds > "10") {
        setSeconds(seconds - "01");
      } else if (seconds <= "10") {
        setSeconds(`0${seconds - 1}`);
      }
    }
  }, 1000);

  return (
    <div className="App">
      {!startCount && (
        <div>
          <input
            placeholder="Enter Desired Min"
            onChange={event => setMin(event.target.value)}
          />
          <button onClick={() => handleCountDown()}>Set Timer</button>
        </div>
      )}
      {startCount && (
        <div>
          <button onClick={() => handleStop()}>Stop Timer</button>
          <p>{`${min}:${seconds}`}</p>
        </div>
      )}
    </div>
  );
}
