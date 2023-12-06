import styles from './InputModal.module.css';

export function InputModal() {
    return (
        <>

            <input
                className={styles.inputField}
                type="text"
                placeholder="Título da Task"
            />
            <textarea
                className={styles.textAreaField}
                placeholder="Descrição"
            />
            <div className={styles.inputContainerDataSelect}>

                <input
                    className={styles.inputFieldData}
                    type="date"
                    placeholder="Data Final"
                />
                <select className={styles.selectField}>
                    <option value="alta">Alta</option>
                    <option value="media">Média</option>
                    <option value="baixa">Baixa</option>
                </select>
            </div>
        </>
    )
}