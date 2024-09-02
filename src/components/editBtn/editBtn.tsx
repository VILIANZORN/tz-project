import { FC } from 'react';
import styles from './EditBtn.module.scss';

interface EditBtnProps {
  isEditing: boolean;
  startEditing: () => void;
  saveChanges: () => void;
  cancelEditing: () => void;
}

const EditBtn: FC<EditBtnProps> = ({ isEditing, startEditing, saveChanges, cancelEditing }) => {
  return (
    <td>
      {isEditing ? (
        <>
          <button onClick={saveChanges} className={styles.saveButton}>
            Save
          </button>
          <button onClick={cancelEditing} className={styles.cancelButton}>
            Cancel
          </button>
        </>
      ) : (
        <button onClick={startEditing} className={styles.editButton}>
          Edit
        </button>
      )}
    </td>
  );
};

export default EditBtn;
