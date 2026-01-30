import styles from "../style/navbar.module.css";
import { CSSPlugin } from './../../node_modules/gsap/CSSPlugin';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>RAVEN</div>
      <button className={styles.menu}>MENU</button>
    </nav>
  );
}
