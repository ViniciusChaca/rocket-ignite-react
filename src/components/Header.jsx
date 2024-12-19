import styles from "./Header.module.css"
import ignitelogo from "../assets/ignite_logo.svg"

console.log(ignitelogo);

export function Header() {
    return (
        <header className={styles.header}>
            <img src={ignitelogo} alt="Logotipo do Ignite"/>
            <span>Ignite Feed</span>
        </header>
    );
}