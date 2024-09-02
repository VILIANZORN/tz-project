import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { Company } from './types';

const initialCompanyState: Company[] = [
  { id: uuidv4(), name: 'Company 1', address: 'Address 1', isChecked: false },
  { id: uuidv4(), name: 'Company 2', address: 'Address 2', isChecked: false },
  { id: uuidv4(), name: 'Company 3', address: 'Address 3', isChecked: false },
  { id: uuidv4(), name: 'Company 4', address: 'Address 4', isChecked: false },
];

const companySlice = createSlice({
  name: 'companies',
  initialState: initialCompanyState,
  reducers: {
    toggleSelectAll(state, action: PayloadAction<boolean>) {
      return state.map(company => ({
        ...company,
        isChecked: action.payload,
      }));
    },
    toggleCheckbox(state, action: PayloadAction<string>) {
      const company = state.find(company => company.id === action.payload);
      if (company) {
        company.isChecked = !company.isChecked;
      }
    },
    updateCompany(state, action: PayloadAction<{ id: string; name: string; address: string }>) {
      const { id, name, address } = action.payload;
      const company = state.find(company => company.id === id);
      if (company) {
        company.name = name;
        company.address = address;
      }
    },
    addCompany(state, action: PayloadAction<{ name: string; address: string }>) {
      const newId = uuidv4();
      state.unshift({ ...action.payload, id: newId, isChecked: false });
    },
    deleteSelectedCompanies(state) {
      return state.filter(company => !company.isChecked);
    },
  },
});

export const { toggleSelectAll, toggleCheckbox, updateCompany, addCompany, deleteSelectedCompanies } =
  companySlice.actions;

export default companySlice.reducer;
