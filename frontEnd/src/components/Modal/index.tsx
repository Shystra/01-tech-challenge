import { InputModal } from '../../Inputs/InputModal';
import styles from './modal.module.css';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export function Modal({isOpen, onClose, children}: ModalProps) {
    if(!isOpen) return null;

    return(
        <div className={styles.modalBackdrop}>
            <div className={styles.modalContent}>
                <h1 className={styles.titleModal}>Novo Card</h1>
                <div className={styles.modalBody}>
                    <InputModal/>
                </div>
                <div className={styles.buttonContainer}>

                <button className={styles.cancel} onClick={onClose}>CANCELAR</button>
                <button className={styles.save} onClick={onClose}>CRIAR</button>

                </div>
                {children}
            </div>
        </div>
    )
}