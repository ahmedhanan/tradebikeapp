import styles from './Button.style.module.scss';
function Button(props) {
  const { onClick } = props.configs;
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        {props.children}
      </button>
    </>
  );
}

export default Button;
