import styles from './ButtonNewCard.module.css';

export function ButtonNewCard (){
    return(
        <div className={styles.buttonContainer}>
            <button>+ Novo Card</button>
        </div>
    )
}