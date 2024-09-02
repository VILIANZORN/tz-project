import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { NewLabel, SelectAllButton, DeleteSelectedButton, NewCompanyForm } from '../index';
import styles from './table.module.scss';

const Table: FC = () => {
  const companies = useSelector((state: RootState) => state.companies);

  return (
    <div>
      <NewCompanyForm />
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.actionsHeader}>
              <SelectAllButton />
              <DeleteSelectedButton />
            </th>
            <th>Название компании</th>
            <th>Адрес</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {companies.map(company => (
            <NewLabel
              key={company.id}
              id={company.id}
              name={company.name}
              address={company.address}
              isChecked={company.isChecked}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
