import { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import { IoMdClose, IoMdMenu } from "react-icons/io";

interface MenuProps {
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;

}

export function Menu({ menuOpen, setMenuOpen }: MenuProps) {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const updateScreenSize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', updateScreenSize);

        return () => {
            window.removeEventListener('resize', updateScreenSize);
        };
    }, []);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={[styles.menuContainer, styles.menuOpen].join(' ')}>
            Menu
            {isSmallScreen && (
                <div onClick={handleMenuClick}>
                    {menuOpen ? <IoMdClose className={styles.iconMenu} color="red"/> : <IoMdMenu className={styles.iconMenu} color="red" />}
                </div>
            )}
        </div>
    );
}