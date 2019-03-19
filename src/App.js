import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import useInterval from "./useInterval";
import { Howl } from "howler";
import TopNav from "./Containers/TopNav";

export default function App() {
  //Declares all of the state items min(minute), sec(second), startCount, end, hiddenTime
  const [min, setMin] = useState(0);
  const [seconds, setSeconds] = useState("00");
  const [startCount, setStartCount] = useState(false);
  const [end, setEnd] = useState(false);
  const [hiddenTime, setHiddenTime] = useState(5);
  const [menuShow, setMenuShow] = useState(false);

  // Declares and Assigns Ending Sound - TODO: Extract several sounds - and give user a choice
  const sound = new Howl({
    src: [
      "https://s3-us-west-2.amazonaws.com/soundskirby/chinese-gong-daniel_simon.wav"
    ],
    volume: 0.3
  });

  // Called When Clicked - Starts Countdown - Removes (Completion) Notice
  const handleCountDown = () => {
    setStartCount(true);
    setEnd(false);
    setHiddenTime(0);
  };

  // Custom Hook that acts like setInterval. Moves 11:00 to 10:59, & formats 10:9 to 10:09, & ends at 0:00
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

  // When Time runs out or Stop is clicked - clears state and plays sound
  const handleStop = () => {
    clearSettings();
    sound.play();
  };

  // Clears all State
  const clearSettings = () => {
    setStartCount(false);
    setSeconds("00");
    setMin(0);
    setHiddenTime(5);
    setEnd(true);
  };

  // Method Runs when Countdown Ends or Stopped... Runs for 5 seconds from a hidden timer.
  useInterval(() => {
    if (end && hiddenTime > 0) {
      setHiddenTime(hiddenTime - 1);
    } else if (end && hiddenTime <= 0) {
      setEnd(false);
    }
  }, 1000);

  const handleMenu = () => {
    setMenuShow(!menuShow);
  };

  return (
    <div className="App">
      {/* NAV BURGER VIEW AT TOP  */}

      <TopNav menuShow={menuShow} handleMenu={handleMenu} />
      {/* User Selection View */}
      <div className="user-options">
        <i className="fas fa-headphones user-btn" />
        <i className="fas fa-ring user-btn" />
        <i className="fas fa-font user-btn" />
        <i className="far fa-save user-btn" />
      </div>
      {/* END VIEW - Completion shown Below BASIC VIEW */}
      <div className="complete-bnr">
        {end && (
          <h1 className="complete" onClick={() => setHiddenTime(0)}>
            Complete
          </h1>
        )}
      </div>

      {/* BASIC VIEW - USER Set Time and Button to Start Shown  */}
      {!startCount && !end && (
        <div>
          <input
            type="number"
            min="1"
            max="140"
            required
            className="time-form form-control"
            placeholder="Enter Desired Time"
            onChange={event => setMin(event.target.value)}
          />
          <button
            className="btn btn-primary btn-loca"
            onClick={() => handleCountDown()}
          >
            Set Timer
          </button>
        </div>
      )}
      {/* COUNTDOWN VIEW - Second By Second Countdown Shown and Stop Button  */}
      {startCount && (
        <div>
          <h1 className="counting">{`${min}:${seconds}`}</h1>

          <button
            className="btn btn-primary btn-loca"
            onClick={() => handleStop()}
          >
            Stop Timer
          </button>
        </div>
      )}
    </div>
  );
}
