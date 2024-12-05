import { configureStore } from '@reduxjs/toolkit';
import windowsReducer from './slices/windowsSlice'; // Asigură-te că calea e corectă
import taskbarReducer from './slices/taskbarSlice'; // Asigură-te că calea e corectă

export const store = configureStore({
  reducer: {
    windows: windowsReducer,
    taskbar: taskbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
