import styles from './next-lib.module.scss';

/* eslint-disable-next-line */
export interface NextLibProps {}

export function NextLib(props: NextLibProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to NextLib!</h1>
    </div>
  );
}

export default NextLib;
