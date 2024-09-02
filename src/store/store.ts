import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './companySlice';
import editingReducer from './editingSlice';

const store = configureStore({
  reducer: {
    companies: companyReducer,
    editing: editingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
