import styles from "./Card.module.sass";

const Card = props => {
    return (
        <div className={styles.Card}>
            {props.children}
        </div>
    )
}

export default Card;