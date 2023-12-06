import { useState } from 'react';
import { Modal } from '../Modal';
import styles from './ButtonNewCard.module.css';

export function ButtonNewCard (){
    const [isModalOpen, setIsModalOpen] = useState(false);

    return(
        <>
            <div className={styles.buttonContainer}>
                <button onClick={() => setIsModalOpen(true)}>+ Novo Card</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                {/* Conteúdo do modal aqui */}
            </Modal>
        </>
    );
}