
import { ContactMe } from '../contactMe';
import styles from './styles.module.css';


export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <section>
                <p>Designed and Developed by Samuel Fonseca</p>
            </section>
            <section>
                <p>Copyright © {currentYear} SF</p>
            </section>
            <ContactMe/>
        </footer>
    );
}
