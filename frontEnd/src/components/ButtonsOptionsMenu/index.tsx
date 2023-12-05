import styles from './ButtonsOptionsMenu.module.css';
import ciDashboard from '../../assets/ci_dashboard-02.jpg';
import event from '../../assets/event.jpg';
import timeLine from '../../assets/clarity_timeline-line.jpg';
import calendar from '../../assets/event.jpg';


export function ButtonsOptionsMenu() {
    return (
        <div className={styles.buttonsOptionsContainer}>
            <div className={styles.menuItem}>
                <img className={styles.menuIcon} src={ciDashboard} alt='Quadro' />
                <span>Quadro</span>
            </div>
            <div className={styles.menuItem}>
                <img className={styles.menuIcon} src={event} alt="Lista" />
                <span>Lista</span>
            </div>
            <div className={styles.menuItem}>
                <img className={styles.menuIcon} src={timeLine} alt="Timeline" />
                <span>Timeline</span>
            </div>
            <div className={styles.menuItem}>
                <img className={styles.menuIcon} src={calendar} alt="Calendário" />
                <span>Calendário</span>
            </div>
        </div>
    )
}