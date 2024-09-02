import { FC } from 'react';
import { Header, Table } from '../components/index';
import styles from './app.module.scss'

const App: FC = () => {
  return (
    <div className={styles.main}>
      <Header />
      <Table />
    </div>
  );
};

export default App;
