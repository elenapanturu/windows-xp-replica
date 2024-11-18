import React, { useState, useEffect } from 'react';
import './Taskbar.css';
import locales from '../../assets/locales.json';
import image from '../../assets/images/start-button.png';

const Taskbar: React.FC = () => {
  const [time, setTime] = useState<string>(
    new Date().toLocaleTimeString('en-GB'),
  );
  const [date, setDate] = useState<string>(
    new Date().toLocaleDateString('en-GB'),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US')); // Update time every second
      //setDate(new Date().toLocaleDateString('en-GB')); // Actualizare dată
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <>
      <div className="taskbar">
        <div className="start-button">
          <img
            src={image}
            alt={locales.startButton}
            className="start-button-image"
          />
        </div>
        <div className="taskbar-items">
          {/* Aici poți adăuga butoane pentru aplicațiile deschise */}

          <div className="clock-container">
            <div className="clock">{time}</div>
            {/* <div className="date">{date}</div> Afișează data sub ceas */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Taskbar;
