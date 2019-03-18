import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import useInterval from "./useInterval";
import { Howl } from "howler";

export default function App() {
  const [min, setMin] = useState(0);
  const [seconds, setSeconds] = useState("00");
  const [startCount, setStartCount] = useState(false);

  const handleCountDown = () => {
    setStartCount(true);
  };

  const sound = new Howl({
    src: [
      "https://s3-us-west-2.amazonaws.com/soundskirby/chinese-gong-daniel_simon.wav"
    ],
    volume: 0.3
  });

  const handleStop = () => {
    setStartCount(false);
    setSeconds("00");
    setMin(0);
    sound.play();
  };

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
            type="number"
            min="1"
            max="140"
            required
            className="form-control"
            placeholder="Enter Desired Time"
            onChange={event => setMin(event.target.value)}
            style={{
              textAlign: "center",
              background: "#282c34",
              border: "none",
              fontSize: "40px",
              fontStyle: "bold",
              height: "20vh",
              marginBottom: "10vh",
              color: "white"
            }}
          />

          <button className="btn btn-primary" onClick={() => handleCountDown()}>
            Set Timer
          </button>
        </div>
      )}
      {startCount && (
        <div>
          <h1 className="counting">{`${min}:${seconds}`}</h1>
          <button className="btn btn-primary" onClick={() => handleStop()}>
            Stop Timer
          </button>
        </div>
      )}
    </div>
  );
}
