import { useState } from 'react';
import { Menu } from '../Menu';
import styles from './Header.module.css';

export function Header() {
 const [menuOpen, setMenuOpen] = useState(false);

 return (
    <header className={styles.header}>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </header>
 );
}