  import { FC } from 'react';
  import { useDispatch, useSelector } from 'react-redux';
  import { AppDispatch, RootState } from '../../store/store';
  import { newCompanyNameChange, newCompanyAddressChange, clearNewCompanyInputs } from '../../store/editingSlice';
  import { addCompany } from '../../store/companySlice';
  import styles from './newCompanyForm.module.scss';

  const NewCompanyForm: FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const editing = useSelector((state: RootState) => state.editing);

    const handleAddCompany = () => {
      if (editing.newCompanyName && editing.newCompanyAddress) {
        dispatch(addCompany({ name: editing.newCompanyName, address: editing.newCompanyAddress }));
        dispatch(clearNewCompanyInputs());
      }
    };

    return (
      <div className={styles.newCompanyForm}>
        <input
          type='text'
          value={editing.newCompanyName}
          onChange={e => dispatch(newCompanyNameChange(e.target.value))}
          placeholder='New Company Name'
          className={styles.newCompanyInput}
        />
        <input
          type='text'
          value={editing.newCompanyAddress}
          onChange={e => dispatch(newCompanyAddressChange(e.target.value))}
          placeholder='New Company Address'
          className={styles.newCompanyInput}
        />
        <button onClick={handleAddCompany} className={styles.button}>
          Add Company
        </button>
      </div>
    );
  };

  export default NewCompanyForm;
