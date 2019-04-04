import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import useInterval from "./useInterval";
import { Howl } from "howler";
import TopNav from "./Containers/TopNav";
import UserSelectView from "./Containers/UserSelectView";
import Complete from "./Containers/Complete";
import TimerView from "./Containers/TimerView";
import CountDownView from "./Containers/CountDownView";

export default function App() {
  //Declares all of the state items min(minute), sec(second), startCount, end, hiddenTime
  const [min, setMin] = useState(0);
  const [seconds, setSeconds] = useState("00");
  const [startCount, setStartCount] = useState(false);
  const [end, setEnd] = useState(false);
  const [hiddenTime, setHiddenTime] = useState(5);
  const [menuShow, setMenuShow] = useState(false);
  const [bgMusicView, setbgMusicView] = useState(false);
  const [endSoundView, setEndSoundView] = useState(false);
  const [hideTimerView, setHideTimerView] = useState(false);

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

  const handleBckgrndMusic = () => {
    console.log("Background Music Clicked");
    setbgMusicView(!bgMusicView);
    setHideTimerView(true);
  };

  const handleDing = () => {
    console.log("Ding Selector Clicked");
    setEndSoundView(!endSoundView);
    setHideTimerView(true);
  };

  const handleTimerView = () => {
    console.log("Timer View Clicked");
    setbgMusicView(false);
    setEndSoundView(false);
    setHideTimerView(false);
  };

  const handleSave = () => {
    console.log("Save Option Clicked");
    setHideTimerView(true);
  };

  return (
    <div className="App">
      <TopNav menuShow={menuShow} handleMenu={handleMenu} />
      <UserSelectView
        handleBckgrndMusic={handleBckgrndMusic}
        handleDing={handleDing}
        handleTimerView={handleTimerView}
        handleSave={handleSave}
        startCount={startCount}
      />
      <Complete end={end} setHiddenTime={setHiddenTime} />
      <TimerView
        startCount={startCount}
        end={end}
        setMin={setMin}
        handleCountDown={handleCountDown}
        hideTimerView={hideTimerView}
      />
      <CountDownView
        startCount={startCount}
        handleStop={handleStop}
        min={min}
        seconds={seconds}
      />
    </div>
  );
}
