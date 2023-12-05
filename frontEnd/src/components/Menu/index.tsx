import { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface MenuProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
}

export function Menu({ menuOpen, setMenuOpen }: MenuProps) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', updateScreenSize);

        // Se for uma tela maior, aplique a animação após a montagem do componente
        if (!isSmallScreen && initialLoad) {
            setTimeout(() => {
                setMenuOpen(true);
                setInitialLoad(false);
            }, 300); // Ajuste o tempo de atraso conforme necessário
        }

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, [isSmallScreen, initialLoad, setMenuOpen]);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            {isSmallScreen && !menuOpen && (
                <div onClick={handleMenuClick} className={styles.menuIcon}>
                    <IoMdMenu />
                </div>
            )}
            <div className={[styles.menuContainer, menuOpen ? styles.menuOpen : ''].join(' ')}>
                {isSmallScreen && (
                    <div onClick={handleMenuClick} className={styles.closeIcon}>
                        <IoMdClose />
                    </div>
                )}
            </div>
        </>
    );
}


