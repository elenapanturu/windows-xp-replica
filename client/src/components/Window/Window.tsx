import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './Window.css';
import image from '../../assets/images/MyComputer.png';

interface WindowProps {
  title: string;
  onClose: () => void;
  onMinimize: () => void;
  content: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ title, onClose, onMinimize, content }) => {
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = () => setIsMaximized(!isMaximized);

  return (
    <Draggable handle=".window-title">
      <div className={`window ${isMaximized ? 'maximized' : ''}`}>
        <div className="window-content">
          <div className="window-title">
            <span><img src={image}></img>{title}</span>
            <div className="window-controls">
              <button className="window-controls--minimize" onClick={onMinimize}>_</button>
              <button className="window-controls--maximize" onClick={handleMaximize}>{isMaximized ? '[]' : '[ ]'}</button>
              <button className="window-controls--close" onClick={onClose}></button>
            </div>
          </div>
          {/* Condițional permiterea redimensionării doar când fereastra nu este maximizată */}
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
      </div>
    </Draggable>
  );
};

export default Window;
