import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { toggleCheckbox, updateCompany } from '../../store/companySlice';
import { startEditing, nameChange, addressChange, cancelEditing } from '../../store/editingSlice';
import { EditBtn } from '../index';
import styles from './newLabel.module.scss';

interface NewLabelProps {
  id: string;
  name: string;
  address: string;
  isChecked: boolean;
}

const NewLabel: FC<NewLabelProps> = ({ id, name, address, isChecked }) => {
  const dispatch = useDispatch<AppDispatch>();
  const editing = useSelector((state: RootState) => state.editing);

  const isEditing = editing.isEditingId === id;
  const editedName = editing.editedName;
  const editedAddress = editing.editedAddress;

  const handleCheckboxChange = () => dispatch(toggleCheckbox(id));
  const handleNameChange = (name: string) => dispatch(nameChange(name));
  const handleAddressChange = (address: string) => dispatch(addressChange(address));
  const handleSave = () => {
    dispatch(updateCompany({ id, name: editedName, address: editedAddress }));
    dispatch(cancelEditing());
  };
  const handleCancel = () => dispatch(cancelEditing());
  const handleStartEditing = () => dispatch(startEditing({ id, name, address }));

  return (
    <tr className={isChecked ? styles.checkedRow : ''}>
      <td>
        <label>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className={styles.customCheckbox}
          />
          <span className={styles.customCheckbox}></span>
        </label>
      </td>
      <td>
        {isEditing ? (
          <input
            type='text'
            value={editedName}
            onChange={e => handleNameChange(e.target.value)}
            className={styles.editInput}
          />
        ) : (
          name
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type='text'
            value={editedAddress}
            onChange={e => handleAddressChange(e.target.value)}
            className={styles.editInput}
          />
        ) : (
          address
        )}
      </td>
      <EditBtn
        isEditing={isEditing}
        startEditing={handleStartEditing}
        saveChanges={handleSave}
        cancelEditing={handleCancel}
      />
    </tr>
  );
};

export default NewLabel;
