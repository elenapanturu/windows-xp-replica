import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Window {
  id: string;
  title: string;
  isMinimized: boolean;
  content: React.ReactNode;
}

interface WindowsState {
  windows: Window[];
}

const initialState: WindowsState = {
  windows: [
    {
        id: 'myComputer',
        title: 'My Computer',
        isMinimized: false,
        content: 'myComputerContent', 
      },
  ],
};

const windowsSlice = createSlice({
  name: 'windows',
  initialState,
  reducers: {
    addWindow: (state, action: PayloadAction<Window>) => {
      state.windows.push(action.payload);
    },
    minimizeWindow: (state, action: PayloadAction<string>) => {
      const window = state.windows.find((win) => win.id === action.payload);
      if (window) {
        window.isMinimized = true;
      }
    },
    restoreWindow: (state, action: PayloadAction<string>) => {
      const window = state.windows.find((win) => win.id === action.payload);
      if (window) {
        window.isMinimized = false;
      }
    },
  },
});

export const { addWindow, minimizeWindow, restoreWindow } = windowsSlice.actions;
export default windowsSlice.reducer;
