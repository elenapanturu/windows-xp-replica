import { useDispatch, useSelector } from 'react-redux';
import './Desktop.css'
import { RootState } from '../../redux/store';
import { addWindow, minimizeWindow, restoreWindow } from '../../redux/slices/windowsSlice';
import { minimizeApp, restoreApp } from '../../redux/slices/taskbarSlice';
import Window from '../Window/Window';
import Taskbar from '../Taskbar/Taskbar';
import image from '../../assets/images/MyComputer.png'

const Desktop: React.FC = () => {
  const dispatch = useDispatch();
  const windows = useSelector((state: RootState) => state.windows.windows);
  const minimizedApps = useSelector((state: RootState) => state.taskbar.minimizedApps);

  const handleMinimize = (id: string) => {
    dispatch(minimizeWindow(id));
    const windowToMinimize = windows.find(win => win.id === id);
    if (windowToMinimize) {
      dispatch(minimizeApp({ id: windowToMinimize.id, title: windowToMinimize.title, logo: image}));
    }
  };

  const handleRestore = (id: string) => {
    dispatch(restoreWindow(id));
    dispatch(restoreApp(id));
  };

  return (
    <div className="desktop">
      {windows.map(window => (
        !window.isMinimized && (
          <Window
            key={window.id}
            title={window.title}
            onClose={() => console.log('Close clicked')}
            onMinimize={() => handleMinimize(window.id)}
            onRestore={() => handleRestore(window.id)}
            content={window.content === 'myComputerContent' ? <div>nothing</div> : null}  // Afișează conținutul corespunzător            
            isMinimized={window.isMinimized}
          />
        )
      ))}
      <Taskbar
        minimizedApps={minimizedApps}
        restoreApp={handleRestore}
      />
    </div>
  );
};

export default Desktop;
