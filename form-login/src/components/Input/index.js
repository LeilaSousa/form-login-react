import styles from './input.module.css'
import React from 'react'

const Input =( {type, name, register, required, error} )  => {
    return(<>
        <div className={styles.inputContainer}>
            <input className={styles.inputStyle}
            type={type}
            name={name}
            {...register(name,{required})}>          
            </input>
            <p className={styles.error}>{error}</p>
        </div>
      
           
        
        
        </>
        )
}
export default Input