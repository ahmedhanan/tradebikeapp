import styles from './Select.style.module.scss';
function Select(props) {
  const { name, id, form } = props.configs;
  return (
    <>
      <select name={name} id={id} form={form} className={styles.select}>
        {props.children}
      </select>
    </>
  );
}

export default Select;
