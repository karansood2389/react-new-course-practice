import styles from "./Modal.module.sass";

const Modal = (props) => {
  return (
    <div className={`${styles.Modal} ${props.show ? styles.ModalShow : ""}`}>
      <div className={styles.ModalComp}>{props.children}</div>
    </div>
  );
};

export default Modal;
