export interface Company {
    id: string;
    name: string;
    address: string;
    isChecked: boolean;
}

export interface EditingState {
    isEditingId: string | null;
    editedName: string;
    editedAddress: string;
    newCompanyName: string;
    newCompanyAddress: string;
}
