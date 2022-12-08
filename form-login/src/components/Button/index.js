import styles from './button.module.css'

const Button = ({title}) =>{
    return(

    <div className={styles.buttonContainer}>
        <button className={styles.buttonStyle}>{title}</button>
    </div>

    )
}
export default Button