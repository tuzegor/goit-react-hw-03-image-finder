import styles from './Button.module.css';
function Button({ loadMore }) {
  return (
    <button className={styles.Button} onClick={loadMore}>
      Load more
    </button>
  );
}
export default Button;
