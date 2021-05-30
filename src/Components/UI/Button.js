import styles from './Button.module.sass';

const Button = props => {
   return (
       <div className={`${styles.Button} ${props.class ? props.class: ''}`}>
           <button onClick={props.onClick}>
               {props.name}
           </button>
       </div>
   ) 
}

export default Button;
