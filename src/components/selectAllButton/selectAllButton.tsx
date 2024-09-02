import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSelectAll } from '../../store/companySlice';
import { RootState, AppDispatch } from '../../store/store';
import styles from './selectAllButton.module.scss';

const SelectAllButton: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const companies = useSelector((state: RootState) => state.companies);

  const handleSelectAll = () => {
    const isAllSelected = companies.every(company => company.isChecked);
    dispatch(toggleSelectAll(!isAllSelected));
  };

  return (
    <button onClick={handleSelectAll} className={styles.selectAllButton}>
      ALL
    </button>
  );
};

export default SelectAllButton;
