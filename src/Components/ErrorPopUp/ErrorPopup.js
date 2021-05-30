import Button from "../UI/Button";
import Card from "../UI/Card";

import styles from "./ErrorPopUp.module.sass";

const ErrorPopUp = (props) => {
  return (
    <Card bgColor={styles.ErrorBgColor}>
      <div className={styles.ErrorContainer}>
        <header className={styles.ErrorHeader}>{props.title}</header>
        <section className={styles.ErrorSection}>{props.message}</section>
        <Button class={styles.ErrorButton} name="Okay" onClick={props.clickEvent} />
      </div>
    </Card>
  );
};

export default ErrorPopUp;
