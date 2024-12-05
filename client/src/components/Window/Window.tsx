import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './Window.css';
import image from '../../assets/images/MyComputer.png';
import 'xp.css/dist/XP.css';

interface WindowProps {
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  onRestore: () => void;
  content: React.ReactNode;
  isMinimized: boolean;
}

const Window: React.FC<WindowProps> = ({ title, onClose, onMinimize, onRestore, content, isMinimized }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => setIsMaximized(!isMaximized);

  if (isMinimized) return null; 

  return (
    <Draggable handle=".title-bar">
      <div className={`window ${isMaximized ? 'maximized' : ''}`}>
        <div className="title-bar">
          <div className="title-bar-text">
            <img src={image} alt="icon" style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            {title}
          </div>
          <div className="title-bar-controls">
            <button aria-label="Minimize" onClick={onMinimize}></button>
            <button aria-label="Maximize" onClick={handleMaximize}></button>
            <button aria-label="Close" onClick={onClose}></button>
          </div>
        </div>

        {!isMaximized && (
          <ResizableBox
            width={400}
            height={300}
            minConstraints={[200, 150]}
            maxConstraints={[800, 600]}
            axis="both"
          >
            <div className="window-body">
              {content}
            </div>
          </ResizableBox>
        )}

        {isMaximized && (
          <div className="window-body maximized">
            {content}
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Window;
