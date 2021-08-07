import styles from '../styles/404.module.scss';

export default function Error() {
  return (
    <div className={styles.error}>
      <h2>Страница не существует</h2>
    </div>
  );
}
