import React, { useState } from 'react';
import './Desktop.css';
import Taskbar from '../Taskbar/Taskbar';
import Window from '../Window/Window';
import locales from '../../assets/locales.json';

interface Desktop {
  title: String;
  children: React.ReactNode;
  onClose: () => void;
}

interface Position {
  x: number;
  y: number;
}

const Desktop: React.FC = () => {
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  return (
      <div className="desktop">
         {isWindowOpen && (
        <Window
          title="My Computer"
          onClose={() => setIsWindowOpen(false)}
          onMinimize={() => console.log('Minimize clicked')}
          content={<p>Welcome to My Computer!</p>}
        />
      )}
        <Taskbar />
        {/* <Window title='Paint' content="lalal" onMinimize={function (): void {
          throw new Error('Function not implemented.');
        } } onClose={function (): void {
          throw new Error('Function not implemented.');
        } } /> */}
      </div>
  );
};

export default Desktop;
