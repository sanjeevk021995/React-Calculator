import styles from "./Display.module.css";
const Display = ({ displayValue }) => {
  return (
    <input
      className={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
  //readOnly for avoiding typing in textbox only input through buttons
};
export default Display;
