import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditingState } from './types';

const initialEditingState: EditingState = {
  isEditingId: null,
  editedName: '',
  editedAddress: '',
  newCompanyName: '',
  newCompanyAddress: '',
};

const editingSlice = createSlice({
  name: 'editing',
  initialState: initialEditingState,
  reducers: {
    startEditing(state, action: PayloadAction<{ id: string; name: string; address: string }>) {
      const { id, name, address } = action.payload;
      state.isEditingId = id;
      state.editedName = name;
      state.editedAddress = address;
    },
    nameChange(state, action: PayloadAction<string>) {
      state.editedName = action.payload;
    },
    addressChange(state, action: PayloadAction<string>) {
      state.editedAddress = action.payload;
    },
    cancelEditing(state) {
      state.isEditingId = null;
      state.editedName = '';
      state.editedAddress = '';
    },
    newCompanyNameChange(state, action: PayloadAction<string>) {
      state.newCompanyName = action.payload;
    },
    newCompanyAddressChange(state, action: PayloadAction<string>) {
      state.newCompanyAddress = action.payload;
    },
    clearNewCompanyInputs(state) {
      state.newCompanyName = '';
      state.newCompanyAddress = '';
    },
  },
});

export const {
  startEditing,
  nameChange,
  addressChange,
  cancelEditing,
  newCompanyNameChange,
  newCompanyAddressChange,
  clearNewCompanyInputs,
} = editingSlice.actions;

export default editingSlice.reducer;
