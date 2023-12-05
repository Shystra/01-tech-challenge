import { useState } from 'react';
import { Menu } from '../Menu';
import styles from './Header.module.css';
import { ButtonNewCard } from '../ButtonNewCard';

export function Header() {
 const [menuOpen, setMenuOpen] = useState(false);

 return (
    <header className={styles.headerContainer}>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <ButtonNewCard />
    </header>
 );
}