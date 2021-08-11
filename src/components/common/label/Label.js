import styles from './Label.style.module.scss';
function Label(props) {
  const { labelFor, styling } = props.configs;
  return (
    <>
      <label className={`${styling} ${styles.label}`} htmlFor={labelFor}>
        {props.children}
      </label>
    </>
  );
}

export default Label;
