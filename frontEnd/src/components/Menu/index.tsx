import { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logoTaskaban from '../../assets/TASKBAN.jpg';
import { ButtonsOptionsMenu } from '../ButtonsOptionsMenu';

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

        if (!isSmallScreen && initialLoad) {
            setTimeout(() => {
                setMenuOpen(true);
                setInitialLoad(false);
            }, 300);
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
                {menuOpen && (
                    <img src={logoTaskaban} alt="Logo Taskaban" className={styles.logoTaskaban} />
                )}

                <ButtonsOptionsMenu />
            </div>
        </>
    );
}
