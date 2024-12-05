import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MinimizedApp {
  id: string;
  title: string;
  logo: string;
}

interface TaskbarState {
  minimizedApps: MinimizedApp[];
}

const initialState: TaskbarState = {
  minimizedApps: [],
};

const taskbarSlice = createSlice({
  name: 'taskbar',
  initialState,
  reducers: {
    minimizeApp: (state, action: PayloadAction<MinimizedApp>) => {
      state.minimizedApps.push(action.payload);
    },
    restoreApp: (state, action: PayloadAction<string>) => {
      state.minimizedApps = state.minimizedApps.filter(app => app.id !== action.payload);
    },
  },
});

export const { minimizeApp, restoreApp } = taskbarSlice.actions;
export default taskbarSlice.reducer;
