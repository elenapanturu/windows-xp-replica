import { RootState } from './store';

export const selectWindows = (state: RootState) => state.windows.windows;

export const selectMinimizedWindows = (state: RootState) =>
  state.windows.windows.filter((win) => win.isMinimized);
