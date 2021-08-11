import styles from './Input.style.module.scss';
function Input(props) {
  const { type, value, placeholder } = props.configs;
  return (
    <input className={styles.input} type={type} placeholder={placeholder} />
  );
}

export default Input;
