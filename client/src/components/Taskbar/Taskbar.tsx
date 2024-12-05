import React, { useState, useEffect } from 'react';
import './Taskbar.css';
import locales from '../../assets/locales.json';
import image from '../../assets/images/start-button.png';

interface TaskbarProps {
  minimizedApps: { id: string; title: string, logo: string }[]; // Modifică pentru a include ID-ul și titlul aplicației
  restoreApp: (id: string) => void;
}

const Taskbar: React.FC<TaskbarProps> = ({ minimizedApps, restoreApp }) => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString('en-GB'));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="taskbar">
      <div className="start-button">
        <img src={image} alt={locales.startButton} className="start-button-image" />
      </div>
      <div className="taskbar-items">
        {minimizedApps.length > 0 ? (
          minimizedApps.map((app) => (
            <><button key={app.id} className="app-button" onClick={() => restoreApp(app.id)}>
              <img src={app.logo} alt={app.title} className="app-logo" />
              {app.title}
            </button>
            </>
          ))
        ) : (
          <span>No minimized apps</span>
        )}
        <div className="clock-container">
          <div className="clock">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default Taskbar;
