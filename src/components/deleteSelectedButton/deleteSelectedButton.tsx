import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { deleteSelectedCompanies } from '../../store/companySlice';
import { AppDispatch } from '../../store/store';
import styles from './deleteSelectedButton.module.scss';

const DeleteSelectedButton: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteSelected = () => {
    dispatch(deleteSelectedCompanies());
  };

  return (
    <button onClick={handleDeleteSelected} className={styles.deleteButton}>
      Delete Selected
    </button>
  );
};

export default DeleteSelectedButton;
